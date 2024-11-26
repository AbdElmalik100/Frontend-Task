<template>
    <section class="py-32" v-if="pageData.contact">
        <Vue3Marquee direction="reverse">
            <h3 class="text-8xl max-md:text-4xl font-medium uppercase">
                {{ pageData.contact.advertisement }}
            </h3>
            <h3 class="text-8xl max-md:text-4xl font-black uppercase">
                {{ pageData.contact.advertisement }}
            </h3>
        </Vue3Marquee>
    </section>
</template>

<script setup>
import { Vue3Marquee } from 'vue3-marquee'
defineProps(['pageData'])


</script>

<style lang="scss" scoped></style>