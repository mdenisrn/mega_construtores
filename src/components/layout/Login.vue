<template>
  <form>
    <div align="center">
      <img src="~statics/mc-logo.png" width="50%">
    </div>
    <hr />
    <div>
      <q-field icon="school"
               label="Disciplina"
               helper="Selecione a disciplina">
        <q-select v-model="aluno.disciplina"
                  :options="[
          {label: 'Resistência dos Materiais', value: 'CAM0233'},
          {label: 'Mecânica das Estruturas', value: 'CAM0761'},
          {label: 'Mecânica das Estruturas II', value: 'CAM0776'}
        ]" />
      </q-field>
      <q-field icon="account_box"
               helper="Insira seu nome de usuário.">
        <q-input type="text" v-model="aluno.login" float-label="Login" />
      </q-field>
      <q-field icon="lock"
               helper="Insira sua senha.">
        <q-input type="password" v-model="aluno.senha" float-label="Senha" />
      </q-field>
      <q-btn color="primary" class="full-width" icon="send" glossy @click="click_bto_logar()">LOGAR</q-btn>
    </div>
    <div>{{resposta}}</div>
    <div>{{conectado}}</div>
    <div>{{aluno}}</div>
  </form>
</template>

<script>
  import {
    QField,
    QSelect,
    QInput,
    QBtn
  } from 'quasar'

  export default {
    name: 'login',
    components: {
      QField,
      QSelect,
      QInput,
      QBtn
    },
    data () {
      return {
        aluno: {
          matricula: '',
          nome: '',
          funcao: '',
          disciplina: '',
          login: '',
          senha: ''
        },
        empresa: {
          codigo: '',
          nome: '',
          cor: '',
          membros: []
        },
        resposta: ''
      }
    },
    methods: {
      click_bto_logar () {
        let login = {
          disciplina: this.aluno.disciplina,
          login: this.aluno.login,
          senha: this.aluno.senha
        }
        this.$http.post('http://megaconstrutores.top/mc_content/login.php', login, { emulateJSON: true }).then(result => {
          this.resposta = result.data.split(',')
          this.aluno.matricula = this.resposta[1]
          this.aluno.nome = this.resposta[2]
          this.aluno.funcao = this.resposta[4]
          this.empresa.codigo = this.resposta[3]
          this.empresa.nome = this.resposta[5]
          switch (this.resposta[6]) {
            case 'PRETO':
              this.empresa.cor = 'dark'
              break
            case 'BRANCO':
              this.empresa.cor = 'white'
              break
            case 'AZUL':
              this.empresa.cor = 'blue'
              break
            case 'VERMELHO':
              this.empresa.cor = 'red'
              break
            case 'VERDE':
              this.empresa.cor = 'green'
              break
            case 'AMARELO':
              this.empresa.cor = 'yellow'
              break
            case 'LARANJA':
              this.empresa.cor = 'orange'
              break
            case 'ROSA':
              this.empresa.cor = 'pink'
              break
            case 'MARROM':
              this.empresa.cor = 'brown'
              break
            default:
              this.empresa.cor = 'white'
          }
          for (var i = 0; i < this.resposta[7]; i++) {
            let membro = {
              matricula: this.resposta[8 + (3 * i)],
              nome: this.resposta[8 + (3 * i + 1)],
              funcao: this.resposta[8 + (3 * i + 2)]

            }
            this.empresa.membros[i] = membro
          }
          this.conectar()
          // var shajs = require('sha.js')
          // console.log(shajs('sha256').update(this.aluno.senha).digest('hex'))
          // => 73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049
          // this.$router.push('/inicial')
        }, error => {
          console.error(error)
        })
      },
      reset () {
        this.aluno.disciplina = ''
        this.aluno.login = ''
        this.aluno.senha = ''
      },
      conectar () {
        if (this.resposta[this.resposta.length - 1] === 'login_ok') {
          this.$store.dispatch('conectar')
          this.set_aluno(this.aluno)
          this.set_empresa(this.empresa)
        }
      },
      set_aluno (aluno) {
        this.$store.dispatch('set_aluno', aluno)
      },
      set_empresa (empresa) {
        this.$store.dispatch('set_empresa', empresa)
      }
    },
    computed: {
      conectado () {
        return this.$store.getters.conectado
      }
    }
  }
</script>

<style lang="stylus">
</style>
