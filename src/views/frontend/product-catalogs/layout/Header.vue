<template>
  <div class="menu-top blue">
    <v-row>
      <v-container>
        <v-row>
          <v-col>
            <v-icon class="white--text mr-2 body-1">mdi-clock-outline</v-icon>
            <span class="white--text ant-font-viga-xs mr-2">12:00 WIB</span>
            <v-divider
              vertical
              class="white-text"
            ></v-divider>
          </v-col>
        </v-row>
      </v-container>
    </v-row>

    <v-app-bar
      app
      light
      color="transparent"
      absolute
      style="height: 85px;"
      elevation="0"
      class="mt-10 mr-10"
    >

      <v-toolbar-title v-show="device.desktop">
        <div class="pl-5 pr-5 mr-5 ">
          <img
            src="/images/logo-atas.png"
            width="100px"
            height="80px"
            alt="logo"
            :class="device.desktop ? `animate__animated animate__tada ant-header-logo`:`ant-header-logo-mobile`"
            @click="$router.push({name:'home'})"
          >
        </div>
      </v-toolbar-title>
      <v-list
        color="transparent"
        class="d-flex white light  mt-4  mb-5"
        style="margin-right: 150px !important;"
      >
        <template v-for="(menu,index) in menus">
          <v-list-item
            active-class="blue white--text rounded-pill animate__animated animate__bounce transparent "
            class="hidden-md-and-down rounded-pill mr-2"
            link
            :to="menu.route"
            v-if="menu.type=='item'"
          >
            <v-list-item-title class="font-weight-bold">{{ menu.title }}</v-list-item-title>
          </v-list-item>

          <v-menu
            offset-y
            v-if="menu.type=='subMenu'"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                active-class="blue darken-1 white--text rounded-pill"
                class="font-weight-bold rounded-pill "
                v-bind="attrs"
                v-on="on"
                text
                style="text-transform: unset !important;height: 50px;"
              >
                {{ menu.title }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in menu.submenus"
                :key="index"
                :to="item.route"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

        </template>
      </v-list>
      <v-spacer />

      <v-text-field
        placeholder="Cari Produk..."
        outlined
        dense
        hide-detail
        color="purple"
        class="rounded-pill mt-6 mr-2"
        append-icon="mdi-shopping-search"
      >
      </v-text-field>
      <v-badge
        bordered
        color="red"
        content="5"
        overlap
        class="mr-4 ml-2 animate__animated animate__bounce animate__delay-2s"
      >
        <v-icon
          color="green"
          class=""
        >mdi-shopping</v-icon>

      </v-badge>

      <v-divider vertical></v-divider>
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            class="mr-2"
          >

            <v-icon
              class="mr-1 ml-2"
              color="blue"
            >mdi-storefront</v-icon>

          </v-btn>
        </template>

        <v-card color="">
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <div class="text-center">
                  <div class="text-body-2">
                    Anda belum memiliki UMKM...?
                  </div>
                  <div class="mt-3">
                    <v-btn
                      color="blue"
                      small
                      class="text-transform-none white--text"
                      @click="$router.push({name:'register-umkm'})"
                    >Daftar UMKM Sekarang</v-btn>
                  </div>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>

      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            class="mr-2"
          >
            <v-icon>
              mdi-account-circle
            </v-icon>
          </v-btn>
        </template>

        <v-card color="">
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-row>
                  <v-col cols="6">
                    <v-btn
                      color="blue"
                      outlined
                      dense
                      hide-details
                      class="text-transform-none"
                      @click="$router.push({name:'login'})"
                    >Masuk</v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      color="blue"
                      class="white--text text-transform-none"
                      @click="$router.push({name:'register-user'})"
                    >Daftar</v-btn>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>

      <v-menu
        offset-y
        width="300"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            light
            v-bind="attrs"
            v-on="on"
            class="mt-4 hidden-md-and-up"
          >
            <v-icon color="black">mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-card width="200">
          <v-list>
            <v-list-item>
              <v-list-item-title @click="$router.push({ name: 'home' })">
                Beranda
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title @click="$router.push({name:'infografis'})">
                Visi Dan Misi
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="$router.push({ name: 'dataset' })">
                Produk
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title @click="$router.push({ name: 'dokumen' })">
                Faq
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="$router.push({ name: 'login' })">
                Login
              </v-list-item-title>
            </v-list-item>

          </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>
  </div>

</template>
  
  <script>
import { mapState, mapActions } from "vuex";
export default {
  name: "HeaderComponent",

  data: () => ({
    menu: null,
    menus: [
      {
        title: "Home",
        route: "/home",
        type: "item",
      },
      {
        title: "Visi Dan Misi",
        route: "",
        type: "item",
      },
      {
        title: "Produk",
        route: "/product",
        type: "item",
        // submenus: [
        //   {
        //     title: "Seluruh Inovasi",
        //     icon: "mdi-clover",
        //     route: "/repository",
        //     type: "item",
        //   },
        //   {
        //     title: "Grafik Inovasi",
        //     icon: "mdi-clover",
        //     route: "#",
        //     type: "item",
        //   },
        //   {
        //     title: "Peta Inovasi",
        //     icon: "mdi-clover",
        //     route: "#",
        //     type: "item",
        //   },
        // ],
      },
      //   {
      //     title: "Menu 2",
      //     route: "/kompetisi",
      //     type: "subMenu",
      //     submenus: [
      //       {
      //         title: "IGA",
      //         icon: "mdi-clover",
      //         route: "#",
      //         type: "item",
      //       },
      //       {
      //         title: "SINOVIC",
      //         icon: "mdi-clover",
      //         route: "#",
      //         type: "item",
      //       },
      //     ],
      //   },
      {
        title: "Faq",
        route: "#",
        type: "item",
      },
      {
        title: "Kontak",
        route: "#",
        type: "item",
      },
    ],
  }),
  mounted() {},
  computed: {
    ...mapState(["device", "theme", "info", "page", "user"]),
  },
};
</script>
  
<style>
.menu-top {
  position: absolute;
  height: 29px;
  left: 0%;
  right: 0%;
  top: 0;
}

.v-toolbar__title {
  display: flex;
  font-size: 20px;
  font-weight: 600;
  color: cornflowerblue;
}

::before {
  border-radius: 30px;
}

span.hidden-sm-and-down.header-title {
  font-size: 20px;
  color: grey;
}

.ant-header-title {
  font-family: people;
}
.ant-header-subtitle {
  font-size: 13px;
  font-family: sans-serif;
}
.ant-header-logo {
  margin-top: 15px;
  margin-left: 150px;
}
.ant-header-logo-mobile {
  margin-left: 2px;
}
</style>