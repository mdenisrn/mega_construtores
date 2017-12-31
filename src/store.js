import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    conectado: false,
    aluno: '',
    empresa: ''
  },
  mutations: {
    CONECTAR (state) {
      state.conectado = true
    },
    DESCONECTAR (state) {
      state.conectado = false
    },
    SET_ALUNO (state, aluno) {
      state.aluno = aluno
    },
    SET_EMPRESA (state, empresa) {
      state.empresa = empresa
    }
  },
  actions: {
    conectar ({ commit }) {
      commit('CONECTAR')
    },
    desconectar ({ commit }) {
      commit('DESCONECTAR')
    },
    set_aluno ({ commit }, aluno) {
      commit('SET_ALUNO', aluno)
    },
    set_empresa ({ commit }, empresa) {
      commit('SET_EMPRESA', empresa)
    }
  },
  getters: {
    conectado: state => state.conectado,
    aluno: state => state.aluno,
    empresa: state => state.empresa
  }
})
