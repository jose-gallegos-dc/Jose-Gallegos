<template>
  <v-container fluid>
    <v-row>
      <!-- Tarjeta de contacto -->
      <v-col cols="12" md="3">
        <Information />
      </v-col>

      <!-- Tarjeta de descripción -->
      <v-col cols="12" md="4">
        <Description />
        <Formation />
      </v-col>

      <!-- Tarjeta de experiencia -->
      <v-col cols="12" md="5">
        <Experience />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Information from "@/components/about_me/Information.vue";
import Description from "@/components/about_me/Description.vue"
import Formation from "@/components/about_me/Formation.vue"
import Experience from "@/components/about_me/Experience.vue"
</script>
