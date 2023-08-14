<template>
  <div class="section-footer blue">
    <v-container>
      <v-row>
        <v-col cols="2">
          <img
            src="images/logo-bawah.png"
            alt=""
            srcset=""
            height="70"
            width="180"
          >
        </v-col>
        <v-col :cols="device.desktop ? `4`:`12`">
          <div class="footer-title">{{info.app_company}}</div>
          <div class="address">{{ info.app_address }}</div>
          <div class="footer-title mt-5">Bantuan</div>
          <div class="address">Sparta Care</div>
          <div class="address">Syarat dan Ketentuan</div>
          <div class="address">Kebijakan Privasi</div>

        </v-col>
        <v-col :cols="device.desktop ? `4`:`12`">
          <div class="konten-kontak">
            <div class="kontak">Kontak</div>
            <div class="kontak-item">
              <v-icon color="white">mdi-phone</v-icon>&nbsp; {{ '0812 8000 8580' }}
            </div>
            <div class="kontak-item">
              <v-icon color="white">mdi-email</v-icon>&nbsp; {{ 'info@spartaprima.co.id' }}
            </div>

          </div>
        </v-col>
        <v-col :cols="device.desktop ? `2`:`12`">
          <div class="sosial-media">Ikuti Kami</div>
          <div class="sosial-media-item body-2">
            <v-icon color="white">mdi-facebook</v-icon>&nbsp;Facebook
          </div>
          <div class="sosial-media-item body-2">
            <v-icon color="white">mdi-instagram</v-icon>&nbsp;Instagram
          </div>
          <div class="sosial-media-item body-2">
            <v-icon color="white">mdi-twitter</v-icon>&nbsp;Twitter
          </div>

          <div class="footer-title mt-5">Keamanan & Privasi</div>

        </v-col>
      </v-row>
    </v-container>
    <v-row class="footer-bottom blue darken-3">
      <v-col
        cols="12"
        class="copyright ant-font-viga"
      >
        {{ info.app_company }} || Copyright &copy; 2023 || Design By Ants
      </v-col>
    </v-row>
  </div>

</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "FooterComponent",
  data: () => ({}),
  mounted() {},
  computed: {
    ...mapState(["device", "theme", "info"]),
  },
  methods: {},
  watch: {},
};
</script>
  
  <style>
.section-footer {
  background-color: darkorange;
  padding-top: 15px;
}
.footer-title {
  font-size: 15px;
  font-weight: 600;
  color: white;
  font-family: viga;
}
.footer-bottom {
  margin-top: 0px;
  text-align: center;
  height: 40px;
}
.copyright {
  font-size: 8pt;
  color: white;
}
.address {
  font-size: 10pt;
  font-family: none;
  font-weight: 200;
  color: white;
}
.kontak {
  margin-bottom: 5px;
  color: white;
  font-family: viga;
}
.kontak-item {
  font-size: 14px;
  color: white;
  padding: 2px;
}
.sosial-media {
  margin-bottom: 5px;
  color: white;
  font-family: viga;
}
.sosial-media-item {
  font-size: 14px;
  color: white;
  padding: 2px;
}
</style>