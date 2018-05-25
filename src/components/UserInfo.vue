<template>
    <div class="user-info">
        <br/>
        <h1>{{msg}}</h1>
        <p>first name: {{firstname}}</p>
        <p>last name: {{lastname}}</p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            msg: '个人主页',
            firstname: '',
            lastname: ''
        }
    },
    mounted: function() {
        let self = this;
        this.$axios.get('/userinfo')
        .then(function(response) {
            self.firstname = response.data['firstname'];
            self.lastname = response.data['lastname'];
        })
        .catch(function(error) {
            console.log(error)
        })
    }
}
</script>