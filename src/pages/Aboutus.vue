<template>
  <div>
    <q-dialog v-model="contact" position="bottom">
      <q-card
        class="full-width bg-pal-blue q-px-sm q-pt-md q-pb-xl"
        style="border-radius: 30px 30px 0px 0px;"
      >
        <div class="row justify-end items-center">
          <div class="col-2"></div>
          <div class="col-8 text-center text-pal-yellow text-h6">Kontak Kami</div>
          <q-btn class="col-2" flat round color="white" icon="close" v-close-popup />
        </div>

        <q-card-section class="row items-start no-wrap text-center">
          <div class="col-6 q-px-md">
            <q-icon name="call" size="lg" color="pal-yellow"></q-icon>
            <div class="text-white">(024)7711216</div>
          </div>
          <div class="col-6 q-px-md">
            <q-icon name="mail" size="lg" color="pal-yellow"></q-icon>
            <div class="text-white" style="word-break: break-word;">
              <span>info@smkpalapasemarang.sch.id</span>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-page>
      <div
        class="bg-pal-orange row text-center q-pb-md q-mb-md"
        style="height:100%;border-radius:0 0 30px 30px;"
      >
        <img
          src="~assets/Background/bg-aboutus.png"
          style="width:100%;object-fit:fill;position:absolute;z-index:0;border-radius:0 0 30px 30px; "
        />
        <div class="q-px-md q-pt-lg" style="top:0%;width:100%;position:relative;z-index:1">
          <div class="text-h5 text-pal-yellow">SMK PALAPA</div>
          <div class="text-body1 text-pal-yellow">Semarang</div>
          <img src="~assets/logo/logo-smk-palapa.png" style="height:150px;" />
          <div class="row justify-center">
            <q-btn
            class="col-5 q-mr-md"
            padding="sm"
            color="pal-blue"
            icon="call"
            no-caps
            label="Kontak Kami"
            @click="contact=true"
            ></q-btn>
            <q-btn
            class="col-5"
            padding="sm"
            color="pal-blue"
            icon="mail"
            no-caps
            label="Lihat Lokasi"
            @click="$route.name == 'location' ? null : $router.push('/location')"
            ></q-btn>
          </div>
        </div>
      </div>
      <!-- content -->
      <div class="q-px-md" style="position:relative;">
        <div class="text-h5 q-mb-xs text-bold text-center text-pal-blue">Visi</div>
        <div
          class="text-body2 text-center"
        >Menjadi SMK Unggulan pilihan masyarakat dengan tamatan yang : Cerdas, Kompeten, Siap kerja, dan ber-Karakter serta mempunyai jiwa wirausaha yang berani bersaing ditingkat lokal maupun global</div>
        <div class="q-mt-md text-h5 q-mb-xs text-bold text-center text-pal-blue">Misi</div>
        <q-list>
          <q-item dense>
            <q-item-section side top class="text-pal-orange text-h6">1.</q-item-section>
            <q-item-section
              class="text-body2"
            >Melaksanakan pendidikan dan Pelatihan Kejuruan yang profesional, flekesibel dan terintegrasi IMTAQ</q-item-section>
          </q-item>
          <q-item dense>
            <q-item-section side top class="text-pal-orange text-h6">2.</q-item-section>
            <q-item-section
              class="text-body2"
            >Mewujudkan lingkungan yang menjunjung tinggi etos kerja ,budi pekerti luhur dijiwai semangat wirausaha</q-item-section>
          </q-item>
          <q-item dense>
            <q-item-section side top class="text-pal-orange text-h6">3.</q-item-section>
            <q-item-section
              class="text-body2"
            >Meningkatkan peran serta dunia industri dan masyarakat dalam penyelenggaraan pendidikan di sekolah</q-item-section>
          </q-item>
          <q-item dense>
            <q-item-section side top class="text-pal-orange text-h6">4.</q-item-section>
            <q-item-section
              class="text-body2"
            >Melaksanakan sistem manajemen mutu ISO 9001 : 2008 sebagai landasan pelayanan pada masyarakat</q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-page>
  </div>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      contact: false,
    };
  },

  methods: {
    openContact() {
      this.contact = true;
    },
  },
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
