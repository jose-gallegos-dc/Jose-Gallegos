<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img contain height="300" src="@/assets/logo.svg" />

      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">Vuetify</h1>

      <div class="py-14" />

      <!-- <h1 v-if="breakpoint.smAndDown">Vue is awesome!</h1> -->

    </v-responsive>
  </v-container>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    console.log(this.$vuetify.display.sm)
  }
}
</script>
