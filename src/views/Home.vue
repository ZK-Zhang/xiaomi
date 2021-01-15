<template>
  <div class="Home">
    <nav-header></nav-header>
    <index></index>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'
import ServiceBar from '../components/ServiceBar'
import Index from '../pages/index/Index'
export default {
  name: "Home",
  components: {
    NavHeader,
    NavFooter,
    ServiceBar,
    Index
  }
}
</script>

<style>

</style>