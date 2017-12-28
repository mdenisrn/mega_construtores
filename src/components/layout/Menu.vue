<template>
    <div slot="left">
      <!--
        Use <q-side-link> component
        instead of <q-item> for
        internal vue-router navigation
      -->

      <q-list no-border link inset-delimiter>
        <q-list-header>MENU PRINCIPAL</q-list-header>
        <q-side-link item to="/login" exact>
          <q-item @click="launch('http://quasar-framework.org')">
            <q-item-side icon="home" />
            <q-item-main label="Inicial" sublabel="Dados Iniciais" />
          </q-item>
        </q-side-link>
        <q-item @click="launch('http://forum.quasar-framework.org')">
          <q-item-side icon="photo_album" />
          <q-item-main label="Cartas" sublabel="Lista de Cartas" />
        </q-item>
        <q-item @click="launch('https://gitter.im/quasarframework/Lobby')">
          <q-item-side icon="shopping_basket" />
          <q-item-main label="Mercado" sublabel="Mercado Presente/Futuro" />
        </q-item>
        <q-item @click="launch('https://twitter.com/quasarframework')">
          <q-item-side icon="local_atm" />
          <q-item-main label="Caixa" sublabel="Livro Caixa" />
        </q-item>
        <q-item @click="launch('https://twitter.com/quasarframework')">
          <q-item-side icon="gavel" />
          <q-item-main label="Leilão" sublabel="Licitações de Projetos" />
        </q-item>
        <q-item @click="launch('https://twitter.com/quasarframework')">
          <q-item-side icon="build" />
          <q-item-main label="Projetos" sublabel="Lista de Projetos" />
        </q-item>
        <q-item>
          <q-item-side icon="exit_to_app" />
          <q-item-main label="Sair" sublabel="Sair do Aplicativo" />
        </q-item>
      </q-list>
    </div>

    <!--
      Replace following <div> with
      <router-view /> component
      if using subRoutes
    -->

</template>

<script>
import {
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QSideLink
} from 'quasar'

export default {
  components: {
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QSideLink
  }
}
</script>

<style lang="stylus">
</style>
