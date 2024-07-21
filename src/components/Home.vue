<template>
  <section id="home" class="page-a text-center">
    <div class="q-pt-xl">
      <div class="intro-name text-h2 text-weight-bolder text-uppercase">
        Hey, I'm Kim
      </div>
      <div class="text-a text-h6 text-bold text-uppercase">
        Software Engineer
      </div>
      <div class="text-body1 q-mt-lg">
        Welcome to my world! I am a dedicated software engineer with a focus on
        Vue.js development. My mission is to create efficient management systems
        that streamline operations and enhance productivity. With a passion for
        innovation and a commitment to excellence, I strive to deliver
        high-quality solutions tailored to meet the unique needs of each client.
        Explore my work and discover how I can help bring your projects to life.
      </div>
      <div class="tech-icons q-mt-lg">
        <q-chip class="tech-chip-a"> <q-icon name="fab fa-vuejs q-pr-sm" /> Vue.js </q-chip>
        <q-chip class="tech-chip-b">
          <q-icon name="fab fa-node-js q-pr-sm" /> Node.js
        </q-chip>
        <q-chip class="tech-chip-a"> <q-icon name="fab fa-php q-pr-sm" /> PHP </q-chip>
        <q-chip class="tech-chip-b">
          <q-icon name="fas fa-database q-pr-sm" /> MySQL
        </q-chip>
        <q-chip class="tech-chip-a">
          <q-icon name="fas fa-database q-pr-sm" /> PostgreSQL
        </q-chip>
        <q-chip class="tech-chip-b"> <q-icon name="fab fa-css3-alt q-pr-sm" /> CSS </q-chip>
        <q-chip class="tech-chip-a"> <q-icon name="fab fa-html5 q-pr-sm" /> HTML </q-chip>
        <q-chip class="tech-chip-b">
          <q-icon name="fab fa-cuttlefish q-pr-sm" /> C#
        </q-chip>
      </div>
      <div>
        <q-btn flat rounded class="q-mt-xl q-pa-md" @click="scrollTo('about')">
          Know me more
        </q-btn>
      </div>
      <div>
        <q-icon
          class="fa-solid fa-angles-down q-mt-xl bounce-icon"
          size="30px"
        ></q-icon>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style>
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.bounce-icon {
  animation: bounce 1.5s infinite;
}
</style>
