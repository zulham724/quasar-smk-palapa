<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer style="background-color:#293858;color:#F2994A">
      <q-tabs
        v-model="tab"
        no-caps
        stretch
        active-color="blue-10"
        indicator-color="transparent"
        align="justify"
      >
        <q-tab
          name="home"
          icon="home"
          label="Beranda"
          @click="$route.name == 'home' ? null : $router.push('/')"
        ></q-tab>
        <q-tab
          name="departments"
          icon="school"
          label="Jurusan"
          @click="$route.name == 'departments' ? null : $router.push('/departments')"
        ></q-tab>
        <q-tab
          name="aboutus"
          icon="apartments"
          label="Tentang Kami"
          @click="$route.name == 'aboutus' ? null : $router.push('/aboutus')"
        ></q-tab>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MainLayout",
  data() {
    return {
      tab: this.$route.name,
    };
  },
  computed: {
    ...mapState(["Setting", "Auth"]),
  },
  mounted() {},
  methods: {},
};
</script>
<style>
.q-tab--active {
  color: 293858;
  background-color: #f2994a;
}
</style>