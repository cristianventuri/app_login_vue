<template>
  <header id="header_principal">
    <ComponenteNavBarPrincipal></ComponenteNavBarPrincipal>
  </header>
  <main class="view-main" :id="this.id">
    <slot></slot>
  </main>
</template>

<script>
import ComponenteNavBarPrincipal from '../components/ComponenteNavBarPrincipal.vue';
export default {
  name: "ViewMain",
  components: {
    ComponenteNavBarPrincipal,
  },

  props: {
    id: String,
  }
}
</script>

<style lang="scss">
main.view-main {
  padding: 2rem;
  flex: 1;
  background: #F2F2F7;
}
</style>

