<template>
  <div class="card" style="width: 10rem">
    <img
      v-bind:src="getImgUrl(data.product_id)"
      alt="Soda Image"
      class="card-img-top"
    />
    <div class="card-body">
      <span class="card-text">{{ data.product_description }}</span>
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
