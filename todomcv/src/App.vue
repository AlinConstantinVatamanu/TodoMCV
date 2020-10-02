<template>
  <div class="flex justify-center">
    <div class="w-1/3">
      <Header class="text-center"/>
      <Main
        :todos="todos"
        :activeQuantity="activeQuantity"
        :existsCompleted="existsCompleted"
      ></Main>
      <Footer class="text-center"/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },

  computed: {
    todos() {
      let filter = {
        all: this.$store.getters.getAllTodos,
        active: this.$store.getters.getActiveTodos,
        completed: this.$store.getters.getCompletedTodos,
      };
      return filter[this.$store.state.visibility];
    },
    activeQuantity() {
      return this.$store.getters.getActiveQuantity;
    },
    existsCompleted() {
      return this.$store.getters.getExistsCompleted;
    },
  },
};
</script>

<style>
</style>
