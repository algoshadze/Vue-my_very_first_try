<template>
  <div>
    <ul>
      <TodoItem 
      v-for="(todo, i) of todos" 
      :key="todo" 
      v-bind:todo="todo" 
      v-bind:index="i"
      v-on:remove-todo="removeTodo"/>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  props: ['todos'],
  methods:{
      removeTodo(id){
          console.log(id)
          this.$emit('remove-todo',id)

      }
  },
  components: {
    TodoItem
  },
};
</script>

<style scoped>
    ul{
        list-style: none;
        margin:0;
        padding: 0;
    }
</style>
