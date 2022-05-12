<template>
  <div id="app">
    <h1>YOUTUBE SEARCH PROJECT (비공식, 비배포)</h1>
    <header>
      <the-search-bar @input-change="onInputChange"></the-search-bar>
    </header>
    <section>
      <video-detail :video="selectedVideo"></video-detail>
      <video-list :videos="videos" @select-video="onVideoSelect"></video-list>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import TheSearchBar from '@/components/TheSearchBar'
import VideoDetail from '@/components/VideoDetail'
import VideoList from '@/components/VideoList'
// import VideoListItem from '@/components/VideoListItem'

const API_KEY = '********************************************'
const API_URL = 'https://www.googleapis.com/youtube/v3/search'

export default {
  name: 'App',
  data : function () {
    return {
      inputValue : null,
      videos : [],
      selectedVideo : null,
    }
  },
  components: {
    TheSearchBar,
    VideoList,
    VideoDetail,
    // VideoListItem,
  },

  methods : {
    onInputChange : function (inputText) {
      this.inputValue = inputText

      const params = {
        key : API_KEY,
        part : 'snippet',
        type : 'video',
        q : this.inputValue,
      }

      axios({
        method : 'GET',
        url : API_URL,
        params,
      })
      
      .then(res => {
        this.videos = res.data.items
      })
      .catch(err => {
        console.log(err)
      })
    },
    onVideoSelect : function (video) {
      this.selectedVideo = video
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
