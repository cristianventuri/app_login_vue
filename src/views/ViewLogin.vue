<template>
  <ViewMain disableNav>
    <section class="autenticacao">
      <div class="conteudo-autenticacao">

        <div class="container-mensagem">
          teste
        </div>

        <div class="container-formulario-login">
          <FieldSenha label="Senha atual" class="campo-senha-atual" name="senha_atual" />
        </div>

      </div>
    </section>
  </ViewMain>
</template>

<script>
import FieldSenha from '../fields/FieldSenha.vue';
import ViewMain from './ViewMain.vue';

export default {
  name: "ViewLogin",
  components: {
    ViewMain,
    FieldSenha
},

}
</script>

<style lang="scss">
@import "../assets/styles/views/ViewLogin.scss";
</style>