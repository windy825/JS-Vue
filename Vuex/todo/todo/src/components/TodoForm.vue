<template>
  <div>
      <h1>Todo Form</h1>
      <input type="text"
        v-model.trim="todoTitle"
        @keyup.enter="createTodo"
      >
  </div>
</template>

<script>
export default {
    name: 'TodoForm',
    data: function () {
        return {
            todoTitle: '',
        }
    },
    methods: {
        createTodo: function () {
            const todoItem = {
                title: this.todoTitle,
                isCompleted: false,
                date: new Date().getDate(),
            }

            if (todoItem.title) {
                this.$store.dispatch('createTodo', todoItem)
            }
            this.todoTitle = ''
        }
    }
}
</script>

<style>

</style>