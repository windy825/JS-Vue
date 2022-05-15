<template>
  <div>
    <h1>TodoList</h1>
    <todo-list-item
        v-for="todo in todos"
        :key="todo.idx"
        :todo="todo"
    ></todo-list-item>
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem'
import { mapState } from 'vuex'


export default {
    name: 'TodoList',
    components: {
        TodoListItem,
    },
    computed: {
        todos: function () {
            return this.$store.state.todos
        },
        ...mapState([
            'todos',
        ])
    }
}
</script>

<style>

</style>