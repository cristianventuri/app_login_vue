<template>
  <RouterView />

  <section id="toasts-position">
    <ComponenteToast />
  </section>
</template>

<script>
import { RouterView } from 'vue-router'
import ComponenteToast from './components/ComponenteToast.vue';
import Toast from 'primevue/toast';

export default {
  name: "App",
  components: {
    ComponenteToast,
    Toast,
  }
}
</script>

<style lang="scss">
@import "./assets/styles/App.scss";
</style>