!<template>
  <li @click="selectVideo">
    <img :src="video.snippet.thumbnails.default.url" alt="img">
    {{ video.snippet.title }}
  </li>
</template>

<script>
export default {
    name : 'VideoListItem',
    props : {
        video: {
            type:Object,
            required:true,
        }
    },
    methods : {
        selectVideo : function () {
            this.$emit('select-video', this.video)
        }
    }
}
</script>

<style>

</style>