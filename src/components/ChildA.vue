<template lang="html">
  <div>
    <button @click.prevent="getUserIcons" type="button" name="button">获取图标</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {}
  },
  mounted () {
  },
  methods: mapActions([
    'getUserIcons'
  ])
}
</script>

<style lang="css">
</style>
