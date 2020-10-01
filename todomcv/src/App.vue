<template>
  <div id="todoApp">
    <Header />
    <Main :todos="todos"></Main>
    <Footer />
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
  },
};
</script>

<style>
</style>
