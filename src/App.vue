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
        console.log(res)
      })
    },
    getCartSum(){
      this.axios.get('/carts/products/sum').then((res)=>{
        console.log(res)
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
