<template>

  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Header></Header>
    <HelloWorld msg="Todos App template" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue"

export default {
  name: "Home",
  components: {
    HelloWorld, 
    Header
  }
};
</script>
