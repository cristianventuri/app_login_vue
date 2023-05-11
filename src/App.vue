<template>
  <ViewMain :disableNav="(!this.isAuth) || (this.isLogin)" />
  <section id="toasts-position">
    <ComponenteToast />
  </section>
</template>

<script>

import ComponenteToast from './components/ComponenteToast.vue';
import Toast from 'primevue/toast';
import { useUserAuthentication } from './stores/userAuthentication';
import ViewMain from './views/ViewMain.vue';

export default {
  name: "App",
  components: {
    ComponenteToast,
    Toast,
    ViewMain
  },

  data() {
    return {
      isAuth: false,
      isLogin: false
    }
  },

  watch: {
    $route(to, from) {
      /* Verifica se está logado, caso contrário direciona para o login */
      const userAuthentication = useUserAuthentication();
      this.isLogin = (to.path.indexOf('/login') > -1);
      this.isAuth = userAuthentication.validateAuthentication();
      if (this.isLogin) {
        userAuthentication.logOut();
      }
      if (!this.isAuth && !this.isLogin) {
        this.$router.replace('login');
      }
    }
  },
}
</script>

<style lang="scss">
@import "./assets/styles/App.scss";
</style>