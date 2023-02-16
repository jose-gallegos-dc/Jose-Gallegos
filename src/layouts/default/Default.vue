<template>
  <v-app>
    <v-app-bar color="indigo-darken-2" density="compact">
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          v-if="breakpoint.smAndDown"
        ></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>José Gallegos</v-app-bar-title>

      <template v-slot:append v-if="breakpoint.mdAndUp">
        <v-toolbar color="transparent" v-for="(item, i) in items" :key="i">
          <v-btn :to="item.to">
            <v-icon left class="pr-2">{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-toolbar>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item
          active-color="indigo-darken-2"
          v-for="(item, j) in items"
          :key="j"
          :to="item.to"
        >
          <template v-slot:prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title class="text-uppercase font-weight-medium">{{
            item.title
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      breakpoint: "",
      items: [
        {
          to: "/",
          icon: "mdi-home",
          title: "Inicio",
        },
        {
          icon: "mdi-account",
          title: "Acerca de mí",
          to: "/about-me",
        },
        {
          icon: "mdi-xml",
          title: "Mis proyectos",
          to: "/projects",
        },
      ],
    };
  },
  mounted() {
    this.breakpoint = this.$vuetify.display;
  },
};
</script>