<template>
  <div>
      <ul>
          <li v-for="video in videos" :key="video.id.videoId">
              <div @click="selectVideo">
                <img :src="video.snippet.thumbnails.default.url" alt="">
                {{ video.snippet.title }}
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'VideoList',
    props: {
        videos: {
            type:Array,
            required:true,
        }
    },
    methods: {
        selectVideo: function (video) {
            this.$emit('select-video', video)
        }
    }
}
</script>

<style>

</style>