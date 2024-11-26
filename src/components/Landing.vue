<template>
    <section v-if="pageData.header" class="landing flex min-h-screen max-md:flex-col">
        <div class="w-[calc(100%/3)] max-md:w-full">
            <video autoplay loop muted class="h-full w-full object-cover">
                <source :src="pageData.header.video" type="video/mp4">
            </video>
        </div>
        <div class="w-[calc(100%/3)] grid place-items-center p-24 max-md:px-5 max-md:w-full">
            <div class="flex flex-col gap-8 text-center">
                <h3 class="font-medium text-5xl max-md:text-4xl leading-relaxed max-md:leading-relaxed">
                    {{ pageData.header.desc }}
                </h3>
                <a :href="pageData.header.btn_link" target="_blank" class="prime-btn">
                    {{ pageData.header.btn_text }}
                </a>
            </div>
        </div>
        <div class="w-[calc(100%/3)] max-md:w-full">
            <img :src="pageData.header.img" class="object-cover w-full h-full" alt="Landing Image">
        </div>
    </section>
</template>

<script setup>
defineProps(['pageData'])
</script>

<style lang="scss" scoped></style>