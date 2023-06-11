<template>
  <form class="componente-senha-usuario" @submit.prevent="this.submit()">
    <div class="input-nome-usuario">
      <label for="nome_usuario" class="ml-2">Nome de Usuário:</label>
      <div class="p-inputgroup flex-1">
        <InputText v-model="nomeUsuario" type="text" class="p-inputtext-sm" placeholder="Nome" inputId="nome_usuario" :disabled="this.isDisabled" />
        <Button v-if="this.isVisualizacao" severity="warning" title="Alterar" @click="this.clickAlterar()">
          <font-awesome-icon :icon="['fas', 'pencil']" />
        </Button>
        <Button v-if="!this.isVisualizacao" severity="danger" title="Cancelar" @click="this.clickCancelar()">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </Button>
        <Button v-if="!this.isVisualizacao" severity="success" title="Salvar" type="submit">
          <font-awesome-icon :icon="['fas', 'check']" />
        </Button>
      </div>
    </div>
  </form>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { info, success, warn, error } from '@/services/ServiceToast';
import { useUserAuthentication } from '../stores/userAuthentication';

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
      nomeUsuario: this.getUsername(),
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
  },

  methods: {
    getUsername() {
      const userAuthentication = useUserAuthentication();
      return userAuthentication.getName;
    },

    submit(oFormulario) {
      this.isVisualizacao = !this.isVisualizacao;
      if (this.nomeUsuarioInicial !== this.nomeUsuario) {
        const userAuthentication = useUserAuthentication();
        userAuthentication.updateName(this.nomeUsuario);
        success('Sucesso!', 'Seu novo "Nome de Usuário" foi salvo.');
      } else {
        warn('Atenção:', 'O campo "Nome de Usuário" não possui alterações, por isso não será salvo!');
      }
    },

    clickAlterar() {
      this.isVisualizacao = !this.isVisualizacao;
      this.nomeUsuarioInicial = this.nomeUsuario;
      warn('Atenção:', 'O campo "Nome de Usuário" está um modo de alteração.')
    },

    clickCancelar() {
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
