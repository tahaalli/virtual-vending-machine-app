<template>
  <div id="app">
    <Navbar />
    <Soda
      :data="{ product_id: 'cola', product_description: 'Some text here' }"
    />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Soda from "./components/Soda.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Soda,
  },
};
</script>
