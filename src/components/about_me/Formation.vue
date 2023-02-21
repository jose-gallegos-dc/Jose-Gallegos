<template>
  <v-card class="pa-4 rounded-xl" elevation="6">
    <h3 class="pb-2">Formación educativa</h3>

    <div class="d-flex pb-2">
      <v-icon class="mr-2 align-self-start">mdi-school-outline</v-icon>
      <div class="d-flex flex-column justify-content-end">
        <div class="font-weight-medium">
          Ingeniería en Sistemas Computacionales
        </div>
        <p>IESCH (2016 al 2019)</p>
      </div>
    </div>

    <v-list>
      <v-list-group value="Technologies" active-color="indigo-darken-2">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-head-cog-outline"
            class="font-weight-medium"
          >
          Tecnologías
          </v-list-item>
        </template>

        <v-list-group value="Backend" active-color="indigo-darken-2">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Backend"></v-list-item>
          </template>
          <v-list-item
            v-for="([title, icon], i) in backend"
            :key="i"
            class="justify-start"
          >
            <v-icon class="mr-2">{{ icon }}</v-icon>
            {{ title }}
          </v-list-item>
        </v-list-group>

        <v-list-group value="Frontend" active-color="indigo-darken-2">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Frontend"></v-list-item>
          </template>
          <v-list-item
            v-for="([title, icon], j) in frontend"
            :key="j"
            class="justify-start"
          >
            <v-icon class="mr-2">{{ icon }}</v-icon>
            {{ title }}
          </v-list-item>
        </v-list-group>

        <v-list-group value="Others" active-color="indigo-darken-2">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Otras"></v-list-item>
          </template>
          <v-list-item
            v-for="([title, icon], k) in others"
            :key="k"
            class="justify-start"
          >
            <v-icon class="mr-2">{{ icon }}</v-icon>
            {{ title }}
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "Formation",
  data() {
    return {
      backend: [
        ["PHP", "mdi-language-php"],
        ["Laravel", "mdi-laravel"],
        ["MySQL", "mdi-dolphin"],
        ["PostgreSQL", "mdi-elephant"],
        ["NGINX", "mdi-nativescript"],
      ],
      frontend: [
        ["HTML5", "mdi-language-html5"],
        ["CSS3", "mdi-language-css3"],
        ["JavaScript", "mdi-language-javascript"],
        ["JSON", "mdi-code-json"],
        ["VueJs", "mdi-vuejs"],
        ["Vuetify", "mdi-vuetify"],
        ["Tailwind", "mdi-tailwind"],
        ["Bootstrap", "mdi-bootstrap"],
      ],
      others: [
        ["Git", "mdi-git"],
        ["Github", "mdi-github"],
        ["Linux", "mdi-linux"],
        ["Windows", "mdi-microsoft-windows"],
        ["Fedora", "mdi-fedora"],
      ],
    };
  },
};
</script>
