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
                // {
                //   job: "Auxiliar de desarrollo digital",
                //   company: "Contraloría de la función pública",
                //   duration: "Sep/2018 a Mar/2019",
                //   description:
                //     "Programación web con bases de datos con Mysql y Soporte técnico a usuarios.",
                // },
                // {
                //   job: "Centralista",
                //   company: "Bunker Seguridad",
                //   duration: "Nov/2019 a Jul/2020",
                //   description:
                //     "Monitoreo de alarmas, configuración remota de cámaras, control de personal de seguridad.",
                // },
                {
                    job: "Asesor académico",
                    company: "Universidad IEXPRO",
                    duration: "May/2021 a Mar/2022",
                    description:
                        "Acompañamiento académico integral, organización e innovación de contenidos teóricos y prácticos en línea (Moodle).",
                },
                {
                    job: "Desarrollador backend",
                    company: "Mecahsoft",
                    duration: "Sep/2022 a Jun/2023",
                    description:
                        "Desarrollo de API en laravel, manejo de base de datos postgreSQL, gestión de requerimientos de software y administración de servidores linux en digital ocean.",
                },
                {
                    job: "Desarrollador web",
                    company: "Cybac",
                    duration: "Ago/2023 hasta May/2024",
                    description:
                        "Desarrollo de proyectos web con Php, Laravel, Javascript y CSS usando metodologías ágiles, implementación e innovación de requerimientos de software.",
                },
                {
                    job: "Desarrollador web",
                    company: "ICH laboral",
                    duration: "Dic/2023 hasta Mar/2025",
                    description:
                        "Creación y despliegue de aplicaciones web con Laravel, Javascript y  mysql. Desarrollo de API en .net con C# y su consumo en reactJS.",
                },
            ],
        };
    },
};
</script>
