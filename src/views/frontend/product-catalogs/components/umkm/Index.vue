<template>
  <v-container class="mt-16 animate__animated animate__fadeIn">
    <v-row>
      <v-col cols="12">

        <v-card
          outlined
          height="150"
        >
          <v-card-text>
            <v-row>
              <v-col cols="1">
                <v-avatar size="100">
                  <img
                    src="images/logo-banten.png"
                    alt=""
                    srcset=""
                  >
                </v-avatar>
              </v-col>
              <v-col
                cols="6"
                class="pl-10"
              >
                <div class="ant-font-viga ant-title">
                  UMKM DISKOMINFO
                </div>
                <div class="text-body-2">
                  Kab. Tangerang
                </div>
                <div class="mt-5">
                  <v-row>
                    <v-col cols="3">
                      <v-btn
                        block
                        class="blue white--text"
                      >Ikuti</v-btn>
                    </v-col>
                    <v-col cols="9">
                      <v-btn
                        outlined
                        class="blue--text"
                        @click="openShareProduct"
                      >
                        <v-icon>
                          mdi-share-variant-outline
                        </v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
              <v-col cols="5">
                <v-row>
                  <v-col cols="4">
                    <div class="pt-2"><v-icon
                        color="orange"
                        class="mr-2"
                      >mdi-star</v-icon><span class="ant-font-viga ant-title pt-2">4.9</span></div>

                  </v-col>
                  <v-col cols="1">
                    <v-divider vertical></v-divider>
                  </v-col>
                  <v-col cols="7">
                    <div class="ant-font-viga ant-title">10.00 s.d 23.00</div>
                    <div class="text-body-2">Jam Operasional UMKM</div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="ant-font-viga ant-title">Etalase Produk</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-card>
          <v-card-title class="ant-blue white--text">
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
      <v-col cols="9">
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
            cols="3"
            v-for="(item,index) in products"
            :kety="index"
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
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-dialog
          transition="dialog-bottom-transition"
          v-model="shareproduct.show"
          :max-width="device.desktop ? `600px` : `100%`"
          persistent
          :fullscreen="device.mobile"
        >
          <v-card>
            <v-row class="pa-5">
              <v-col cols="10">
                <div class="ant-font-viga ant-title">
                  Bagikan Dengan Teman Anda..!
                </div>
              </v-col>
              <v-col cols="2">
                <v-row class="pa-2 justify-end">
                  <v-btn
                    icon
                    @click="closeShareProduct"
                  >
                    <v-icon>mdi-close-circle</v-icon>
                  </v-btn>
                </v-row>
              </v-col>
            </v-row>

            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-card
                    outlined
                    class="blue lighten-5"
                  >
                    <v-row class="pa-5">
                      <v-col cols="2">
                        <img
                          src="images/logo-banten.png"
                          alt=""
                          srcset=""
                          width="50"
                          height="50"
                          style="border-radius: 15px;"
                        >
                      </v-col>
                      <v-col>
                        <div class="font-weight-bold">
                          UMKM DISKOMINFO
                        </div>
                        <div>
                          pkk.bantenprov.go.id
                        </div>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
              <v-row class="mb-5">
                <v-col cols="12">
                  <div class="font-weight-bold">Akan dibagikan lewat mana?</div>
                </v-col>
                <v-col cols="1">
                  <v-btn icon>
                    <v-icon
                      x-large
                      class="blue--text"
                    >
                      mdi-facebook
                    </v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="1">
                  <v-btn icon>
                    <v-icon
                      x-large
                      class="green--text"
                    >
                      mdi-whatsapp
                    </v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="1">
                  <v-btn icon>
                    <v-icon
                      x-large
                      class="pink--text"
                    >
                      mdi-instagram
                    </v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="1">
                  <v-btn icon>
                    <v-icon
                      x-large
                      class="blue--text"
                    >
                      mdi-telegram
                    </v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="1">
                  <v-btn icon>
                    <v-icon
                      x-large
                      class="blue--text"
                    >
                      mdi-twitter
                    </v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="1">
                  <v-btn icon>
                    <v-icon
                      x-large
                      class="grey--text"
                    >
                      mdi-link
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>

          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>
      
<script>
import { mapState, mapActions } from "vuex";
import "animate.css";
export default {
  name: "umkm",
  data: () => ({
    tab: null,
    thumbnail: "images/produk5.png",
    page: 1,
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

    shareproduct: {
      show: false,
    },
  }),
  mounted() {
    this.setPage({
      crud: false,
    });
  },
  computed: {
    ...mapState(["device", "theme", "info", "http", "snackbar", "auth"]),
  },
  methods: {
    ...mapActions(["setPage", "signIn"]),
    setThumbnail: function (val) {
      this.thumbnail = val;
    },
    postBeliLangsung: function () {
      const url = "https://plazabanten.com";
      window.open(url, "__blank");
    },
    openShareProduct: function () {
      this.shareproduct.show = true;
    },
    closeShareProduct: function () {
      this.shareproduct.show = false;
    },
  },
};
</script>
  