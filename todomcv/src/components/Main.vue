<template>
  <div id="main">
    <div class="flex justify-center m-1">
      <button
        type="button"
        v-on:click="completeAll"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 m-4 border border-blue-700 rounded"
      >
        Complete All
      </button>
      <input
        @keyup.enter="addTodo"
        placeholder="add todo"
        class="bg-gray-200 border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      />
    </div>
    <ul>
      <li
        v-for="todo in todos"
        v-bind:key="todo"
        :data-id="todo.id"
        @mouseover="active = true"
        @mouseleave="active = false"
        class="border bg-gray-200 hover:bg-gray-300 border-black-100"
      >
        <div class="flex">
          <input
            type="checkbox"
            class="m-4 leading-tight"
            :checked="todo.completed"
            @change="todo.completed = !todo.completed"
          />
          <label
            class="todoLabel text-xl m-2"
            v-bind:class="[todo.completed ? 'line-through' : '']"
          >
            {{ todo.value }}
          </label>
          <div class="w-full m-1" v-show="active">
            <button
              type="button"
              v-on:click="deleteTodo"
              class="float-right bg-gray-200 hover:bg-gray-400 rounded border-gray-600 text-gray-500 px-2 ml-2 mt-1 border-2 border-gray-200"
            >
              X
            </button>
          </div>
        </div>
      </li>
    </ul>
    <div class="flex justify-center">
      <label class="m-2"> {{ activeQuantity }} items left </label>
      <button
        type="button"
        v-on:click="filterAll"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 m-2 border border-blue-700 rounded"
      >
        All
      </button>
      <button
        type="button"
        v-on:click="filterActive"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 m-2 border border-blue-700 rounded"
      >
        Active
      </button>
      <button
        type="button"
        v-on:click="filterCompleted"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 m-2 border border-blue-700 rounded"
      >
        Completed
      </button>
      <button
        type="button"
        v-show="existsCompleted"
        v-on:click="removeCompleted"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 m-2 border border-blue-700 rounded"
      >
        Clear completed
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",

  data: function () {
    return {
      active: false,
    };
  },

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
      let idToDelete = event.target.closest("li").getAttribute("data-id");
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
    lineThroughText: function (event) {
      let todoLabelTag = event.target.nextSibling;
      todoLabelTag.classList.contains("line-through")
        ? todoLabelTag.classList.remove("line-through")
        : todoLabelTag.classList.add("line-through");
    },
  },
};
</script>


<style scoped>
</style>