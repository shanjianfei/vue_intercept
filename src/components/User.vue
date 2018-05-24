<template>
    <div class="user">
        <h2>首页</h2>
        <div>
            <router-link to="/user/userinfo" tag="button">User Info</router-link></li>
            <router-link to="/user/userlist" tag="button">User List</router-link></li>
        </div>
        <router-view></router-view>
    </div>
</template>
<style>
    li {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
</style>