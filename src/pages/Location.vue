<template>
  <div>
    <q-page padding>
      <div class="text-h6">LOCATION</div>
      <!-- content -->
      <GmapMarker
        ref="myMarker"
        :position="this.google && new google.maps.LatLng(1.38, 103.8)"
      />-->
    </q-page>
  </div>
</template>

<script>
import { gmapApi } from "vue2-google-maps";
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps/src/main'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDzJwUJ9hm_s_WM3FaBrAZ0H2W1j5Ti6cg',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
 
  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,
 
  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  installComponents: false,
})

/*export default {
  computed: {
    google: gmapApi,
  },
  data() {
    return {
      placeId: "",
      geocoder: null,
    };
  },
  mounted() {
    this.$gmapApiPromiseLazy().then(() => {
      var bounds = new google.maps.LatLngBounds();
      if (this.google) {
        this.geocoder = new this.google.maps.Geocoder();
      }
    });
  },
  methods: {
    geocode() {
      this.geocoder.geocode({ placeId: this.placeId }, (results, status) => {
        console.log(results, status);
      });
    },
  },
  // name: 'PageName',
};*/
</script>
