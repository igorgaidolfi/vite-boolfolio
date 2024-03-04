<script>
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue'
export default {
  components:{
    AppHeader,
    AppMain,
  }

  
}
</script>
<template lang="">
  <div>
    <AppHeader/>
    <AppMain/> 
  </div>
</template>
<style lang="scss">
  @use './styles/general.scss';
</style>