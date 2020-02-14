<template>
  <div>
    <the-navigation />
    <nuxt />
  </div>
</template>

<script>
  import theNavigation from './components/globals/theNavigation'
  export default {
    components : {
      theNavigation
    }
  }
</script>