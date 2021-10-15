<template>
  <div class="container">
    <div class="row row-cols-2">
      <div class="col" v-for="soda in sodas" :key="soda.product_id">
        {{ soda.cost }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sodas",
  props: {
    sodas: Array,
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
