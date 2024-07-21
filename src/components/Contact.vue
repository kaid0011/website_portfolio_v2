<template>
  <section id="contact" class="page-a">
    <h2 class="text-center text-uppercase text-bold">Contact</h2>
    <div class="row q-pt-lg">
      <div class="col-6">
        <div class="text-h3 q-mb-lg">Get In Touch</div>
        <div class="text-body1">
          Say you ideas or maybe a "Hi!" will do. Thank you for taking your time
          to scroll down my portfolio. Be free to message me via e-mail and
          let's talk about your ideas!
        </div>
        <div class="q-pa-xl">
          <i class="icon-message text-a fa-solid fa-hand-holding-heart"></i>
        </div>
      </div>
      <div class="col-6">
        <q-form @submit="onSubmit" class="q-gutter-y-md">
          <q-input
            standout="bg-teal-8 text-teal-11"
            rounded
            class="contact-input"
            v-model="name"
            label="Name"
          />
          <q-input
            standout="bg-teal-8 text-teal-11"
            rounded
            class="contact-input"
            v-model="email"
            label="Email"
            type="email"
          />
          <q-input
            standout="bg-teal-8 text-teal-11"
            rounded
            class="contact-input"
            v-model="subject"
            label="Subject"
          />
          <q-input
            standout="bg-teal-8 text-teal-11"
            rounded
            class="contact-input"
            v-model="message"
            label="Message"
            type="textarea"
          />
          <q-btn type="submit" class="q-pa-sm q-mt-md" label="Send Message" />
        </q-form>
      </div>
    </div>
    
    <div class="text-center text-a text-caption q-mt-xl q-pt-lg">
      Designed and Developed by Kaid @ 2024
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");

const onSubmit = () => {
  console.log("Form submitted:", {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  });
  // Handle form submission logic here
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
