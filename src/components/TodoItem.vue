<template>
  <li>
    <span v-bind:class="{ done: todo_prop.completed }">
      <input
        type="checkbox"
        :checked="todo_prop.completed"
        v-on:change="todo_prop.completed = !todo_prop.completed"
      />
      <strong>{{index+1}}</strong>
      {{ todo_prop.title }}
  

    </span>
    <button class="rm" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number
  },
  filters:{

  },
  data() {
    return {
      todo_prop: this.todo, // Здесь переназначаем пропс
    };
  },
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}
.rm {
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
}

input {
  margin-right: 1rem;
}
.done {
  text-decoration: line-through;
}
</style>
