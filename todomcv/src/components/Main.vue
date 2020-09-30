<template>
  <div id="main">
    <input @keyup.enter="addTodo" placeholder="add todo" />
    <ul id="todos">
      <li v-for="todo in todos" v-bind:key="todo" :data-id="todo.id">
        <input type="checkbox" :checked="todo.completed" />
        {{ todo.value }}
        <button type="button" v-on:click="deleteTodo">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Main",

  props: {
    todos: {
      type: Array,
    },
  },

  methods: {
    addTodo: function (event) {
      let todo = event.target.value;
      if (todo) {
        this.$store.dispatch("addTodoCommit", todo);
        event.target.value = "";
      }
    },

    deleteTodo: function (event) {
      let idToDelete = event.target.parentNode.getAttribute("data-id");
      this.$store.dispatch("deleteTodoCommit", idToDelete);
    },
  },
};
</script>


<style scoped>
h1 {
  color: blue;
}

li {
  list-style-type: none;
}
</style>