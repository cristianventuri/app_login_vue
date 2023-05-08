<template>
  <header id="header_principal">
    <ComponenteNavBarPrincipal></ComponenteNavBarPrincipal>
  </header>

  <main id="main_principal">
    <ComponenteMainPrincipal></ComponenteMainPrincipal>
  </main>

  <section id="toasts-position">
    <ComponenteToast/>
  </section>
</template>

<script>
import ComponenteMainPrincipal from './components/ComponenteMainPrincipal.vue';
import ComponenteNavBarPrincipal from './components/ComponenteNavBarPrincipal.vue';
import ComponenteToast from './components/ComponenteToast.vue';
import Toast from 'primevue/toast';

export default {
  name: "App",
  components: {
    ComponenteMainPrincipal,
    ComponenteNavBarPrincipal,
    ComponenteToast,
    Toast,
}
}
</script>

<style lang="scss">
@import "@/assets/styles/App.scss";
</style>