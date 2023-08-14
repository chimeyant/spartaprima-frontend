<template>
  <div class="mt-16">
    <product-component />

  </div>
</template>
    
<script>
import { mapState, mapActions } from "vuex";
import ProductComponent from "../components/produk/Index.vue";
export default {
  name: "product",
  components: {
    ProductComponent,
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
    
    
    
    
    