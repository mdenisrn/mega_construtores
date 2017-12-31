<template>
  <q-list>
    <q-collapsible group="somegroup" icon="person" label="Dados Pessoais" opened>
      <div>
        <q-item>
          <q-item-side avatar="statics/mc-avatar.png" />
          <q-item-main>
            <q-item-tile label>{{aluno.nome}}</q-item-tile>
            <q-item-tile sublabel>{{aluno.matricula}}</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-main>
            <q-item-tile label>Disciplina</q-item-tile>
            <q-item-tile sublabel>{{aluno.disciplina}}</q-item-tile>
            <q-item-tile label>Login</q-item-tile>
            <q-item-tile sublabel>{{aluno.login}}</q-item-tile>
            <q-item-tile label>Função</q-item-tile>
            <q-item-tile sublabel>{{aluno.funcao}}</q-item-tile>
          </q-item-main>
        </q-item>
      </div>
    </q-collapsible>
    <q-collapsible group="somegroup" icon="business" label="Dados da Empresa">
      <div>
        <q-item>
          <q-item-side>
            <q-btn round :color='empresa.cor'></q-btn>
          </q-item-side>
          <q-item-main>
            <q-item-tile label>{{empresa.nome}}</q-item-tile>
            <q-item-tile sublabel>Código-{{empresa.codigo}}</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>MEMBROS</q-item>
          <q-item v-for="membro in empresa.membros" :key="n" separator>
            <q-item-side avatar="statics/mc-avatar.png" />
            <q-item-main>
              <q-item-tile label>{{membro.nome}}</q-item-tile>
              <q-item-tile sublabel>{{membro.matricula}}</q-item-tile>
              <q-item-tile sublabel>{{membro.funcao}}</q-item-tile>
            </q-item-main>
          </q-item>
      </div>
    </q-collapsible>
  </q-list>
</template>

<script>
  import {
    QList,
    QCollapsible,
    QTabs,
    QTab,
    QTabPane,
    QCard,
    QCardTitle,
    QItem,
    QItemSide,
    QItemMain,
    QItemTile,
    QBtn
  } from 'quasar'

  export default {
    name: 'inicial',
    data () {
      return {
        dados: ''
      }
    },
    components: {
      QList,
      QCollapsible,
      QTabs,
      QTab,
      QTabPane,
      QCard,
      QCardTitle,
      QItem,
      QItemSide,
      QItemMain,
      QItemTile,
      QBtn
    },
    methods: {
    },
    computed: {
      aluno () {
        return this.$store.getters.aluno
      },
      empresa () {
        return this.$store.getters.empresa
      }

    }
  }
</script>

<style lang="stylus">
</style>
