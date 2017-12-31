<template>
  <q-layout ref="layout"
            view="lHh Lpr fff"
            :left-class="{'bg-grey-2': true}">
    <q-toolbar slot="header" class="glossy">
      <q-btn flat
             @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>
        Mega Construtores
        <div slot="subtitle">Versão Alfa</div>
      </q-toolbar-title>
    </q-toolbar>
    <div slot="left">
      <!--
        Use <q-side-link> component
        instead of <q-item> for
        internal vue-router navigation
      -->
      <q-list no-border link inset-delimiter>
        <q-list-header>MENU PRINCIPAL</q-list-header>
        <q-side-link item to="/login" exact>
          <q-item>
            <q-item-side icon="account_circle" />
            <q-item-main label="Login" sublabel="Conectar a Conta" />
          </q-item>
        </q-side-link>
        <q-side-link item to="/inicial" exact>
          <q-item>
            <q-item-side icon="home" />
            <q-item-main label="Inicial" sublabel="Dados Iniciais" />
          </q-item>
        </q-side-link>
        <q-side-link item to="/cartas" exact>
          <q-item>
            <q-item-side icon="photo_album" />
            <q-item-main label="Cartas" sublabel="Lista de Cartas" />
          </q-item>
        </q-side-link>
        <q-side-link item to="/mercado" exact>
          <q-item>
            <q-item-side icon="shopping_basket" />
            <q-item-main label="Mercado" sublabel="Mercado Presente/Futuro" />
          </q-item>
        </q-side-link>
        <q-item>
          <q-item-side icon="local_atm" />
          <q-item-main label="Caixa" sublabel="Livro Caixa" />
        </q-item>
        <q-item>
          <q-item-side icon="gavel" />
          <q-item-main label="Leilão" sublabel="Licitações de Projetos" />
        </q-item>
        <q-item>
          <q-item-side icon="build" />
          <q-item-main label="Projetos" sublabel="Lista de Projetos" />
        </q-item>
        <q-item>
          <q-item-side icon="exit_to_app" />
          <q-item-main label="Sair" sublabel="Sair do Aplicativo" />
        </q-item>
      </q-list>
    </div>
    <div>
      <router-view />
    </div>
  </q-layout>
</template>

<script>
  import {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QSideLink
  } from 'quasar'

  export default {
    components: {
      QLayout,
      QToolbar,
      QToolbarTitle,
      QBtn,
      QIcon,
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
