<template>
  <div align="center">
    <q-card v-for="n in 50" :key="n" inline>
      <q-card-media>
        <img :src="'statics/CT'+ n +'.png'">
      </q-card-media>
    </q-card>
    <q-fixed-position corner="bottom-right" :offset="[18, 18]">
      <q-btn color="primary"
             round
             v-back-to-top.animate="{offset: 500, duration: 200}"
             class="animate-pop">
        <q-icon name="keyboard_arrow_up" />
      </q-btn>
    </q-fixed-position>
  </div>
</template>

<script>
  import {
    BackToTop,
    QCollapsible,
    QFixedPosition,
    QBtn,
    QCard,
    QCardMedia,
    QCardActions,
    QCardSeparator,
    QCardMain,
    QList,
    QItem,
    QItemMain,
    QItemSide,
    QItemTile,
    QIcon
  } from 'quasar'

  export default {
    name: 'login',
    data () {
      return {
        expenses: {
          id: '',
          disciplina: '',
          login: '',
          senha: '',
          done: false
        }
      }
    },
    components: {
      QCollapsible,
      QFixedPosition,
      QBtn,
      QCard,
      QCardMedia,
      QCardActions,
      QCardSeparator,
      QCardMain,
      QList,
      QItem,
      QItemMain,
      QItemSide,
      QItemTile,
      QIcon
    },
    directives: {
      BackToTop
    }
  }
</script>


<style lang="stylus">

</style>
