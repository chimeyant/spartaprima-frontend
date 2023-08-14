<template>
  <v-container class="pt-10">
    <v-row class="mt-16">
      <v-col
        cols="6"
        v-show="device.desktop"
      >
        <v-row class="justify-center animated animate__fadeInLeft mt-10">
          <img
            width="420"
            height="400"
            src="images/e-tokopkk-login.jpg"
            alt=""
          >
        </v-row>
      </v-col>
      <v-col
        :cols="device.desktop ?`6`:`12`"
        class="animated animate__fadeInRight"
      >

        <div class="login-title ant-font-viga blue--text">
          Registrasi Pengguna {{ info.app_name }}
        </div>
        <div class="login-subtitle ant-font-viga blue--text text--lighten-1">
          Silahkan masukan pengguna dan kata sandi anda...!
        </div>
        <div :class="device.desktop ? `mt-10 pl-15 pr-15`: `mt-5`">
          <v-col cols="12">
            <v-text-field
              :color="theme.color"
              outlined
              placeholder="Nama Lengkap"
              dense
              hide-details
              v-model="record.name"
              prepend-inner-icon="mdi-account"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :color="theme.color"
              lable="Pengguna"
              outlined
              placeholder="Email | Pengguna"
              dense
              hide-details
              v-model="record.email"
              prepend-inner-icon="mdi-email"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              :color="theme.color"
              outlined
              placeholder="Nomor HP (Whastapp)"
              dense
              hide-details
              v-model="record.phone"
              prepend-inner-icon="mdi-phone"
              type="number"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-row class="pr-4 pt-5">
              <div class="pl-5 font-weight-medium grey--text">
              </div>
              <v-spacer></v-spacer>
              <v-btn
                outlined
                dense
                :color="theme.color"
                @click="postRegister"
                class="text-transform-none ant-font-viga"
              ><v-icon
                  class="mr-2  "
                  color="green"
                >mdi-send-circle</v-icon> Kirim</v-btn>
            </v-row>

            <v-row class="forget-password">
            </v-row>

            <v-row class="pt-2 text-sm-body-2">
              <v-divider></v-divider>
              <span class="position-sm-relative mr-2 ml-2 align-text-top">
                atau dengan
              </span>
              <v-divider></v-divider>
            </v-row>
            <v-row class="mt-5">
              <v-col cols="12">
                <v-btn
                  block
                  outlined
                  color="white"
                  class="text-transform-none elevation-1 shadow-1 ant-font-viga purple--text"
                  @click="postRegisterByGoogle"
                >
                  Daftar Dengan Akun <span class="blue--text ml-1">G</span><span class="red--text">o</span><span class="yellow--text">o</span><span class="blue--text">g</span><span class="green--text">l</span><span class="red--text">e</span></v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            cols="12"
            v-if="false"
          >
            <v-row class="mt-5 mb-2">
              <v-divider></v-divider>
              <div style="margin-top:-12px ;margin-left:5px;margin-right: 5px ; font-size:12pt ; color:grey ; border-color: grey solid; border-width: 2px; ">Atau</div>
              <v-divider></v-divider>
            </v-row>
          </v-col>
          <v-col
            cols="12"
            v-if="false"
          >
            <v-row class="justify-center">
              <div class="other-sign-in-red">
                <v-icon color="red">mdi-google</v-icon>
              </div>
              <div class="other-sign-in-blue">
                <v-icon color="blue">mdi-facebook</v-icon>
              </div>
            </v-row>
          </v-col>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
    
    <script>
import { mapState, mapActions } from "vuex";
import "animate.css";
export default {
  name: "LoginComponent",
  data: () => ({
    record: {
      name: null,
      email: null,
      phone: null,
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
    ...mapActions(["setPage", "signIn", "setLoading", "catchError"]),

    postRegister: async function () {
      try {
        this.setLoading({ dialog: true, text: "Proses Registrasi" });
        let {
          data: { code, success, message },
        } = await this.http.post("api/v2/auth/register-user", this.record);

        if (!success) {
          this.snackbar.color = "red";
          this.snackbar.text = message;
          this.snackbar.state = true;
          return;
        }

        this.snackbar.color = "green";
        this.snackbar.text = message;
        this.snackbar.state = true;
        this.$router.push({ name: "login" });
      } catch (error) {
        this.catchError(error);
      } finally {
        this.setLoading({ dialog: false, text: "" });
      }
    },

    showPassword: function () {
      if (this.password) {
        this.password = false;
      } else {
        this.password = true;
      }
    },

    postRegisterByGoogle: async function () {
      try {
        await this.http.get("api/v2/auth/register-by-google").then((res) => {
          window.open(res.data, "__blank");
        });
      } catch (error) {}
    },
  },
};
</script>
    
    <style>
.login-title {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  padding-top: 25px;
  padding-bottom: 10px;
  color: grey;
}
.login-subtitle {
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  color: gray;
}
.other-sign-in-red {
  border: red solid;
  border-radius: 5px;
  margin: 5px;
}
.other-sign-in-blue {
  border: blue solid;
  border-radius: 5px;
  margin: 5px;
}

.row.forget-password {
  font-size: 12px;
  font-weight: 400;
  justify-content: end;
  margin-top: 30px;
  margin-right: 2px;
  color: grey;
}
</style>