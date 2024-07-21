<template>
  <q-layout view="hHh lpR fFf">
    <q-header flat>
      <q-toolbar class="toolbar q-px-xl">
        <q-toolbar-title class="text-left text-weight-bolder">KAID</q-toolbar-title>
        <q-space />
        <q-btn flat @click="scrollTo('home')" label="Home" />
        <q-btn flat @click="scrollTo('about')" label="About" />
        <q-btn flat @click="scrollTo('experience')" label="Experience" />
        <q-btn flat @click="scrollTo('projects')" label="Projects" />
        <q-btn flat @click="scrollTo('contact')" label="Contact" />
        <q-toggle
          v-model="isDarkMode"
          :color="toggleColor"
          label-left
          icon="light_mode"
          checked-icon="dark_mode"
          unchecked-icon="light_mode"
          @change="toggleTheme"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';

const isDarkMode = ref(false);

const toggleColor = computed(() => (isDarkMode.value ? 'teal' : 'primary'));

const toggleTheme = () => {
  const htmlElement = document.documentElement;
  const newTheme = isDarkMode.value ? 'dark' : 'light';
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
};

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
});

watch(isDarkMode, (newValue) => {
  toggleTheme();
});
</script>

<style scoped>
</style>
