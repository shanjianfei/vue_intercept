<template>
    <div class="login">
        <form>
            <label for="token">用户名:</label>
            <input type="text" name="token" id="token">
            <label for="token">密码:</label>
            <input type="text" name="token" id="token">
            <input type="button" @click="login" value="login">
        </form>
    </div>
</template>
<script>
export default {
    methods:{
        login() {
            let self = this;
            self.$axios.post('/login', {usr:'admin', psd: '123456'})
            .then(function(response) {
                let token = response.data.token;
                if(token) {
                    localStorage.setItem('token', token);
                    console.log(localStorage)
                    self.$router.push({path: self.$route.query.redirect || '/'});
                }
            })
            .catch(function(error) {
                console.log(error)
            });
        }
    }
}
</script>
<style>
    form input {
        margin-left: 30px;
    }
</style>