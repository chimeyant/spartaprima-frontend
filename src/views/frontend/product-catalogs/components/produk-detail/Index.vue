<template>
  <v-container class="mt-16 animate__animated animate__fadeIn">
    <v-row class="mb-10">
      <v-col cols="4">
        <img
          :src="thumbnail"
          alt=""
          srcset=""
          width="100%"
          height="350px"
        >
        <v-row>
          <v-col cols="3">
            <img
              src="images/produk5.png"
              alt=""
              srcset=""
              width="100%"
              @mouseenter="setThumbnail('images/produk5.png')"
            >
          </v-col>
          <v-col cols="3">
            <img
              src="images/produk2.png"
              alt=""
              srcset=""
              width="100%"
              @mouseenter="setThumbnail('images/produk2.png')"
            >
          </v-col>
          <v-col cols="3">
            <img
              src="images/produk3.png"
              alt=""
              srcset=""
              width="100%"
              @mouseenter="setThumbnail('images/produk3.png')"
            >
          </v-col>
          <v-col cols="3">
            <img
              src="images/produk4.png"
              alt=""
              srcset=""
              width="100%"
              @mouseenter="setThumbnail('images/produk4.png')"
            >
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="5">
        <div class="ant-font-viga ant-title">
          Bandeng asap cabut duri oleh oleh serang - bumbu kuning
        </div>
        <div class="ant-font-viga-xs mt-2">
          Dilihat : 100+ <v-icon color="orange darken-1">mdi-medal</v-icon> 100+
        </div>
        <div class="ant-lg-title font-weight-bold mt-5 mb-5">
          Rp. 9.000,00
        </div>
        <v-divider></v-divider>
        <v-tabs
          color="blue"
          v-model="tab"
        >
          <v-tab
            class="blue--text ant-font-viga text-transform-none"
            key="page-detail"
          >Detail</v-tab>
          <v-tab
            class="blue--text ant-font-viga text-transform-none"
            key="page-spesifikasi"
          >Spesifikasi</v-tab>
          <v-tab
            class="blue--text ant-font-viga text-transform-none"
            key="page-info"
          >Info Penting</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item
            key=page-detail
            class="mt-5"
          >
            <div class="text-body-2">
              <p>
                bandeng asap cabut duri oleh oleh khas toko bhek surabaya makan bandeng tanpa ribet cari duri nya tahan 3 hari di suhu ruang dan 7 hari di dalam kulkas
              </p>
              <p>
                cara penyajian
                begitu barang di trima harap di kukus atau di oven atau di goreng sesuai selera jika tidak habis bisa di simpan di dalam kulkas
              </p>
              <p>
                garansi jika dalam waktu 3 hari terjadi kebusukan uang kembali 100% selamat berbelanja kakak
              </p>

            </div>
          </v-tab-item>
          <v-tab-item
            key=page-spesifikasi
            class="mt-5"
          >
            Info Produk
            Konsumsi Dalam : 3 Hari

          </v-tab-item>
          <v-tab-item
            key=page-info
            class="mt-5"
          >
            <div class="text-body-1">

              Untuk lebih awet silahkan simpen di kulkas dan hangatkan jika akan disajikan
            </div>
          </v-tab-item>
        </v-tabs-items>

        <v-row>
          <v-col cols="12">
            <v-divider></v-divider>
          </v-col>
          <v-col cols="2">
            <img
              src="images/logo-banten.png"
              alt=""
              srcset=""
              width="100%"
              @click="$router.push({name:'umkm'})"
            >
          </v-col>
          <v-col cols="8">
            <v-row>
              <v-col col="10">
                <div class="ant-font-viga-xs">
                  UMKM DINAS KOMINUIKASI
                </div>

              </v-col>
              <v-col cols="2">
                <v-btn
                  small
                  class="text-transform-none blue flat white--text"
                >Ikuti</v-btn>
              </v-col>
            </v-row>
            <div>
              <v-icon class="mr-2 text-body-2">mdi-star</v-icon>
              <span class="text-sm-body-2">Rata Rata 4 </span>
            </div>
          </v-col>
        </v-row>

      </v-col>
      <v-col cols="3">
        <v-card
          class=""
          outlined
        >
          <v-card-text>
            <div class="ant-font-viga blue--text">AKSI </div>
            <v-col>
              <v-btn
                block
                outlined
                class="blue white--text text-transform-none"
                @click="postBeliLangsung"
              >Beli Langsung</v-btn>
            </v-col>
            <v-col>
              <v-btn
                block
                outlined
                class="blue white--text text-transform-none"
              >Masukan Ke Favorit</v-btn>
            </v-col>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>

    </v-row>
  </v-container>
</template>
    
    <script>
import { mapState, mapActions } from "vuex";
import "animate.css";
export default {
  name: "product-detail",
  data: () => ({
    tab: null,
    thumbnail: "images/produk5.png",
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
  },
};
</script>
