<template>
  <v-card class="pa-4 rounded-xl" elevation="6">
    <div class="text-center">
      <v-img height="150" width="150" src="/con-traje.png" class="mx-auto"></v-img>
      <div class="pt-4">
        <h3>José Alberto Gallegos del Carpio</h3>
        <p>Desarrollador Full Stack</p>
      </div>
    </div>

    <v-divider class="my-5"></v-divider>

    <div class="d-flex mb-3">
      <v-icon class="mr-2 align-self-start">mdi-phone-outline</v-icon>
      <div class="d-flex flex-column justify-content-end">
        <div class="font-weight-medium">Teléfono celular</div>
        <a href="tel:+529612491813" class="text-body-2 link">+52 961 249 1813</a>
      </div>
    </div>
    <div class="d-flex mb-3">
      <v-icon class="mr-2 align-self-start">mdi-email-outline</v-icon>
      <div class="d-flex flex-column justify-content-end">
        <div class="font-weight-medium">Correo electrónico</div>
        <a href="mailto:jose.gallegos.delcarpio@gmail.com" target="_blank" class="text-body-2 link"
          onclick="window.open(this.href,'_blank');return false;">jose.gallegos.delcarpio@gmail.com</a>
      </div>
    </div>
    <div class="d-flex mb-3">
      <v-icon class="mr-2 align-self-start">mdi-github</v-icon>
      <div class="d-flex flex-column justify-content-end">
        <div class="font-weight-medium">Github</div>
        <a href="https://github.com/jose-gallegos-dc" target="_blank" class="text-body-2 link">jose-gallegos-dc</a>
      </div>
    </div>
    <div class="d-flex mb-3">
      <v-icon class="mr-2 align-self-start">mdi-map-marker-outline</v-icon>
      <div class="d-flex flex-column justify-content-end">
        <div class="font-weight-medium">Dirección</div>
        <p class="text-body-2">Tuxtla gutiérrez, Chiapas</p>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Information",
};
</script>

<style>
.link {
  text-decoration: none;
  color: inherit;
}
</style>
