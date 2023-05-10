<template>
  <ViewMain disableNav>

    <section class="autenticacao">
      <div class="conteudo-autenticacao">
        <div class="container-inicial">
          <span class="icone pi pi-users"></span>
        </div>
        <div class="container-mensagem">
          <div class="mensagem success" v-if="this.mensagem.success">
            <span class="icone pi pi-check-circle"></span>
            <span class="texto-mensagem">{{ this.mensagem.success }}</span>
          </div>
          <div class="mensagem load" v-if="this.mensagem.load">
            <span class="icone pi pi-spin pi-spinner"></span>
            <span class="texto-mensagem">{{ this.mensagem.load }}</span>
          </div>
          <div class="mensagem error" v-if="this.mensagem.error">
            <span class="icone pi pi-times-circle"></span>
            <span class="texto-mensagem">{{ this.mensagem.error }}</span>
          </div>
          <div class="mensagem warn" v-if="this.mensagem.warn">
            <span class="icone pi pi-exclamation-circle"></span>
            <span class="texto-mensagem">{{ this.mensagem.warn }}</span>
          </div>
        </div>
        <form class="container-formulario-login" @submit.prevent="this.submit()">
          <div class="campos-formulario">
            <InputText id="username" class="p-inputtext-sm" v-model="this.form.usuario" type="text" placeholder="Usuário ou E-mail" @focus="this.onFocusInput($event)"/>
            <Password id="password" class="p-inputtext-sm" v-model="this.form.senha" :feedback="false" toggleMask placeholder="Senha" @focus="this.onFocusInput($event)"/>
          </div>
          <div class="acao-formulario">
            <Button severity="primary" title="Confirmar" size="small" type="submit">
              <span class="icone-detail">Acessar</span>
            </Button>
          </div>
        </form>
      </div>
    </section>
  </ViewMain>
</template>

<script>
import ViewMain from './ViewMain.vue';
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { useUserAuthentication } from '../stores/userAuthentication';

export default {
  name: "ViewLogin",
  components: {
    ViewMain,
    InputText,
    Password,
    Button,
  },

  data() {
    return {
      mensagem: {
        success: false,
        error: false,
        load: false,
        warn: false,
      },
      form: {
        usuario: '',
        senha: ''
      },
    }
  },

  methods: {
    submit() {
      var usuario = this.form.usuario ? this.form.usuario.trimStart() : '';
      var senha = this.form.senha ? this.form.senha.trimStart() : '';
      var componenteUser = $("#username");
      var componentePassword = $("#password");

      if (usuario === '' && senha === '') {
        this.addClassInvalid(componenteUser);
        this.addClassInvalid(componentePassword);
        this.clearMessages();
        this.mensagem.error = 'Informe o nome de usuário e senha para prosseguir';
      } else if (usuario === '') {
        this.addClassInvalid(componenteUser);
        this.clearMessages();
        this.mensagem.error = 'Informe o nome de usuário para prosseguir';
      } else if (senha === '') {
        this.addClassInvalid(componentePassword);
        this.clearMessages();
        this.mensagem.error = 'Informe sua senha para prosseguir';
      } else {
        this.clearMessages();
        this.mensagem.load = "Validando credenciais...";
        this.autenticaUsuario()
      }
    },

    onFocusInput(event){
      this.removeClassInvalid(event.currentTarget);
    },

    addClassInvalid(element){
      $(element).addClass("p-invalid");
    },
    
    removeClassInvalid(element){
      $(element).removeClass("p-invalid");
    },

    autenticaUsuario() {
      const userAuthentication = useUserAuthentication();
      userAuthentication.logIn(1, 'cristian.venturi', 'Cristian', 'ABCDE');
      setTimeout(() => { this.$router.replace('/'); }, 1200);
    },

    clearMessages() {
      this.mensagem.success = false;
      this.mensagem.error = false;
      this.mensagem.load = false;
      this.mensagem.warn = false;
    }
  },

}
</script>

<style lang="scss">
@import "../assets/styles/views/ViewLogin.scss";
</style>