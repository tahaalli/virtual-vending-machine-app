<template>
  <div id="app">
    <Navbar />
    <div class="container ">
      <div class="card">
        <div class="card-body">
          <Sodas :sodas="sodas" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sodas from "./components/Sodas.vue";

export default {
  name: "App",
  data() {
    return { sodas: [{ cost: 1 }, { cost: 2 }, { cost: 3 }] };
  },
  components: {
    Navbar,
    Sodas,
  },
};
</script>
