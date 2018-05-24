<template>
    <div class="login">
        <form>
            <label for="token">请输入token:</label>
            <input type="text" name="token" id="token" v-model="token">
            <input type="button" @click="login" value="login">
        </form>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            token: ''
        }
    },
    methods:{
        login() {
            if(this.token) {
                localStorage.setItem('token', this.token);
                this.$router.push({path: this.$route.query.redirect || '/'})
            }
        }
    }
}
</script>
<style>
    form input {
        margin-left: 30px;
    }
</style>