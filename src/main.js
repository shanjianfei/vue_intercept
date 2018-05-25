// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers['Authorization'] = localStorage.getItem('token');
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    // 当验证不通过，则清除本地保存的token，并且返回登录界面
    if(error.response.status === 401) {
        localStorage.removeItem('token');
        router.push('/login');
    }
    return Promise.reject(error);
  });

Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  components: { App },
  template: '<App/>'
})
