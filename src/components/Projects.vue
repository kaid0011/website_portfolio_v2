<template>
  <section id="projects" class="page-b">
    <h2 class="text-center text-uppercase text-bold q-mb-xl">Projects</h2>
    <div class="projects-grid">
      <q-card
        v-for="project in projects"
        :key="project.title"
        class="project-card shadow-2"
      >
        <q-card-section class="q-pb-none">
          <div class="text-a header-wrapper card-header text-caption text-bold text-uppercase">
            {{ project.stack }}
          </div>
        </q-card-section>
        
        <q-card-section class="flex-grow">
          <q-icon
            class="fa-regular fa-folder-open project-icon q-mb-md q-pa-sm"
          ></q-icon>
          <div class="text-h6 text-bold intro-name">{{ project.title }}</div>
          <q-separator class="q-my-sm bg-teal" width="40%" />
          <div class="text-body2 text-b">{{ project.description }}</div>
        </q-card-section>

        <q-card-actions align="right" class="q-pb-lg q-pr-lg q-gutter-x-sm">
          <q-btn
            flat
            round
            icon="fab fa-github"
            @click="viewProject(project.link)"
            class="project-btn"
          />
          <q-btn
            flat
            round
            icon="fa-solid fa-square-arrow-up-right"
            @click=""
            class="project-btn"
          />
        </q-card-actions>
      </q-card>
    </div>
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}
.project-card {
  display: flex;
  flex-direction: column;
  min-height: 350px;
  border-radius: 24px !important;
  transition: transform 0.3s ease;
}
.project-card:hover {
  transform: translateY(-5px);
}
.flex-grow {
  flex-grow: 1;
}
.project-icon {
  font-size: 2.5rem;
  color: var(--text-a);
}
.project-btn {
  color: var(--text-a);
  background: var(--chip-a-bg) !important;
}
</style>

<script setup>
import { ref } from "vue";

const projects = ref([
  {
    title: "Job Posting Website",
    image: "https://via.placeholder.com/300",
    description:
      "Developed using Quasar Vue, a comprehensive platform for job seekers and employers.",
    stack: "Quasar with Vue JS | PHP",
    link: "#",
  },
  {
    title: "Dormitory App",
    image: "https://via.placeholder.com/300",
    description:
      "A system (user applications) built with React JS, streamlining dormitory operations.",
      stack: "React JS | Supabase",
      link: "#",
  },
  {
    title: "Dormitory Management App",
    image: "https://via.placeholder.com/300",
    description:
      "A system (admin applications) built with Quasar Vue, managing the user application operations.",
      stack: "Quasar with Vue JS | Supabase",
      link: "#",
  },
  {
    title: "Point of Sale (POS) System",
    image: "https://via.placeholder.com/300",
    description:
      "Designed and developed a POS system using Quasar Vue, enhancing retail management efficiency.",
      stack: "Quasar with Vue JS | Supabase",
      link: "#",
  },
  {
    title: "Point of Sale (POS) Management System",
    image: "https://via.placeholder.com/300",
    description:
      "Developed a POS management system for the user application using Quasar Vue, managing the POS efficiently.",
      stack: "Quasar with Vue JS | Supabase",
      link: "#",
  },
  {
    title: "ATM Simulation",
    image: "https://via.placeholder.com/300",
    description:
      "Created an ATM simulation using C#, providing an interactive training tool.",
      stack: "C# .NET",
      link: "#",
  },
  {
    title: "Patients Record Management System",
    image: "https://via.placeholder.com/300",
    description:
      "Built with PHP and CodeIgniter 3, this system ensures secure and efficient handling of patient data.",
      stack: "Bootstrap | CodeIgniter 3 with PHP",
      link: "#",
  },
  {
    title: "Virtual Diary Project",
    image: "https://via.placeholder.com/300",
    description:
      "Developed using PHP and CodeIgniter 3, offering users a digital platform to maintain personal thought.",
      stack: "Bootstrap | CodeIgniter 3 with PHP",
      link: "#",
  },
  {
    title: "PERT-CPM Scheduler with Simulation",
    image: "https://via.placeholder.com/300",
    description:
      "A complex project utilizing PHP and Python to assist in project management and planning.",
      stack: "Bootstrap | CodeIgniter 3 with PHP | Python",
      link: "#",
  },
]);

const viewProject = (link) => {
  window.open(link, "_blank");
};
</script>
