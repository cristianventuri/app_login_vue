<template>
  <div :class="this.getClassCampo">
    <label v-if="this.getLabelCampo" :for="`senha_usuario_${this.$.uid}`" class="ml-2"> {{ this.getLabelCampo }}</label>
    <Password 
      toggleMask 
      v-model="this.senhaUsuario" 
      :feedback="this.feedback" 
      :inputId="`senha_usuario_${this.$.uid}`"
      :promptLabel="this.getTituloFeedback" 
      :name="this.name"
      weakLabel="Fraca" 
      mediumLabel="Média" 
      strongLabel="Excelente"
      class="input-senha p-inputtext-sm"
    >
      <template #footer style="font-size: .7rem !important;">
        <Divider />
        <p class="title-feedback" style="font-size: .8rem; font-weight: 500;">Sugestão</p>
        <ul class="list-feedback" style="font-size: .75rem; list-style: none; padding: 0;">
          <li>Pelo menos uma letra minúscula</li>
          <li>Pelo menos uma letra maiúscula</li>
          <li>Pelo menos um número</li>
          <li>Mínimo de 8 caracteres</li>
        </ul>
      </template>
    </Password>
  </div>
</template>

<script>
import Password from 'primevue/password';
import Divider from 'primevue/divider';
export default {
  name: 'FieldSenha',
  components: {
    Password, 
    Divider,
  },

  props: {
    label: String,
    feedback: Boolean,
    tituloFeedback: String,
    class: String,
    name: String,
  },

  data() {
    return {
      senhaUsuario: null,
    }
  },

  computed: {
    getClassCampo(){
      return  `field-senha ${this.class ?? ''}`; 
    },

    getTituloFeedback() {
      return this.tituloFeedback ?? 'Defina sua senha';
    },

    getLabelCampo(){
      return this.label ? `${this.label}:` : false;
    },
  },

}
</script>

<style lang="scss">
@import '../assets/styles/fields/FieldSenha.scss'
</style>
