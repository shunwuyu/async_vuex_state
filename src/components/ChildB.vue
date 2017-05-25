<template lang="html">
  <div>
    <template v-for="icon in icons">
      <img :src="icon"/>
    </template>
    <div v-if="icons.length==0">没有图标</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      icons: []
    }
  },
  computed: {
    getUserIcons () {
      return this.$store.state.userIcons
    }
  },
  mounted () {
    this.icons = this.$store.state.userIcons
  },
  watch: {
    getUserIcons (val) {
      this.icons = val
    }
  }
}
</script>

<style lang="css">
img {
  width: 80px;
  height: 80px;
  margin:10px;
}
</style>
