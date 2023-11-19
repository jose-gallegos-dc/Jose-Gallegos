<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="12" md="6">
        <v-card class="mx-auto" min-width="344" elevation="10">
          <v-img :src="item.image" cover alt="project-image"></v-img>

          <v-card-item>
            <v-card-title class="text-indigo">
              {{ item.name }}
            </v-card-title>

            <v-card-subtitle class="d-flex flex-row-reverse">
              <v-icon v-if="item.repository" class="mx-2" icon="mdi-github"
                @click="openRepository(item.repository)"></v-icon>

              <v-icon v-if="item.web" icon="mdi-web" @click="openRepository(item.web)"></v-icon>
            </v-card-subtitle>
          </v-card-item>

          <v-divider></v-divider>

          <v-card-text class="text-justify text-medium-emphasis">
            {{ item.description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Project",
  data() {
    return {
      show: false,
      items: [
        {
          name: "Eco y caos",
          repository: null,
          web: "https://ecoycaos.com.mx/",
          image: "/ecoycaos.png",
          description:
            "Solución integral para una tienda en línea especializada en ropa deportiva, que comprende la experiencia del cliente como la gestión administrativa. Desarrollada con Laravel 10, jQuery, Bootstrap 5 y MySQL, con una interfaz moderna y dinámica para la adquisición de artículos deportivos. Integrando pagos seguros con la plataforma de Mercado Pago. Una aplicación sólida que garantiza una atractiva experiencia de usuario y facilita un flujo de trabajo eficaz para la administración de la tienda.",
        },
        {
          name: "Textil Quality Moda",
          repository: null,
          web: "https://www.textilqualitymoda.com.mx/",
          image: "/textilqualitymoda.png",
          description:
            "Plataforma integral para una tienda de ropa femenina que engloba tanto la experiencia del cliente como la gestión administrativa. Desarrollada con Laravel 8, JavaScript, Bootstrap 4 y MySQL, ofrece una experiencia completa de compra. Además, cuenta con integraciones para envíos ágiles y seguros de envíos perros, y pagos mediante la plataforma de Mercado Pago. Una solución robusta que garantiza una experiencia fluida y segura tanto para los usuarios como para la gestión interna.",
        },
        {
          name: "Aryy API",
          repository: "https://github.com/jose-gallegos-dc/aryy-api",
          web: null,
          image: "/aryy.png",
          description:
            "API destinada a la gestión eficiente de citas médicas y expedientes de pacientes. Desarrollada con Laravel 9, JSON, MySQL y alojada en AWS, proporcionando una infraestructura robusta. Integrando el consumo de API con Vue 2 y Vuetify 2, con una interfaz interactiva y moderna para facilitar la visualización y gestión de datos médicos. Agilizando los procesos médicos y mejora la experiencia tanto para profesionales de la salud como para los pacientes.",
        },
      ]
    }
  },
  methods: {
    openRepository(url) {
      window.open(url, '_blank');
    },
  },
}
</script>
