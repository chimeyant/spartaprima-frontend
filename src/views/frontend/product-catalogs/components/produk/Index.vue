<template>
  <div class="mt-16 animate__animated animate__fadeIn">
    <v-container>
      <v-row>
        <v-col :cols="device.desktop ?4:12">
          <v-card>
            <v-card-title class="blue white--text">
              <v-icon class="mr-2 white--text">mdi-view-headline</v-icon>
              Semua Kategori</v-card-title>
            <v-card-text>
              <v-list
                dense
                nav
                shaped
              >

                <template v-for="(menu, index) in categories">
                  <v-list-item
                    active-class="orange darken-4"
                    :to="menu.route"
                    :key="index"
                    v-if="menu.type === 'item'"
                  >
                    <v-list-item-action>
                      <v-icon>{{ menu.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>{{ menu.title }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider v-if="menu.type=='divider'"></v-divider>

                  <v-list-group
                    v-if="menu.type == 'subMenu'"
                    dark
                    active-class="blue--text"
                  >
                    <template v-slot:activator>
                      <v-list-item-action>
                        <v-icon class="">{{ menu.icon }}</v-icon>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title> {{ menu.title }}</v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <v-list-item
                      v-for="(subItem,idx) in menu.submenus"
                      active-class="orange darken-4"
                      :to="subItem.route"
                      :key="idx"
                      v-if="subItem.type === 'item'"
                      class="animate__animated animate__flipInY"
                    >
                      <v-list-item-content>
                        <v-list-item-title>{{ subItem.title }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-group>

                  <v-subheader
                    :class="menu.class"
                    :key="index"
                    class="overline mt-3"
                    style="height: 24px"
                    v-else-if="menu.type === 'subheader'"
                  >{{ menu.title }}</v-subheader>
                </template>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="8"
          v-show="device.desktop"
        >
          <v-carousel
            cycle
            :height="device.desktop ? `350` : `350`"
            hide-delimiter-background
            :show-arrows="false"
          >
            <v-carousel-item
              v-for="(slide, i) in sliders"
              :key="i"
              :src="slide.path"
            >
              <v-col
                cols="6"
                v-show="device.desktop"
              >
                <v-row>
                  <div class="bg-black">
                    <div class="container-title">
                      <div class="flex flex-column">
                        <div
                          v-if="slide.top_image_status"
                          class="slider-title animated animate__fadeInUpBig animate__delay-5s"
                        >
                          <img
                            :src="slide.top_image_path"
                            alt=""
                            height="50px"
                            srcset=""
                          >
                        </div>
                        <div class="slider-title animated animate__lightSpeedInRight">
                          {{ slide.title }}
                        </div>
                        <div class="slider-sub-title animated animate__fadeInUp">

                          {{ slide.content }}
                        </div>
                        <v-row>
                          <div class="slider-action">
                            <v-btn
                              rounded
                              color="green"
                              dark
                              large
                              v-show="false"
                              @click="$router.push({name:'registrasi'})"
                            >Registrasi</v-btn>

                          </div>
                        </v-row>
                      </div>
                    </div>
                  </div>
                </v-row>
              </v-col>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <v-row class="">
        <v-col
          cols="12"
          class=""
        >
          <best-market />
        </v-col>
        <v-col cols=12>
          <v-divider></v-divider>
        </v-col>
        <v-col
          cols=12
          class="animate__animated animate__fadeIn animate__delay-1s  ml-5 mr-5"
        >
          <div class=" ant-font-viga">Berdasarkan Pencarianmu</div>
          <div class="mt-5 body-2">Menampilkan 1 - 14 produk dari total 14</div>
          <v-row class="mt-5">
            <v-col
              :cols="device.desktop ? 3: 12"
              v-for="item in productfilters"
            >
              <div class="ant-market-box-product">
                <img
                  :src="item.image"
                  alt=""
                  srcset=""
                  height="175"
                  width="100%"
                >
                <div
                  style=""
                  class="ant-market-box-product-content"
                  @click="$router.push({name:'product-detail'})"
                >
                  <div>
                    {{ item.name }}
                  </div>
                  <div class="mt-1">
                    <v-icon
                      small
                      color="blue"
                      class="mr-1"
                    >mdi-home-map-marker</v-icon> {{ item.location }}
                  </div>
                  <div class="mt-1">
                    <v-icon
                      small
                      color="orange"
                      class="mr-1"
                    >mdi-medal</v-icon> {{ item.rate }} | Review : {{ item.review }}
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-col
        cols="12"
        class="mt-10"
      >
        <v-divider></v-divider>
        <v-tabs
          color="blue"
          v-model="tab"
        >
          <v-tab class="blue--text ant-font-viga text-transform-none"><v-icon
              class="mr-2"
              key="page-product"
            >mdi-gift</v-icon> Produk</v-tab>
          <v-tab
            class="blue--text ant-font-viga"
            v-show="false"
          ><v-icon
              class="mr-2"
              key="page-umkm"
            >mdi-storefront</v-icon>UMKM</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">

          <v-tab-item key=page-product>
            <v-row class="mt-2 ml-5 mr-5">
              <div class="mt-5 body-2">Menampilkan 1 - 14 produk dari total 14</div>
              <v-spacer></v-spacer>
              <div class="mt-3 mr-2">Urutkan : </div>
              <v-select
                class="mt-1"
                outlined
                dense
                hide-detail
                color="blue"
                style="max-width: 300px;"
                :items="urutans"
              ></v-select>
            </v-row>
            <v-row class="mt-5 pl-3">
              <v-col
                :cols="device.desktop ? 2 :12"
                v-for="(item,index) in products"
                :kety="index"
              >
                <div
                  class="ant-market-box-product"
                  @click="$router.push({name:'product-detail'})"
                >
                  <img
                    :src="item.image"
                    alt=""
                    srcset=""
                    height="175"
                    width="100%"
                  >
                  <div
                    style=""
                    class="ant-market-box-product-content"
                  >
                    <div>
                      {{ item.name }}
                    </div>
                    <div class="mt-1">
                      <v-icon
                        small
                        color="blue"
                        class="mr-1"
                      >mdi-home-map-marker</v-icon> {{ item.location }}
                    </div>
                    <div class="mt-1">
                      <v-icon
                        small
                        color="orange"
                        class="mr-1"
                      >mdi-medal</v-icon> {{ item.rate }} | Review : {{ item.review }}
                    </div>
                  </div>
                </div>
              </v-col>

            </v-row>
            <v-row class="mt-4">
              <v-col>
                <div class="text-center">
                  <v-pagination
                    v-model="page"
                    :length="6"
                    color="blue"
                  ></v-pagination>
                </div>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item key=page-umkm>
            <div class="mt-5 ml-5 body-2">Menampilkan 1 - 14 UMKM dari total 14</div>
            <v-card flat>
              <v-row class="mt-5 pl-3 pr-3">
                <v-col
                  cols=4
                  v-for="i in 6"
                >
                  <div style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);height: 220px; border-radius: 10px; padding: 5px;">
                    <div style="display: flex; flex-direction: row; margin-top: 5px;">
                      <div class="mr-2">
                        <img
                          src="/images/logo-banten.png"
                          alt=""
                          srcset=""
                          height="50"
                          width="48"
                        >
                      </div>
                      <div class="body-2">
                        <div>UMKM Sejahtera</div>
                        <div>Kab. Serang</div>
                      </div>
                      <v-spacer></v-spacer>
                      <div>
                        <v-btn
                          outlined
                          dense
                          hide-details
                          color="blue"
                          class="ant-font-viga"
                          @click="$router.push({name:'umkm'})"
                        >Lihat Toko</v-btn>
                      </div>
                    </div>
                    <v-row class="mt-1">
                      <v-col cols="4">
                        <div style="height: 80px; overflow: hidden; border-radius: 5px;">
                          <img
                            src="images/produk1.png"
                            alt=""
                            width="100%"
                            height="80"
                          >
                        </div>
                        <div style="font-size: 10pt; color: blue; font-weight: bold;">
                          Rp. 50.000
                        </div>
                      </v-col>
                      <v-col cols="4">
                        <div style="height: 80px; overflow: hidden; border-radius: 5px;">
                          <img
                            src="images/produk2.png"
                            alt=""
                            width="100%"
                            height="80"
                          >
                        </div>
                        <div style="font-size: 10pt; color: blue; font-weight: bold;">
                          Rp. 50.000
                        </div>
                      </v-col>
                      <v-col cols="4">
                        <div style="height: 80px; overflow: hidden; border-radius: 5px;">
                          <img
                            src="images/produk4.png"
                            alt=""
                            width="100%"
                            height="80"
                          >
                        </div>
                        <div style="font-size: 10pt; color: blue; font-weight: bold;">
                          Rp. 50.000
                        </div>
                      </v-col>

                    </v-row>

                  </div>
                </v-col>
              </v-row>
              <v-row class="mt-4">
                <v-col>
                  <div class="text-center">
                    <v-pagination
                      v-model="page"
                      :length="6"
                      color="blue"
                    ></v-pagination>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
        </v-tabs-items>

      </v-col>
    </v-container>
  </div>
</template>
    <script>
import { mapState, mapActions } from "vuex";
import "animate.css";
import BestMarket from "../best-market/Index.vue";

export default {
  name: "product",
  components: {
    BestMarket,
  },
  data: () => ({
    uname: "",
    upass: "",
    visible: false,
    color: "blue darken-3",
    jmlpendaftar: 0,
    jmllakilaki: 0,
    jmlperempuan: 0,

    pengumuman: {
      title: null,
      body: null,
    },
    sliders: [],

    lightToolbar: true,
    tab: null,
    page: 1,
    urutans: [
      {
        text: "Paling Sesuai",
        value: "paling-sesuai",
      },
      {
        text: "Termurah",
        value: "termurah",
      },
      {
        text: "Termahal",
        value: "termahal",
      },
    ],
    productfilters: [
      {
        id: 1,
        name: "Suka Sake",
        location: "Kab. Serang",
        rate: "5",
        review: "100+",
        image: "/images/produk12.png",
      },
      {
        id: 2,
        name: "Batik Cisadane",
        location: "Kab. Tangerang",
        rate: "5",
        review: "100+",
        image: "/images/produk13.png",
      },
      {
        id: 3,
        name: "Risoles Mayo Smoked Beef Egg/Risol Mozarella...",
        location: "Pandeglang",
        rate: "5",
        review: "100+",
        image: "/images/produk3.png",
      },
      {
        id: 4,
        name: "EKADO TELUR (25 PCS) DIMSUM 49 KARAWACI/FROZEN...",
        location: "Kabupaten Tangerang",
        rate: "5",
        review: "100+",
        image: "/images/produk4.png",
      },
      {
        id: 4,
        name: "Bandeng Bakar Cabut Duri Enak SIAP SANTAP",
        location: "Kab. Tangerang",
        rate: "5",
        review: "100+",
        image: "/images/produk5.png",
      },
      {
        id: 4,
        name: "Empe Empe Paleembang",
        location: "Pandeglang",
        rate: "5",
        review: "100+",
        image: "/images/produk6.png",
      },
    ],
    products: [
      {
        id: 1,
        name: "Empe empe Palembang",
        location: "Tangerang",
        rate: "5",
        review: "100+",
        image: "/images/produk6.png",
      },
      {
        id: 2,
        name: "Badeng Khas Kota Serang",
        location: "Serang",
        rate: "5",
        review: "100+",
        image: "/images/produk5.png",
      },
      {
        id: 3,
        name: "Ekado ibu Ijah",
        location: "Pandeglang",
        rate: "5",
        review: "100+",
        image: "/images/produk4.png",
      },
      {
        id: 4,
        name: "RIsoles Ibu Dian Cilegon",
        location: "Kota Cilegon",
        rate: "5",
        review: "100+",
        image: "/images/produk3.png",
      },
      {
        id: 4,
        name: "Bakso Tulang Sedap Matap",
        location: "Kab. Serang",
        rate: "5",
        review: "100+",
        image: "/images/produk2.png",
      },
      {
        id: 4,
        name: "CARLINKIT TBOX MINI Modul Android AI 11 Box..",
        location: "Pandeglang",
        rate: "5",
        review: "100+",
        image: "/images/produk1.png",
      },
      {
        id: 4,
        name: "Mesin Perontok Padi",
        location: "Kab. Pandeglang",
        rate: "5",
        review: "100+",
        image: "/images/produk7.png",
      },
      {
        id: 4,
        name: "CARLINKIT TBOX MINI Modul Android AI 11 Box..",
        location: "Pandeglang",
        rate: "5",
        review: "100+",
        image: "/images/produk5.png",
      },
      {
        id: 4,
        name: "CARLINKIT TBOX MINI Modul Android AI 11 Box..",
        location: "Pandeglang",
        rate: "5",
        review: "100+",
        image: "/images/produk5.png",
      },
      {
        id: 4,
        name: "CARLINKIT TBOX MINI Modul Android AI 11 Box..",
        location: "Pandeglang",
        rate: "5",
        review: "100+",
        image: "/images/produk5.png",
      },
      {
        id: 4,
        name: "CARLINKIT TBOX MINI Modul Android AI 11 Box..",
        location: "Pandeglang",
        rate: "5",
        review: "100+",
        image: "/images/produk5.png",
      },
      {
        id: 4,
        name: "CARLINKIT TBOX MINI Modul Android AI 11 Box..",
        location: "Pandeglang",
        rate: "5",
        review: "100+",
        image: "/images/produk5.png",
      },
    ],
    tokos: [],
    categories: [
      {
        title: "Makanan",
        icon: "mdi-hamburger",
        route: "/product",
        type: "subMenu",
        submenus: [
          {
            title: "Ringan",
            icon: "mdi-circle",
            route: "/repository",
            type: "item",
          },
          {
            title: "Berat",
            icon: "mdi-shopping-search",
            route: "#",
            type: "item",
          },
        ],
      },
      {
        title: "Minuman",
        icon: "mdi-food-fork-drink",
        route: "/kompetisi",
        type: "subMenu",
        submenus: [
          {
            title: "JUS",
            icon: "mdi-clover",
            route: "#",
            type: "item",
          },
          {
            title: "SEGAR",
            icon: "mdi-clover",
            route: "#",
            type: "item",
          },
        ],
      },
      {
        title: "Fashion",
        icon: "mdi-tshirt-crew",
        route: "/kompetisi",
        type: "subMenu",
        submenus: [
          {
            title: "JAS",
            icon: "mdi-clover",
            route: "#",
            type: "item",
          },
          {
            title: "KEMEJA",
            icon: "mdi-clover",
            route: "#",
            type: "item",
          },
        ],
      },
      {
        title: "Kerajinan",
        icon: "mdi-draw",
        route: "/kompetisi",
        type: "subMenu",
        submenus: [
          {
            title: "JAS",
            icon: "mdi-clover",
            route: "#",
            type: "item",
          },
          {
            title: "KEMEJA",
            icon: "mdi-clover",
            route: "#",
            type: "item",
          },
        ],
      },
      {
        title: "Hasil Pertanian",
        icon: "mdi-leaf",
        route: "/kompetisi",
        type: "subMenu",
        submenus: [
          {
            title: "JAS",
            icon: "mdi-clover",
            route: "#",
            type: "item",
          },
          {
            title: "KEMEJA",
            icon: "mdi-clover",
            route: "#",
            type: "item",
          },
        ],
      },
    ],
  }),
  mounted() {
    this.setPage({
      crud: true,
    }).then(() => {
      this.getAppInfo().then(() => {
        window.document.title = this.info.app_company;
        const favicon = window.document.getElementById("favicon");
        favicon.href = this.info.app_logo;
      });
    });
    this.fetchSliders();
  },
  computed: {
    ...mapState(["device", "info", "snackbar", "device", "http", "theme"]),

    contentStyle: function () {
      if (!this.device.mobile && this.info.apps_background) {
        return `background: url(${this.info.apps_background});
                            background-position: center center;
                            background-repeat: no-repeat;
                            background-size: cover;`;
      }
      return ``;
    },
  },
  methods: {
    ...mapActions([
      "setPage",
      "getAppInfo",
      "signIn",
      "snackbarClose",
      "getAppInfo",
    ]),
    onScroll: function (event) {
      if (window.pageYOffset >= window.innerHeight - 350) {
        if (this.lightToolbar === true) this.lightToolbar = false;
      } else {
        if (this.lightToolbar === false) this.lightToolbar = true;
      }
    },

    postRegister: function () {
      this.$router.push({ name: "register" });
    },

    fetchPengumuman: async function () {
      let { data } = await this.http.get("pengumuman");

      this.pengumuman = data;
    },
    fetchSliders: async function () {
      let { data } = await this.http.get("sliders");

      this.sliders = data;
    },
  },
};
</script>
<style>
</style>