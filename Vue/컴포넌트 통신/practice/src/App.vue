<template>
  <div id="app">
    <h1>App</h1>
    <input type="text" v-model="appData">
    <p>appData : {{ appData }}</p>
    <p>parentData : {{ parentData }}</p>
    <p>childData : {{ childData }}</p>
    <app-parent
      :appData = "appData"
      :parentData = "parentData"
      :childData = "childData"
      @child-input-change = 'onChildInputChange'
      @parent-input-change = 'onParentInputChange'

    ></app-parent>
  </div>
</template>


<script>
import AppParent from '@/components/AppParent'


export default {
  name: 'App',
  components: {
    AppParent,
  },
  data: function () {
    return {
      appData: null,
      parentData: null,
      childData: null,
    }
  },
  methods: {
    onChildInputChange: function (inputData) {
      this.childData = inputData
    },
    onParentInputChange: function (inputData) {
      this.parentData = inputData
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