<template>
  <section id="about" class="page-b">
    <div class="container-width">
      <h2 class="text-center text-uppercase text-bold q-mb-xl text-c">About Me</h2>
      <div class="row items-center q-col-gutter-lg">
        <div class="col-12 col-md-3 flex justify-center">
          <q-img src="https://via.placeholder.com/150" class="profile-photo shadow-5" />
        </div>
        <div class="col-12 col-md-9 q-gutter-y-md">
          <div class="text-body1">
            I am <strong>Kim Dianne G. Bagasona</strong>, a passionate software engineer
            specializing in Vue.js development. With a unique blend of technical
            expertise and creative problem-solving skills, I strive to deliver
            innovative and efficient solutions in every project I undertake.
          </div>
          <div class="text-body1">
            I graduated with a Bachelor of Science in Computer Science from the
            Technological University of the Philippines in 2023. My education
            provided me with a solid foundation in software engineering principles
            and practices, equipping me to navigate the dynamic challenges of the
            tech industry.
          </div>
          <div class="text-body1">
            Beyond software development, I also have a strong background in
            graphic design, gained from my experience at Azaza Biz Solutions while
            attending school. This dual expertise allows me to seamlessly merge
            aesthetics with functionality, creating visually appealing and
            user-friendly software solutions that stand out.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid var(--text-a);
}
.container-width {
  max-width: 1000px;
  margin: 0 auto;
}
</style>