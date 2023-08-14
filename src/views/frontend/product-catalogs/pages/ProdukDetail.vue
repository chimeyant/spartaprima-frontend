<template>
  <product-detail-component />
</template>
      
  <script>
import { mapState, mapActions } from "vuex";
import ProductDetailComponent from "../components/produk-detail/Index.vue";
export default {
  name: "product-detail",
  components: {
    ProductDetailComponent,
  },
  data: () => ({}),
  mounted() {
    this.setPage({
      name: "home",
      crud: false,
    });
  },
  computed: {
    ...mapState(["device", "theme", "info", "snackbar", "loading", "page"]),
  },
  methods: {
    ...mapActions(["setPage", "getAppInfo", "snackbarClose"]),
  },
};
</script>
      
      
      
      
      