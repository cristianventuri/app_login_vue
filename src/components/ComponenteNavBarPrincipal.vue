<template>
  <nav id="navbar-principal" @mouseleave="this.mouseLeaveNavBar()" @mouseenter="this.expandirMenuGeral()">

    <div class="main">
      <RouterLink to="/dashboard" class="item-nav-bar main-item-nav-bar" title="Dashboard">
        <span class="icone-item-nav-bar">
          <i class="pi pi-chart-bar"></i>
        </span>
        <span class="label-item-nav-bar">Dashboard</span>
      </RouterLink>
      <RouterLink to="/gestao-geral" class="item-nav-bar main-item-nav-bar" title="Gestão de Conteúdo">
        <span class="icone-item-nav-bar">
          <i class="pi pi-wrench"></i>
        </span>
        <span class="label-item-nav-bar">Gestão</span>
      </RouterLink>
    </div>

    <div class="footer">
      <div class="item-nav-gestao-usuario">
        <div class="conteudo-item-gestao-usuario">
          <RouterLink to="/login" class="item-nav-bar footer-item-nav-bar log-out" title="Sair da Seção">
            <span class="icone-item-nav-bar">
              <i class="pi pi-power-off"></i>
            </span>
            <span class="label-item-nav-bar">Sair</span>
          </RouterLink>
          <RouterLink to="/usuario" class="item-nav-bar footer-item-nav-bar" title="Configurações do Usuário">
            <span class="icone-item-nav-bar">
              <i class="pi pi-user-edit"></i>
            </span>
            <span class="label-item-nav-bar">Preferências</span>
          </RouterLink>
        </div>

        <div class="item-nav-bar container-avatar-usuario" @click="this.expandirMenuUsuario()" :title="this.username">
          <span class="icone-item-nav-bar">
            <span class="avatar-usuario">
              <i class="pi pi-user"></i>
            </span>
          </span>
          <span class="label-item-nav-bar nome-usuario">{{ this.username }}</span>
        </div>
      </div>
    </div>

  </nav>
</template>


<script>
import { RouterLink } from 'vue-router';
import { useUserAuthentication } from '../stores/userAuthentication';

export default {
  name: 'ComponenteNavBarPrincipal',
  data() {
    return {
      username: ''
    }
  },

  methods: {
    expandirMenuGeral() {
      if ($(this.$el).is(":hover")) {
        $(this.$el).addClass('ativo');
      }
    },

    expandirMenuUsuario() {
      $(".item-nav-gestao-usuario").toggleClass('ativo');
    },

    mouseLeaveNavBar() {
      if (!$(this.$el).is(":hover")) {
        $(this.$el).removeClass('ativo');
        $('.ativo', this.$el).removeClass('ativo');
      }
    }
  },

  created() {
    const userAuthentication = useUserAuthentication();
    this.username = userAuthentication.getName;
  }
}
</script>

<style lang="scss">
@import "../assets/styles/components/ComponenteNavBarPrincipal.scss";
</style>