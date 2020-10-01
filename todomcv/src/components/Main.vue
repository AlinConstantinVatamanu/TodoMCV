<template>
  <div id="main">
    <button type="button" v-on:click="completeAll">Complete All</button>
    <input @keyup.enter="addTodo" placeholder="add todo" />
    <ul id="todos">
      <li v-for="todo in todos" v-bind:key="todo" :data-id="todo.id">
        <input
          type="checkbox"
          class="strikethrough"
          :checked="todo.completed"
          @change="todo.completed = !todo.completed"
        />
        <label class="todo">
          {{ todo.value }}
        </label>
        <button type="button" v-on:click="deleteTodo">X</button>
      </li>
    </ul>
    <label class="quantity"> {{ activeQuantity }} items left </label>
    <button type="button" v-on:click="filterAll">All</button>
    <button type="button" v-on:click="filterActive">Active</button>
    <button type="button" v-on:click="filterCompleted">Completed</button>
    <button type="button" v-show="existsCompleted" v-on:click="removeCompleted">
      Clear completed
    </button>
  </div>
</template>

<script>
export default {
  name: "Main",

  props: {
    todos: {
      type: Array,
    },
    activeQuantity: {
      type: Number,
    },
    existsCompleted: {
      type: Boolean,
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
    filterAll: function () {
      this.$store.dispatch("filterToAll", "all");
    },
    filterActive: function () {
      this.$store.dispatch("filterToActive", "active");
    },
    filterCompleted: function () {
      this.$store.dispatch("filterToComplete", "completed");
    },
    removeCompleted: function () {
      this.$store.dispatch("removeCompleted");
    },
    completeAll: function () {
      this.$store.dispatch("completeAll");
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

.strikethrough:checked + .todo {
  text-decoration: line-through;
}
</style>