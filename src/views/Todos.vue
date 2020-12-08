<template>
  <div>
    <h2>Todo application</h2>
    <AddTodo @add-todo="AddTodo" />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Undone</option>
    </select>

    <hr />
    <Loader v-if="loading" />
    <TodoList
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      @remove-todo="removeTodo"
    />
    <p v-else>No todos</p>
    <router-link to="/"> Back </router-link>
  </div>
</template>

<script>
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
import Loader from "../components/Loader";

export default {
  name: "App",
  data() {
    return {
      todos: [],
      loading: true,
      filter: "all",
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          this.todos = json;
          this.loading = false;
        }, 1000);
      });
  },
  // watch:{
  //   filter(value)
  // },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    AddTodo(todo) {
      this.todos.push(todo);
    },
  },
  computed: {
    filteredTodos: function() {
      var filter
      if (this.filter === "all") {
        filter=this.todos;
      }
      if (this.filter === "completed") {
        filter=this.todos.filter((t) => t.completed);
      }
      if (this.filter === "not-completed") {
        filter=this.todos.filter((t) => !t.completed);
      }
      return filter
    },
  },
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
};
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
