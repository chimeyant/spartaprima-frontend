<template>
  <div class="grey">
    <div class="text-center pt-10 title">MITRA KAMI</div>
    <div class="text-center body-1">
      Berikut daftar mitra-mitra kami yang telah berkerjasama dengan SIM PKK Provinsi Banten
    </div>
    <div class="mt-10 mb-0">
      <v-container>
        <div class="sponsors-list-wrapper">
          <Carousel
            class="sponsor-list purple--text"
            :perPage="4"
          >
            <Slide
              v-for="(sponsor,index) in datas"
              :key="index"
            >
              <div class="sponsor-item">
                <img
                  :src="sponsor.image"
                  alt=""
                  style="width:75px ;"
                >
              </div>
            </Slide>
          </carousel>
        </div>
      </v-container>
    </div>
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
    datas: [],
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
    this.fetchSponsors();
  },
  methods: {
    fetchSponsors: async function () {
      await this.http
        .get(
          "https://api.pnlgforum.tangerangkab.go.id/api/v1/sponsor/list?include=image"
        )
        .then((response) => {
          console.log(response);
          response.data.data.data.forEach((element) => {
            const row = {};
            row["id"] = element.id;
            row["name"] = element.name;
            row["image"] = element.image.full_path;
            this.datas.push(row);
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