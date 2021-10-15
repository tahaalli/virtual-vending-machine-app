<template>
  <div class="card" style="width: 15rem">
    <img
      v-bind:src="getImgUrl(data.product_id)"
      alt="Soda Image"
      class="card-img-top"
    />
    <div class="card-body">
      <div class="d-flex flex-row justify-content-between">
        <span class="card-text"
          ><b>{{ data.product_name }}</b></span
        >
        <span class="badge rounded-pill bg-dark">${{ data.cost }}</span>
      </div>
      <div>{{ data.product_description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Soda",
  props: {
    data: Object,
  },
  methods: {
    getImgUrl(product_id) {
      return require("@/assets/" + product_id + ".png");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
