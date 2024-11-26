<template>
  <header class="py-10 bg-white border-b border-secondary">
    <div class="container px-4">
      <div class="flex items-center gap-2 justify-between">
        <img src="/Logo.svg" alt="Logo">
        <div class="language flex items-center gap-1 cursor-pointer">
          <Icon icon="simple-line-icons:globe" class="text-2xl"></Icon>
          <span>English</span>
          <Icon icon="ci:chevron-down" class="text-2xl"></Icon>
        </div>
      </div>
      <div class="flex items-center gap-2 justify-between mt-10 max-md:flex-col max-md:gap-8 max-md:text-xs">
        <ul class="flex items-center gap-4">
          <li v-for="(link, index) in links" :key="index">
            <a class="line-hover" href="#">{{ link }}</a>
          </li>
        </ul>
        <div class="socials flex items-center gap-2">
          <a :href="obj.link" v-for="(obj, index) in socialLinks" :key="index" target="_blank">
            <img :src="`/${obj.icon}`" class="w-6" :alt="obj.altName">
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';
import { links, socialLinks } from '../constants';


</script>

<style lang="scss" scoped></style>