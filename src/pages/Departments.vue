<template>
  <div>
    <q-page>
      <div style="position:relative; height:100px;">
        <img
          src="~assets/Background/bg-content.png"
          style="width:100%;height:100%;object-fit:cover; border-radius:0 0 30px 30px;"
        />
        <div class="text-h5 text-pal-yellow q-pl-lg" style="position:absolute;top:50%;">Jurusan</div>
      </div>
      <q-list class="q-pa-sm">
        <q-item clickable class="bg-pal-blue row q-pa-none q-ma-sm" style="height:120px;border-radius: 10px;"  @click.native="onClick('https://tefa.smkpalapasemarang.sch.id')"> 
          <q-item-section class="col-8 self-end q-pb-md q-px-md">
            <div class="text-h6 text-pal-yellow">TIKR</div>
            <div class="text-body2 text-grey-5">Teknik Kendaraan Ringan</div>
          </q-item-section>
          <q-item-section class="col-4" style="margin:0;">
            <img
              src="~assets/Departments/deps_TIKR.jpg"
              style="height:100%; max-width:100%;object-fit: cover;border-radius: 100px 10px 10px 50px; opacity:0.7;"
            />
          </q-item-section>
        </q-item>
        <q-item clickable class="bg-pal-blue row q-pa-none q-ma-sm" style="height:120px;border-radius: 10px;"  @click.native="onClick('https://tefa.smkpalapasemarang.sch.id')"> 
          <q-item-section class="col-8 self-end q-pb-md q-px-md">
            <div class="text-h6 text-pal-yellow">TSM</div>
            <div class="text-body2 text-grey-5">Teknik Sepeda Motor</div>
          </q-item-section>
          <q-item-section class="col-4" style="margin:0;">
            <img
              src="~assets/Departments/deps_TSM.jpg"
              style="height:100%; max-width:100%;object-fit: cover;border-radius: 100px 10px 10px 50px; opacity:0.7;"
            />
          </q-item-section>
        </q-item>
        <q-item clickable class="bg-pal-blue row q-pa-none q-ma-sm" style="height:120px;border-radius: 10px;"  @click.native="onClick('https://tefa.smkpalapasemarang.sch.id')"> 
          <q-item-section class="col-8 self-end q-pb-md q-px-md">
            <div class="text-h6 text-pal-yellow">RPL</div>
            <div class="text-body2 text-grey-5">Rekayasa Perangkat Lunak</div>
          </q-item-section>
          <q-item-section class="col-4" style="margin:0;">
            <img
              src="~assets/Departments/deps_RPL.jpg"
              style="height:100%; max-width:100%;object-fit: cover;border-radius: 100px 10px 10px 50px; opacity:0.7;"
            />
          </q-item-section>
        </q-item>
        <q-item clickable class="bg-pal-blue row q-pa-none q-ma-sm" style="height:120px;border-radius: 10px;"  @click.native="onClick('https://tefa.smkpalapasemarang.sch.id')"> 
          <q-item-section class="col-8 self-end q-pb-md q-px-md">
            <div class="text-h6 text-pal-yellow">TKJ</div>
            <div class="text-body2 text-grey-5">Teknik Komputer Jaringan</div>
          </q-item-section>
          <q-item-section class="col-4" style="margin:0;">
            <img
              src="~assets/Departments/deps_TKJ.jpg"
              style="height:100%; max-width:100%;object-fit: cover;border-radius: 100px 10px 10px 50px; opacity:0.7;"
            />
          </q-item-section>
        </q-item>
        <q-item clickable class="bg-pal-blue row q-pa-none q-ma-sm" style="height:120px;border-radius: 10px;"  @click.native="onClick('https://tefa.smkpalapasemarang.sch.id')"> 
          <q-item-section class="col-8 self-end q-pb-md q-px-md">
            <div class="text-h6 text-pal-yellow">TAV</div>
            <div class="text-body2 text-grey-5">Teknik Audio Video</div>
          </q-item-section>
          <q-item-section class="col-4" style="margin:0;">
            <img
              src="~assets/Departments/deps_TAV.jpg"
              style="height:100%; max-width:100%;object-fit: cover;border-radius: 100px 10px 10px 50px; opacity:0.7;"
            />
          </q-item-section>
        </q-item>
        
      </q-list>
    </q-page>
  </div>
</template>

<script>
import { openURL } from 'quasar'
export default {
  // name: 'PageName',
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
