<template>
    <div class="home-page">
        <h2>首页</h2>
        <button @click="clearToken">清除token</button>
        <div>
            <router-link to="/homepage/news" tag="button">News</router-link></li>
            <router-link to="/homepage/userinfo" tag="button">User Info</router-link></li>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        methods: {
            clearToken: function() {
                localStorage.removeItem('token')
            }
        }
    }
</script>
<style>
    li {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    .home-page button {
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>