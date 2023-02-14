<template>

  <v-app>
    <v-app-bar color="primary" density="compact">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="breakpoint.smAndDown"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>Photos</v-app-bar-title>

      <template v-slot:append>
        <v-toolbar density="compact" color="transparent" v-for="(item, i) in items" :key="i">
          <v-btn :to="item.to">
            <v-icon left class="pr-2">{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-toolbar>

      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list density="compact" nav  v-for="(item, j) in items" :key="j">
        <v-list-item :prepend-icon="item.icon" :title="item.title" :to="item.to">
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
          title: "Inicio"
        },
        // {
        //   icon: "mdi-account",
        //   title: "Acerca de mí",
        //   to: "/test",
        // },
      ],
    }
  },
  mounted() {
    this.breakpoint = this.$vuetify.display
  }
}
</script>