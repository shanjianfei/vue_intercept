import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import UserInfo from '@/components/UserInfo'
import UserList from '@/components/UserList'
import LogIn from '@/components/LogIn'

Vue.use(Router)

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

export default router
