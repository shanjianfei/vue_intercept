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
      msg: '用户信息如下:'
    }
  }
}
</script>
