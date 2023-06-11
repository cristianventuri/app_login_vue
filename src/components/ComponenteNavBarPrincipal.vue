<template>
  <nav id="navbar-principal" @mouseleave="this.leaveNav()">
    <ComponenteMenu :itens="this.itens" class="menu-superior" />
    <ComponenteMenu :itens="this.itemUser" class="menu-inferior" reverse />
  </nav>
</template>

<script>
import { useUserAuthentication } from '../stores/userAuthentication';
import ComponenteMenu from './ComponenteMenu.vue';

export default {
  name: "ComponenteNavBarPrincipal",
  components: { ComponenteMenu },
  data() {
    return {
      itens: [
        { label: 'Dashboard', title: 'Dashboard', icone: ['fas', 'chart-column'], class: "item-menu-dashboard", to: '/dashboard' },
        {
          label: 'Gestão', title: 'Gestão de Conteúdo', icone: ['fas', 'screwdriver-wrench'], class: "item-menu-gestao", itens: [
            { label: 'Geral', title: 'Gestal Geral', icone: ['fas', 'wrench'], to: '/gestao-geral' },
            { label: 'Linhas', title: 'Linha de Produtos', icone: ['fas', 'diagram-project'], to: '/gestao-linha-produto' },
            { label: 'Produtos', title: 'Produtos por Linha', icone: ['fas', 'bacon'], to: '/gestao-produto' },
          ]
        },
        { label: "Log's", title: "Log's de manutenção", icone: ['fas', 'cube'], to: '/log-manutencao' },
      ],
      itemUser: [
        {
          label: this.username(), title: this.username(), icone: ['fas', 'user'], class: "item-menu-usuario", itens: [
            { label: 'Sair', title: 'Sair da seção', icone: ['fas', 'power-off'], class: "item-menu-logoff", to: '/login' },
            { label: 'Preferências', title: 'Preferências do Usuário', icone: ['fas', 'user-pen'], class: "item-menu-preferencia-usuario", to: '/preferencia-usuario' },
          ]
        },
      ]
    };
  },
  computed: {
  },
  methods: {
    username() {
      const userAuthentication = useUserAuthentication();
      return userAuthentication.getName;
    },
    leaveNav() {
      // if (!$(this.$el).is(":hover")) {
      //   $(this.$el).removeClass("ativo");
      //   $(".ativo", this.$el).removeClass("ativo");
      // }
    }
  },
}
</script>

<style lang="scss">
@import "../assets/styles/components/ComponenteNavbarPrincipal.scss";
</style>