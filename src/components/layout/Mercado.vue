<template>
  <q-tabs color="secondary" align="justify">
    <q-tab default name="merc_atual" slot="title" icon="gps_fixed" label="Atual" />
    <q-tab name="merc_pres" slot="title" icon="alarm" label="Presente" />
    <q-tab name="merc_fut" slot="title" icon="update" label="Futuro" />
    <q-tab-pane name="merc_atual" class="bg-tertiary">
      <q-card flat>
        <q-card-media>
          <img :src="'statics/CT'+ mercado.presente[0] +'.png'">
        </q-card-media>
      </q-card>
    </q-tab-pane>
    <q-tab-pane name="merc_pres">
      <q-carousel infinite arrows dots fullscreen class="text-white">
        <div v-for="(n,ind) in mercado.presente" :key="ind" slot="slide" align="center" class="bg-tertiary">
          <q-card flat>
            <q-card-media>
              <img :src="'statics/CT'+ n +'.png'">
            </q-card-media>
          </q-card>
        </div>
      </q-carousel>
    </q-tab-pane>
    <q-tab-pane name="merc_fut">
      <q-carousel infinite arrows dots fullscreen class="text-white">
        <div v-for="(n,ind) in mercado.futuro" :key="ind" slot="slide" align="center" class="bg-tertiary">
          <q-card flat>
            <q-card-media>
              <img :src="'statics/CT'+ n +'.png'">
            </q-card-media>
          </q-card>
        </div>
      </q-carousel>
    </q-tab-pane>
  </q-tabs>
</template>

<script>
  import {
    QTab,
    QTabs,
    QTabPane,
    QCarousel,
    QCard,
    QCardMedia,
    QCardSeparator,
    QCardMain
  } from 'quasar'

  export default {
    name: 'mercado',
    data () {
      return {
        mercado: {
          presente: [4, 27, 31, 34, 44],
          futuro: [5, 9, 23, 33, 37]
        }
      }
    },
    components: {
      QTab,
      QTabs,
      QTabPane,
      QCarousel,
      QCard,
      QCardMedia,
      QCardSeparator,
      QCardMain
    },
    methods: {
    }
  }
</script>

<style lang="stylus">
  .div-carousel
    background-color: limegreen
    color: white
</style>
