<template>
    <div class="user">
        <h2>首页</h2>
        <div>
            <ul>
                <li><router-link to="/user/userinfo">User Info</router-link></li>
                <li><router-link to="/user/userlist">User List</router-link></li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<style>
    .user {
        text-align: left;
    }
</style>