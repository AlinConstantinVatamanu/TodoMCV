<template>
  <div id="main">
    <input @keyup.enter="addTodo" placeholder="add todo" />
    <ul id="todos">
      <li v-for="todo in todos" v-bind:key="todo">
        {{ todo }}
        <span class="close" v-on:click="deleteTodo">x</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Main",
  /* data() {
  }, */
  /* props: ["todos"], */
  props: {
    todos: {
      type: Array
    }
  },

  methods: {
    addTodo: function (event) {
      //this.todos.push(event.target.value);
      let todo = event.target.value;
      if (todo) {
        this.$store.dispatch("addTodoCommit", todo);
        event.target.value = "";
      }
    },

    /* deleteTodo: function (event) {
      console.log(event.target.parentElement.value);
    }, */
  },
};
</script>


<style scoped>
h1 {
  color: blue;
}

* {
  box-sizing: border-box;
}

/* Style the list (remove margins and bullets, etc) */
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

/* Style the list items */
ul li {
  border: 1px solid #ddd;
  margin-top: 2px; /* Prevent double borders */
  background-color: #f6f6f6;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  color: black;
  display: block;
  position: relative;
}

/* Add a light grey background color on hover */
ul li:hover {
  background-color: #eee;
}

/* Style the close button (span) */
.close {
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0%;
  padding: 12px 16px;
  transform: translate(0%, -50%);
}

.close:hover {
  background: #bbb;
}
</style>