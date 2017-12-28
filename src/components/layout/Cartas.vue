<template>
  <div align="center">
    <q-card inline>
      <q-card-media>
        <img src="~statics/CT1.png">
      </q-card-media>
    </q-card>
    <q-card inline>
      <q-card-media>
        <img src="~statics/CT2.png">
      </q-card-media>
    </q-card>
    <q-card inline>
      <q-card-media>
        <img src="~statics/CT3.png">
      </q-card-media>
    </q-card>
    <q-card inline>
      <q-card-media>
        <img src="~statics/CT4.png">
      </q-card-media>
    </q-card>
    <q-card inline>
      <q-card-media>
        <img src="~statics/CT5.png">
      </q-card-media>
    </q-card>
  </div>

</template>

<script>
  import {
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
    }
  }
</script>


<style lang="stylus">

</style>
