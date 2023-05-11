<template>
  <header id="header_principal" v-if="!this.disableNav">
    <ComponenteNavbarPrincipal></ComponenteNavbarPrincipal>
  </header>
  <main class="view-main" :id="this.id">
      <RouterView/>
  </main>
</template>

<script>
import { RouterView } from 'vue-router'
import ComponenteNavbarPrincipal from '../components/ComponenteNavbarPrincipal.vue';
export default {
  name: "ViewMain",
  components: {
    ComponenteNavbarPrincipal,
  },

  props: {
    id: String,
    disableNav: Boolean,
  }
  
}
</script>

<style lang="scss">
@import "../assets/styles/views/ViewMain.scss";
</style>

