<template>
  <mc-toolbar>  </mc-toolbar>
  <router-view>
    <form @submit.prevent="submit">
      <div align="center">
        <img src="~statics/mc-logo.png" width="40%">
      </div>
      <hr />
      <div>
        <q-field icon="school"
                 label="Disciplina"
                 helper="Selecione a disciplina">
          <q-select v-model="expenses.disciplina"
                    :options="[
          {label: 'Resistência dos Materiais', value: 'CAM0233'},
          {label: 'Mecânica das Estruturas', value: 'CAM0761'},
          {label: 'Mecânica das Estruturas II', value: 'CAM0771'}
        ]" />
        </q-field>
        <q-field icon="account_box"
                 helper="Insira seu nome de usuário.">
          <q-input type="text" v-model="expenses.login" float-label="Login" />
        </q-field>
        <q-field icon="lock"
                 helper="Insira sua senha.">
          <q-input type="password" v-model="expenses.senha" float-label="Senha" />
        </q-field>
        <q-btn color="primary" class="full-width" icon="send" glossy>LOGAR</q-btn>
      </div>
    </form>
    </router-view>>
</template>

<script>
  import {
    QField,
    QSelect,
    QInput,
    QBtn,
    uid
  } from 'quasar'

  import McToolbar from './layout/Toolbar.vue'

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
      QField,
      QSelect,
      QInput,
      QBtn,
      McToolbar,
      McMenu
    },
    methods: {
      submit () {
        const clone = JSON.parse(JSON.stringify(this.expenses))
        clone.id = uid()
        this.$store.commit('ADD_EXPENSE', clone)
        this.reset()
      },
      reset () {
        this.expenses.disciplina = ''
        this.expenses.login = ''
        this.expenses.senha = ''
      }
    }
  }
</script>


<style lang="stylus">

</style>
