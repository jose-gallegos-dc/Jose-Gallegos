<template>
  <v-card class="pa-4 rounded-xl" elevation="6">
    <div class="text-center">
      <v-img
        height="150"
        width="150"
        src="/con-traje.png"
        class="mx-auto"
      ></v-img>
      <div class="pt-4">
        <h3>José Alberto Gallegos del Carpio</h3>
        <p>Desarrollador Full Stack Junior</p>
      </div>
    </div>

    <v-divider class="my-5"></v-divider>

    <div class="d-flex mb-3">
      <v-icon class="mr-2 align-self-start">mdi-phone-outline</v-icon>
      <div class="d-flex flex-column justify-content-end">
        <div class="font-weight-medium">Teléfono celular</div>
        <p class="text-body-2">+52 961 249 1813</p>
      </div>
    </div>
    <div class="d-flex mb-3">
      <v-icon class="mr-2 align-self-start">mdi-email-outline</v-icon>
      <div class="d-flex flex-column justify-content-end">
        <div class="font-weight-medium">Correo electrónico</div>
        <p class="text-body-2">jose.gallegos.delcarpio@gmail.com</p>
      </div>
    </div>
    <div class="d-flex mb-3">
      <v-icon class="mr-2 align-self-start">mdi-github</v-icon>
      <div class="d-flex flex-column justify-content-end">
        <div class="font-weight-medium">Github</div>
        <p class="text-body-2">https://github.com/jose-gallegos-dc</p>
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
