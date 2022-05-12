<template>
  <div>
      <h1>childApp</h1>
    <input type="text" @keyup.enter="onChildInputChange">
    <p>appData : {{ appData }}</p>
    <p>parentData : {{ parentData }}</p>
    <p>childData : {{ childData }}</p>
  </div>
</template>

<script>
export default {
    name: 'AppChild',
    props: {
        appData: String,
        parentData: {
            type:String,
        },
        childData: String,
    },
    methods: {
        onChildInputChange: function (event) {
            this.$emit('child-input-change', event.target.value)
        }
        
    }
}
</script>

<style>

</style>