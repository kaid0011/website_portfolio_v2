<template>
  <section id="contact" class="page-a">
    <div class="container-width">
      <h2 class="text-center text-uppercase text-bold q-mb-xl">Contact</h2>
      <div class="row q-col-gutter-xl">
        <div class="col-12 col-md-6">
          <div class="text-h3 q-mb-lg text-weight-bold">Get In Touch</div>
          <div class="text-body1 q-mb-lg">
            Say your ideas or maybe a "Hi!" will do. Thank you for taking your time
            to scroll down my portfolio. Be free to message me via e-mail and
            let's talk about your ideas!
          </div>
          <div class="flex justify-center q-pa-md lt-sm">
             <i class="icon-message text-a fa-solid fa-hand-holding-heart small-icon"></i>
          </div>
          <div class="gt-xs flex justify-center q-pa-xl">
            <i class="icon-message text-a fa-solid fa-hand-holding-heart"></i>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <q-form @submit="onSubmit" class="q-gutter-y-md">
            <q-input
              standout="bg-teal-8 text-white"
              rounded
              outlined
              v-model="name"
              label="Name"
            />
            <q-input
              standout="bg-teal-8 text-white"
              rounded
              outlined
              v-model="email"
              label="Email"
              type="email"
            />
            <q-input
              standout="bg-teal-8 text-white"
              rounded
              outlined
              v-model="subject"
              label="Subject"
            />
            <q-input
              standout="bg-teal-8 text-white"
              rounded
              outlined
              v-model="message"
              label="Message"
              type="textarea"
            />
            <div class="flex justify-end">
              <q-btn 
                type="submit" 
                class="q-px-xl q-py-sm text-bold" 
                label="Send Message" 
                no-caps
                rounded
              />
            </div>
          </q-form>
        </div>
      </div>
      
      <div class="text-center text-a text-caption q-mt-xl q-pt-xl">
        Designed and Developed by Kaid @ 2024
      </div>
    </div>
  </section>
</template>

<style scoped>
.container-width {
  max-width: 1100px;
  margin: 0 auto;
}
.icon-message {
  font-size: clamp(5rem, 10vw, 10rem);
}
</style>

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
