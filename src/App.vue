<template>
    <router-view></router-view>
</template>

<script>
export default {
    beforeCreate() {
    document.querySelector('body').setAttribute('style', 'margin:0')
  },
}
</script>


