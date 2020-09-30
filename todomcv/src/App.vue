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
  //store,
  components: {
    Header,
    Main,
    Footer
  },

  computed: {
    todos () {
      return this.$store.state.todos;
    } 
  },

};
</script>

<style>

</style>
