<template>
  <footer v-if="pageData.footer" class="py-12 bg-primary-100">
    <div class="container px-4 flex gap-20 justify-between max-md:flex-col">
      <div class="left-side flex gap-10 w-full max-md:flex-col max-md:text-center">
        <div class="info">
          <h2 class="font-medium text-2xl mb-4">{{ footer.info.heading }}</h2>
          <ul class="flex flex-col gap-2">
            <li v-for="(link, index) in footer.info.links" :key="index" class="text-xl">
              <a class="line-hover" href="#">{{ link }}</a>
            </li>
          </ul>
        </div>
        <div class="support">
          <h2 class="font-medium text-2xl mb-4">{{ footer.support.heading }}</h2>
          <ul class="flex flex-col gap-2">
            <li v-for="(link, index) in footer.support.links" :key="index" class="text-xl">
              <a class="line-hover" href="#">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="logo self-center w-full">
        <img :src="pageData.footer.logo" class="mx-auto w-50 h-50" alt="Logo" />
      </div>
      <div class="right-side flex gap-10 w-full max-md:flex-col">
        <div class="contacts flex flex-col max-md:text-center">
          <h2 class="font-medium text-2xl mb-4">Contacts</h2>
          <a :href="`tel:${pageData.footer.phone}`" target="_blank" class="mb-2 hover:underline">
            {{ pageData.footer.phone }}
          </a>
          <a :href="`mailto:${pageData.footer.email}`" target="_blank" class="hover:underline">
            {{ pageData.footer.email }}
          </a>
          <div class="flex items-center gap-3 mt-5 max-md:justify-center">
            <a :href="pageData.footer.socials.facebook" target="_blank">
              <img src="/facebook.svg" class="w-6" alt="Facebook">
            </a>
            <a :href="pageData.footer.socials.instagram" target="_blank">
              <img src="/instagram.svg" class="w-6" alt="Instagram">
            </a>
            <a :href="pageData.footer.socials.twitter" target="_blank">
              <img src="/twitter.svg" class="w-6" alt="Twitter">
            </a>
            <a :href="pageData.footer.socials.snapchat" target="_blank">
              <Icon icon="fa-brands:snapchat" class="text-2xl"></Icon>
            </a>
          </div>
        </div>
        <form class="flex flex-col gap-3 w-full" @submit.prevent="subscribe">
          <h2 class="capitalize font-medium text-2xl mb-4">Subscribe for more</h2>
          <input type="email" placeholder="Enter your email" v-model="form.email" />
          <div v-if="validation.email.$error">
            <span class="text-rose-700 italic block" v-for="(item, index) in validation.email.$errors" :key="index">
              {{ item.$message }}
            </span>
          </div>
          <button class="p-2 px-3 rounded-full uppercase bg-light-gray w-fit">
            Send
          </button>
        </form>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
import { footer } from "../constants";
import { ref } from "vue";
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import axios from "axios";
import { toast } from "vue3-toastify";

defineProps(["pageData"]);

const form = ref({
  email: ""
})

const rules = {
  email: {
    required: helpers.withMessage("This field is required", required),
    email: helpers.withMessage("Invalid Email address", email)
  }
}

const validation = useVuelidate(rules, form)

const subscribe = async () => {
  validation.value.$validate()
  if (!validation.value.$error) {
    const formData = new FormData()
    formData.append("email", form.value.email)
    try {
      const response = await axios.post("https://api-woman-secrets.spider-te8.com/api/subscribers", formData)
      console.log(response);
      toast(response.data.message, {
        "type": "success",
        "position": "bottom-right",
        "autoClose": "",
        "hideProgressBar": true,
        "dangerouslyHTMLString": true
      })
    } catch (error) {
      console.log(error);
      toast(error.response.data.message, {
        "type": "error",
        "position": "bottom-right",
        "autoClose": "",
        "hideProgressBar": true,
        "dangerouslyHTMLString": true
      })
    } finally {
      form.value.email = ""
      validation.value.$reset()
    }
  }

}


</script>

<style lang="scss" scoped></style>
