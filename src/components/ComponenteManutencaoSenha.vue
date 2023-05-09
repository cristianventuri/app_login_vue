<template>
  <form class="componente-senha-usuario" @submit.prevent="this.submit()">
    <div class="campos-formulario">
      <FieldSenha label="Senha atual" class="campo-senha-atual" name="senha_atual" />
      <FieldSenha label="Nova senha" tituloFeedback="Nova senha" class="campo-nova-senha" feedback name="nova_senha" />
      <FieldSenha label="Confirmação de senha" tituloFeedback="Confirme a nova senha" class="campo-confirma-nova-senha" feedback name="confirma_nova_senha" />
    </div>

    <div class="acao-formulario">
      <Button severity="success" title="Confirmar" size="small" type="submit" >
        <span class="icone pi pi-sync"></span>
        <span class="icone-detail">Alterar</span>
      </Button>
    </div>

  </form>
</template>

<script>
import FieldSenha from '../fields/FieldSenha.vue';
import Button from 'primevue/button';
import { info, success, warn, error } from '@/services/ServiceToast';

export default {
  name: 'ComponenteManutencaoSenha',
  components: {
    FieldSenha,
    Button,
  },

  data(){
    return {

    }
  },

  methods: {
    submit(){
      success('Sucesso!', "Sua senha foi alterada com sucesso.")
    },
  }

}
</script>

<style lang="scss">
@import '../assets/styles/components/ComponenteManutencaoSenha.scss'
</style>
