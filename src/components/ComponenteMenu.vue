<template>
  <div class="menu" :uid="this.$.uid">
    <ComponenteMenuItem v-for="(itemMenu, indiceMenu) in this.itens" :item="itemMenu" :indice="indiceMenu" />
  </div>
</template>

<script>
import ComponenteMenuItem from './ComponenteMenuItem.vue';
export default {
  name: 'ComponenteMenu',
  components: {
    ComponenteMenuItem
  },
  props: { itens: Array, reverse: Boolean },
  mounted() {
    this.$el.style.setProperty('--nav-direction', this.reverse ? 'column-reverse' : 'column');
  }
}
</script>
<style lang="scss">
@import '../assets/styles/components/ComponenteMenu.scss';
</style>