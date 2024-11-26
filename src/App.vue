<template>
  <main class="min-h-screen">
    <Header></Header>
    <Landing :pageData="pageData"></Landing>
    <About :pageData="pageData"></About>
    <Brands :pageData="pageData"></Brands>
    <Marquee :pageData="pageData"></Marquee>
    <Footer :pageData="pageData"></Footer>
  </main>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Landing from './components/Landing.vue';
import About from './components/About.vue';
import Marquee from './components/Marquee.vue';
import Brands from './components/Brands.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const pageData = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get("https://api-woman-secrets.spider-te8.com/api/testing");
    pageData.value = response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped></style>
