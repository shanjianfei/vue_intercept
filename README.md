# vue 前端登录拦截

> A Vue.js project

## 登录拦截如何实现(token为例)
#### 第一步：前端路由拦截
路由配置如下
在这里我们需要自定义一个元数据meta: {authRequired: true}来标记哪些路由是需要登录验证的，这里访问/user/userlist是需要登录拦截的。
```js
const router = new Router({
  routes: [
    {
        path: '/',
        redirect: '/user',
    },
    {
        path: '/login',
        component: LogIn
    },
    {
        path: '/user',
        component: User,
        children: [
            {
                path: 'userinfo',
                component: UserInfo
            },
            {
                path: 'userlist',
                component: UserList,
                meta: {authRequired: true}
            }
        ]
    }
  ]
})
```
这里用路由的全局守卫beforeEach进行判断拦截。
```js
router.beforeEach((to, from, next) => {
    if(to.meta.authRequired) {
        if(localStorage.getItem('token')) {
            next()
        } else {
            next({path: '/login'})
        }
    } else {
        next()
    }
})
```

#### 第二部：http请求拦截

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
