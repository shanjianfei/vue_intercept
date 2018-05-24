<template>
    <div class="user">
        <p>hello world!</p>
        <ul>
            <li><router-link to="/user/userinfo">User Info</router-link></li>
            <li><router-link to="/user/userlist">User List</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>