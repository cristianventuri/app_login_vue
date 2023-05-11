<template>
  <header id="header_principal" v-if="!this.disableNav">
    <ComponenteNavBarPrincipal></ComponenteNavBarPrincipal>
  </header>
  <main class="view-main" :id="this.id">
      <RouterView/>
  </main>
</template>

<script>
import { RouterView } from 'vue-router'
import ComponenteNavBarPrincipal from '../components/ComponenteNavBarPrincipal.vue';
export default {
  name: "ViewMain",
  components: {
    ComponenteNavBarPrincipal,
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

