<template>
  <div class="input-nome-usuario">
    <label for="nome_usuario" class="ml-2">Nome de Usuário:</label>
    <div class="p-inputgroup flex-1">
      <InputText v-model="nomeUsuario" type="text" class="p-inputtext-sm" placeholder="Nome" inputId="nome_usuario" :disabled="this.isDisabled" />
      <Button v-if="!this.isVisualizacao" severity="danger" title="Cancelar" @click="this.clickCancelarAlteracao()">
        <font-awesome-icon :icon="['fas', 'xmark']" />
      </Button>
      <Button v-if="!this.somenteVisualizacao" :severity="this.btnSeverity" :title="this.btnTitle" @click="this.clickAlterarNome()">
        <font-awesome-icon :icon="this.btnIcon" />
      </Button>
    </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { info, success, warn, error } from '@/services/ServiceToast';

export default {
  name: 'ComponenteManutencaoNomeUsuario',
  components: {
    InputText,
    Button,
  },

  props: {
    modoInicialAlteracao: Boolean,
    modoInicialVisualizacao: Boolean,
    somenteVisualizacao: Boolean,
  },

  data() {
    return {
      nomeUsuario: 'Cristian Venturi',
      nomeUsuarioInicial: null,
      isVisualizacao: true,
    }
  },

  computed: {

    isDisabled() {
      return this.somenteVisualizacao || this.isVisualizacao;
    },

    isModoVisualizacao() {
      var isVisualizacao = true;
      if (this.modoInicialVisualizacao) {
        isVisualizacao = this.modoInicialVisualizacao
      } else if (this.modoInicialAlteracao) {
        isVisualizacao = !this.modoInicialAlteracao;
      }

      this.isVisualizacao = isVisualizacao;
      return this.isVisualizacao;
    },

    btnSeverity() {
      return this.isVisualizacao ? 'warning' : 'success';
    },

    btnIcon() {
      return this.isVisualizacao ? ['fas', 'pencil'] : ['fas', 'check'];
    },

    btnTitle() {
      return this.isVisualizacao ? 'Alterar' : 'Salvar';
    }
  },

  methods: {
    clickAlterarNome() {
      this.isVisualizacao = !this.isVisualizacao;
      if (!this.isVisualizacao) {
        this.nomeUsuarioInicial = this.nomeUsuario;
        warn('Atenção:', 'O campo "Nome de Usuário" está um modo de alteração.');
      } else if (this.nomeUsuarioInicial !== this.nomeUsuario) {
        // Salvar;
        success('Sucesso!', 'Seu novo "Nome de Usuário" foi salvo.');
      } else {
        warn('Atenção:', 'O campo "Nome de Usuário" não possui alterações, por isso não será salvo!');
      }
    },

    clickCancelarAlteracao() {
      this.isVisualizacao = !this.isVisualizacao;
      this.nomeUsuario = this.nomeUsuarioInicial;
      error('Importante:', 'A alteração do campo "Nome de Usuário" foi desfeita.')
    },

    show() {
      info();
    }
  }

}
</script>
