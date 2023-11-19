<template>
  <v-card class="pa-4 rounded-xl" elevation="6">
    <h3 class="pb-2">Experiencia</h3>
    <v-timeline side="end" class="justify-start">
      <v-timeline-item v-for="(item, i) in items" :key="i" dot-color="indigo-darken-1" size="small">
        <v-card max-width="32rem" elevation="3" class="rounded-lg">
          <div class="text-subtitle-1 bg-indigo-darken-1 px-3">
            {{ item.job }}
          </div>

          <div class="pa-3">
            <div class="font-weight-light text-caption">{{ item.duration }}</div>
            <p class="pt-2">{{ item.description }}</p>
          </div>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-card>
</template>

<script>
export default {
  name: "Experience",
  data() {
    return {
      items: [
        {
          job: "Auxiliar de desarrollo digital",
          company: "Contraloría de la función pública",
          duration: "Sep/2018 a Mar/2019",
          description:
            "Programación web con bases de datos con Mysql y Soporte técnico a usuarios.",
        },
        {
          job: "Centralista",
          company: "Bunker Seguridad",
          duration: "Nov/2019 a Jul/2020",
          description:
            "Monitoreo de alarmas, configuración remota de cámaras, control de personal de seguridad.",
        },
        {
          job: "Asesor académico",
          company: "Universidad IEXPRO",
          duration: "May/2021 a Mar/2022",
          description:
            "Seguimiento de actividades académicas de alumnos y docentes en programas educativos en línea (Moodle).",
        },
        {
          job: "Desarrollador backend",
          company: "Mecahsoft",
          duration: "Sep/2022 a Jun/2023",
          description:
            "Desarrollo de API en laravel, administrar base de datos SQL, gestionar nuevos requerimientos de software, apoyo al equipo frontend.",
        },
        {
          job: "Desarrollador full stack",
          company: "Cybac",
          duration: "Ago/2023 hasta la actualidad",
          description:
            "Desarrollo de proyectos con base en requerimientos de software con laravel y js, administrando bases de datos SQL, gestión de webs en cPanel.",
        },
      ],
    };
  },
};
</script>

