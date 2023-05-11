<template>
  <div :class="`item-menu ${this.item.class ?? ''}`" :data-indice="this.getIndice">
    <RouterLink v-if="this.item.to" class="conteudo-item-menu" :to="this.item.to" :title="this.item.title" @click.prevent="this.expanded">
      <span class="icone-item-menu">
        <font-awesome-icon :icon="this.item.icone" />
      </span>
      <span class="texto-item-menu">
        <p class="texto">{{ this.item.label }}</p>
      </span>
    </RouterLink>
    
    <div v-else class="conteudo-item-menu" :title="this.item.title" @click.prevent="this.expanded">
      <span class="icone-item-menu">
        <font-awesome-icon :icon="this.item.icone" />
      </span>
      <span class="texto-item-menu">
        <p class="texto">{{ this.item.label }}</p>
      </span>
    </div>

    <div v-if="!this.item.to && this.item.itens" class="conteudo-item-submenu">
      <ComponenteMenuItem v-if="this.item.itens" v-for="(itemSubMenu, indiceMenu) in this.item.itens" :item="itemSubMenu" :indice="indiceMenu" :indiceStart="this.getIndice" />
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: "ComponenteMenuItem",
  components: { RouterLink },
  props: {
    item: Object,
    indice: Number,
    indiceStart: String,
  },
  computed: {
    getIndice() {
      return this.indiceStart ? `${this.indiceStart}_${this.indice}` : `${this.indice}`;
    }
  },
  methods: {
    expanded() {
      $(this.$el).toggleClass('ativo');
    },
  }
}
</script>
<style lang="scss">
@import '../assets/styles/components/ComponenteMenuItem.scss';
</style>