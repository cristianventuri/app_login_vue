<template>
  <form class="componente-senha-usuario">
    
    <div class="campos-formulario">
      <FieldSenha label="Senha atual" class="campo-senha-atual" name="senha_atual" />
      <FieldSenha label="Nova senha" tituloFeedback="Nova senha" class="campo-nova-senha" feedback name="nova_senha" />
      <FieldSenha label="Confirmação de senha" tituloFeedback="Confirme a nova senha" class="campo-confirma-nova-senha" feedback name="confirma_nova_senha" />
    </div>

    <div class="acao-formulario">
      <Button severity="success" title="Confirmar" size="small" @click="this.clickSalvaSenha">
        <span class="icone pi pi-sync"></span>
        <span class="icone-detail">Alterar</span>
      </Button>
    </div>

  </form>
</template>

<script>
import Password from 'primevue/password';
import Button from 'primevue/button';
import { info, success, warn, error } from '@/services/ServiceToast';
import FieldSenha from '../fields/FieldSenha.vue';

export default {
  name: 'ComponenteManutencaoSenha',
  components: {
    FieldSenha,
    Password,
    Button,
  },

  data(){
    return{
      
    }
  },

  methods: {
    clickSalvaSenha(){
      debugger;

      success('Sucesso!', "Sua senha foi alterada com sucesso.")
    },
  }

}
</script>

<style lang="scss">
@import '../assets/styles/components/ComponenteManutencaoSenha.scss'
</style>
