<template>
  <div id="view-gestao-dados-usuario">

    <Fieldset legend="Header">
      <template #legend>
        <div class="fieldset-legend-template">
          <span class="icone-legend pi pi-user "></span>
          <span class="titulo-legend">Dados do Usuário</span>
        </div>
      </template>
      <ComponenteManutencaoNomeUsuario />
    </Fieldset>

    <Fieldset legend="Header">
      <template #legend>
        <div class="fieldset-legend-template">
          <span class="icone-legend pi pi-lock"></span>
          <span class="titulo-legend">Alteração de Senha</span>
        </div>
      </template>
      <ComponenteManutencaoSenha />
    </Fieldset>

  </div>
</template>

<script>
import Fieldset from 'primevue/fieldset';
import ComponenteManutencaoNomeUsuario from '../components/ComponenteManutencaoNomeUsuario.vue';
import ComponenteManutencaoSenha from '../components/ComponenteManutencaoSenha.vue';

export default {
  name: 'ViewGestaoDadosUsuario',
  components: {
    ComponenteManutencaoNomeUsuario,
    ComponenteManutencaoSenha,
    Fieldset
  },
}
</script>

<style lang="scss"> @import '../assets/styles/views/ViewGestaoDadosUsuario.scss';
</style>