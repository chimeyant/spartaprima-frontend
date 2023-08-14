import Vue from "vue";
import VueRouter from "vue-router";
import BaseFrontend from "../views/frontend/Base.vue";
import Auth from "../providers/AuthProviders";
import Login from "../views/frontend/product-catalogs/pages/Login.vue";
import RegisterUser from "../views/frontend/product-catalogs/pages/RegisterUser.vue";
import RegisterUmkm from "../views/frontend/product-catalogs/pages/RegisterUmkm.vue";
//import Register from "../views/auth/Register.vue";
import Home from "../views/frontend/product-catalogs/pages/Home.vue";
import Product from "../views/frontend/product-catalogs/pages/Product.vue";
import ProductDetail from "../views/frontend/product-catalogs/pages/ProdukDetail.vue";
import Umkm from "../views/frontend/product-catalogs/pages/Umkm.vue";

//BASE APLIKASI
import Base from "../views/backend/Base.vue";

//Exception
import PageUnderConstructions from "../views/backend/pages/exception/under-construction/Index.vue";

//Dashboard Page
import Dashboard from "../views/backend/pages/Dashboard.vue";

//Master Data App
import MasterAppInfo from "../views/backend/pages/masterdata/appinfo/Index.vue";
import MasterDataProvinsi from "../views/backend/pages/masterdata/province/Index.vue";
import MasterDataRegency from "../views/backend/pages/masterdata/regency/Index.vue";
import MasterDataDistrict from "../views/backend/pages/masterdata/district/Index.vue";
import MasterDataVillage from "../views/backend/pages/masterdata/village/Index.vue";

//Utiity Group Page
import User from "../views/backend/pages/utility/user/Index.vue";
import Changepwd from "../views/backend/pages/utility/user/Changepwd.vue";
import ProfilAkun from "../views/backend/pages/utility/user/Profil.vue";
import UtilityManajemenFitur from "../views/backend/pages/utility/manajemenfitur/Index.vue";
import UtilitymanajemenFiturAdministrator from "../views/backend/pages/utility/manajemenfitur/administrator/Index.vue";
import UtilityUpdateHistory from "../views/backend/pages/utility/updatehistory/Index.vue";
import UtilityUpdateHistoryItem from "../views/backend/pages/utility/updatehistory/items/Index.vue";
import UtilityManajemenUserProvinsi from "../views/backend/pages/utility/user-provinsi/Index.vue";
import UtilityManajemenUSerKabkota from "../views/backend/pages/utility/user-kabkota/Index.vue";
import UtilityFileManagement from "../views/backend/pages/utility/filemanagement/Index.vue";

//Backend Halaman Depan
import HalamanDepanSlider from "../views/backend/pages/halamandepan/sliders/Index.vue";
import HalamanDepanSponsor from "../views/backend/pages/halamandepan/sponsors/Index.vue";
import HalamanDepanVideo from "../views/backend/pages/halamandepan/videos/Index.vue";

//page exception
import Page404 from "../views/frontend/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "page-not-found",
    component: Page404,
  },

  /**
   * Frontend
   */
  {
    path: "",
    name: "",
    component: BaseFrontend,
    children: [
      { path: "", redirect: { name: "home" } },
      { path: "home", name: "home", component: Home },
      { path: "login", name: "login", component: Login },
      { path: "register-user", name: "register-user", component: RegisterUser },
      { path: "register-umkm", name: "register-umkm", component: RegisterUmkm },
      { path: "product", name: "product", component: Product },
      {
        path: "product-detail",
        name: "product-detail",
        component: ProductDetail,
      },
      {
        path: "umkm",
        name: "umkm",
        component: Umkm,
      },
    ],
  },

  /**
   * Route Backend
   */

  {
    path: "/auth",
    name: "",
    meta: {
      auth: true,
    },
    component: Base,
    children: [
      { path: "", redirect: { name: "dashboard" } },
      { path: "dashboard", name: "dashboard", component: Dashboard },
      { path: "user", name: "user", component: User },
      {
        path: "page-under-construction",
        name: "page-under-construction",
        component: PageUnderConstructions,
      },
      {
        path: "chngpwd",
        name: "chngpwd",
        component: Changepwd,
      },
      {
        path: "profil-akun",
        name: "profil-akun",
        component: ProfilAkun,
      },

      //route master data
      {
        path: "master-app-info",
        name: "master-app-info",
        component: MasterAppInfo,
      },
      {
        path: "master-data-province",
        name: "master-data-province",
        component: MasterDataProvinsi,
      },
      {
        path: "master-data-regency/:province_code/:province_name",
        name: "master-data-regency",
        component: MasterDataRegency,
      },
      {
        path:
          "master-data-district/:province_code/:province_name/:regency_code/:regency_name",
        name: "master-data-district",
        component: MasterDataDistrict,
      },
      {
        path:
          "master-data-village/:province_code/:province_name/:regency_code/:regency_name/:district_code/:district_name",
        name: "master-data-village",
        component: MasterDataVillage,
      },

      //Route slider
      {
        path: "halaman-depan-slider",
        name: "halaman_depan_slider",
        component: HalamanDepanSlider,
      },
      //Route Sponsor
      {
        path: "halaman-depan-sponsor",
        name: "halaman-depan-sponsor",
        component: HalamanDepanSponsor,
      },
      {
        path: "halaman-depan-video",
        name: "halaman-depan-video",
        component: HalamanDepanVideo,
      },

      /**
       * Route Utility
       */
      {
        path: "utility-manajemen-fitur-administrator",
        name: "utility-manajemen-fitur-administrator",
        component: UtilitymanajemenFiturAdministrator,
      },
      {
        path: "utility-manajemen-fitur",
        name: "utility-manajemen-fitur",
        component: UtilityManajemenFitur,
      },
      {
        path: "utility-update-history",
        name: "utility-update-history",
        component: UtilityUpdateHistory,
      },
      {
        path: "utility-update-history-items/:update_history_id",
        name: "utility-update-history-items",
        component: UtilityUpdateHistoryItem,
      },
      {
        path: "utility-manajemen-user-provinsi",
        name: "utility-manajemen-user-provinsi",
        component: UtilityManajemenUserProvinsi,
      },
      {
        path: "utility-manajemen-user-kabkota",
        name: "utility-manajemen-user-kabkota",
        component: UtilityManajemenUSerKabkota,
      },
      {
        path: "utility-file-management",
        name: "utility-file-management",
        component: UtilityFileManagement,
      },
    ],
  },

  /**
   * Route signin
   */
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  mode: "history",
});

/**
 * router match
 */

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.auth);

  if (requiresAuth) {
    if (!Auth.check) {
      next({ name: "signin" });
    } else {
      next();
    }
  } else {
    if (to.name === "signin" && Auth.check) {
      if (Auth.user.authent == "superadmin") {
        next({ name: "dashboard" });
      } else if (Auth.user.auth === "operator") {
        next({ name: "dashboard" });
      } else {
        next({ name: "dashboard" });
      }
    } else {
      next();
    }
  }
});

export default router;
