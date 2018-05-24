import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import UserInfo from '@/components/UserInfo'
import News from '@/components/News'
import LogIn from '@/components/LogIn'

Vue.use(Router)

const router = new Router({
  routes: [
    {
        path: '/',
        redirect: '/homepage',
    },
    {
        path: '/login',
        component: LogIn
    },
    {
        path: '/homepage',
        component: HomePage,
        children: [
            {
                path: 'userinfo',
                component: UserInfo,
                meta: {authRequired: true}
            },
            {
                path: 'news',
                component: News,
            }
        ]
    }
  ]
})

router.beforeEach((to, from, next) => {
    if(to.meta.authRequired) {
        if(localStorage.getItem('token')) {
            next()
        } else {
            next({path: '/login', query:{redirect: to.fullPath}})
        }
    } else {
        next()
    }
})

export default router
