<template>
  <div class="user-info">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      msg: 'User Info:'
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
