<template>
  <header id="header_principal" v-if="!this.disableNav">
    <ComponenteNavBarPrincipal></ComponenteNavBarPrincipal>
  </header>
  <main class="view-main" :id="this.id">
    <slot></slot>
  </main>
</template>

<script>
import { useUserAuthentication } from '../stores/userAuthentication';
import ComponenteNavBarPrincipal from '../components/ComponenteNavBarPrincipal.vue';
export default {
  name: "ViewMain",
  components: {
    ComponenteNavBarPrincipal,
  },

  props: {
    id: String,
    disableNav: Boolean,
  },

  created() {
    const userAuthentication = useUserAuthentication();
    var isAuth = userAuthentication.validateAuthentication();
    if (!isAuth) {
      this.$router.replace('login');
    }
  }

}
</script>

<style lang="scss">
@import "../assets/styles/views/ViewMain.scss";
</style>

