<template>
  <ViewMain disableNav>

    <section class="autenticacao">
      <div class="conteudo-autenticacao">
        <div class="container-inicial">
          <span class="icone pi pi-users"></span>
        </div>
        <form class="container-formulario-login" @submit.prevent="this.submit()">
          <div class="campos-formulario">
            <InputText class="p-inputtext-sm" v-model="this.form.usuario" type="text" placeholder="Usuário ou E-mail"
              required />
            <Password class="p-inputtext-sm" v-model="this.form.senha" :feedback="false" toggleMask placeholder="Senha"
              required />
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
      form: {
        usuario: null,
        senha: null
      }
    }
  },

  methods: {
    submit() {
      const userAuthentication = useUserAuthentication();
      userAuthentication.logIn(1, 'cristian.venturi', 'Cristian', 'ABCDE');
      this.$router.replace('dashboard');
    },
  },

}
</script>

<style lang="scss">
@import "../assets/styles/views/ViewLogin.scss";
</style>