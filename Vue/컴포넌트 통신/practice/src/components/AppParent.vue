<template>
  <div>
    <h1>parentApp</h1>
    <input type="text" @keyup.enter="onParentInputChange">
    <p>appData : {{ appData }}</p>
    <p>parentData : {{ parentData }}</p>
    <p>childData : {{ childData }}</p>
    <app-child
      :appData = "appData"
      :parentData = "parentData"
      :childData = "childData"
      @child-input-change = onChildInputChange
    ></app-child>
  </div>
</template>

<script>
import AppChild from '@/components/AppChild'

export default {
    name: 'AppParent',
    components: {
        AppChild,
    },
    props: {
        appData: String,
        parentData: {
            type:String,
        },
        childData: String,
    },
    methods: {
        onChildInputChange: function (inputData) {
            this.$emit('child-input-change', inputData)
        },
        onParentInputChange: function (event) {
            this.$emit('parent-input-change', event.target.value)
        }
    }
}
</script>

<style>

</style>