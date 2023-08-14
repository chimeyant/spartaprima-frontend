<template>
  <div class="animate__animated animate__fadeIn animate__delay-1s mt-10">
    <v-card>
      <v-card-title class=" ant-font-viga">Produk Paling Laku</v-card-title>
      <v-card-text>

        <div class="mt-2 mb-2">
          <v-container>
            <div class="sponsors-list-wrapper">
              <Carousel
                class="sponsor-list"
                :perPage="6"
                paginationActiveColor="blue"
                :navigationEnabled="true"
              >
                <Slide
                  v-for="(sponsor,index) in datas"
                  :key="index"
                >

                  <div class="sponsor-item">
                    <img
                      :src="sponsor.image"
                      alt=""
                      style="width:75px ;height: 82px;"
                    >
                  </div>
                </Slide>
              </carousel>
            </div>
          </v-container>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>
    
  <script>
import { mapState, mapActions } from "vuex";
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "sponsor",
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    datas: [
      { id: 1, name: "1", image: "/images/logo-banten.png" },
      { id: 2, name: "2", image: "/images/logo-kab.png" },
      { id: 3, name: "3", image: "/images/logo-banten.png" },
      { id: 4, name: "4", image: "/images/logo-banten.png" },
      { id: 5, name: "5", image: "/images/logo-banten.png" },
      { id: 5, name: "6", image: "/images/logo-banten.png" },
      { id: 5, name: "7", image: "/images/logo-banten.png" },
      { id: 5, name: "8", image: "/images/logo-banten.png" },
    ],
  }),
  computed: {
    ...mapState([
      "page",
      "device",
      "info",
      "snackbar",
      "device",
      "http",
      "loading",
      "theme",
    ]),
  },
  mounted() {
    //this.fetchSponsors();
  },
  methods: {
    fetchSponsors: async function () {
      await this.http.get("sponsors").then((response) => {
        response.data.forEach((element) => {
          if (element.logo) {
            const row = {};
            row["id"] = element.id;
            row["name"] = element.name;
            row["image"] = element.logo;
            this.datas.push(row);
          }
        });
        //
      });
    },
  },
};
</script>
  
  <style>
/* ==========================================================
  ! 08. SECTION: Sponsors
  ========================================================== */
.sponsor-item {
  height: 100px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  background: #ffffff;
  line-height: 100px;
  text-align: center;
  margin-right: 10px;
}
.sponsor-item img {
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
  /* Firefox 10+, Firefox on Android */
  filter: gray;
  /* IE6-9 */
  opacity: 0.7;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
.sponsor-item:hover img {
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 1 0'/></filter></svg>#grayscale");
  opacity: 1;
}
.sponsors-list-wrapper {
  width: 100%;
  overflow: hidden;
}
.sponsors-list {
  padding-top: 20px;
}
</style>