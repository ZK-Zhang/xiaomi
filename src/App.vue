<template>
  <div class="App">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    getUserInformation(){
      this.axios.get('/user').then((res) => {
        this.$store.dispatch('storageUsername',res.username)
      })
    },
    getCartSum(){
      this.axios.get('/carts/products/sum').then((res)=>{
        this.$store.dispatch('storageCartSum',res)
      })
    }
  },
  mounted () {
    this.getUserInformation()
    this.getCartSum()
  }
}
</script>

<style lang="sass">
@import './assets/scss/reset.scss'
</style>
