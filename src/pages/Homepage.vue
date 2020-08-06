<template>
    <q-page class="bg-pal-yellow" style="position:relative;">
    <img
        class="full-width"
          src="~assets/Background/bg-home.png"
          style="height:80%;object-fit:fill;position:absolute; z-index:1;"
        />
    <div  class="q-px-lg q-pb-lg" style="position:relative;z-index:3">

      <div class="q-pt-lg text-h4 text-pal-yellow" >SMK Palapa</div>
      <div class="q-pb-md text-h6 text-pal-yellow"  style="z-index:9999">Semarang</div>
      <!-- content -->
      <div>
        <!-- carousel -->
        <q-carousel animated v-model="slide" arrows navigation infinite style="height:200px;">
          <q-carousel-slide :name="1" img-src="~assets/Carousel/car-1.jpg" />
          <q-carousel-slide :name="2" img-src="~assets/Carousel/car-2.jpg" />
          <q-carousel-slide :name="3" img-src="~assets/Carousel/car-3.jpg" />
        </q-carousel>
      </div>
      <div class="q-pt-lg row justify-between">
        <q-card
          class="mycard text-center q-pa-sm q-mx-auto q-mb-sm link"
          style="height:auto; width:45%;" @click.native="onClick('https://tefa.smkpalapasemarang.sch.id/search/label/berita')"
        >
          <img src="~assets/Icons/News.svg" style="height:70px;" />
          <div class="q-pt-sm text-pal-blue text-body1 text-weight-medium">Berita Terbaru</div>
        </q-card>
        <q-card
          class="mycard text-center q-pa-sm q-mx-auto q-mb-sm"
          style="height:auto; width:45%;" @click.native="onClick('https://tefa.smkpalapasemarang.sch.id')"
        >
          <img src="~assets/Icons/Gallery.svg" style="height:70px;" />
          <div class="q-pt-sm text-pal-blue text-body1 text-weight-medium">Galeri</div>
        </q-card>
        <q-card
          class="mycard text-center q-pa-sm q-mx-auto q-mb-sm"
          style="height:auto; width:45%;"  @click.native="onClick('https://tefa.smkpalapasemarang.sch.id')"
        >
          <img src="~assets/Icons/Teacher.svg" style="height:70px;" />
          <div class="q-pt-sm text-pal-blue text-body1 text-weight-medium">Data Guru</div>
        </q-card>
        <q-card
          class="mycard text-center q-pa-sm q-mx-auto q-mb-sm"
          style="height:auto; width:45%;"  @click.native="onClick('https://tefa.smkpalapasemarang.sch.id')"
        >
          <img src="~assets/Icons/Student.svg" style="height:70px;" />
          <div class="q-pt-sm text-pal-blue text-body1 text-weight-medium">Data Siswa</div>
        </q-card>
        <q-card
          class="mycard text-center q-pa-sm q-mx-auto q-mb-sm"
          style="height:auto; width:45%;"  @click.native="onClick('https://tefa.smkpalapasemarang.sch.id')"
        >
          <img src="~assets/Icons/Website.svg" style="height:70px;" />
          <div class="q-pt-sm text-pal-blue text-body1 text-weight-medium">Website Sekolah</div>
        </q-card>
        <q-card
          class="mycard text-center q-pa-sm q-mx-auto q-mb-sm"
          style="height:auto; width:45%;"  @click.native="onClick('https://tefa.smkpalapasemarang.sch.id')"
        >
          <img src="~assets/Icons/School-system.svg" style="height:70px;" />
          <div class="q-pt-sm text-pal-blue text-body1 text-weight-medium">Sistem Sekolah</div>
        </q-card>
      </div>
      </div>
    </q-page>
</template>

<script>
import { openURL } from 'quasar'
export default {
  // name: 'PageName',
  data() {
    return {
      slide: 1,
      };
    },
  methods: {
    onClick : function (link) {
      openURL(link)
    }
  }
};
</script>

<style>
.bg-pal-blue {
  background: #293858;
}
.bg-pal-orange {
  background: #f2994a;
}
.bg-pal-yellow {
  background: #f2c94c;
}
.text-pal-blue {
  color: #293858;
}
.text-pal-orange {
  color: #f2994a;
}
.text-pal-yellow {
  color: #f2c94c;
}
</style>
