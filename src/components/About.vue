<template>
    <section v-if="pageData.about" class="about flex gap-20 py-32 max-md:flex-col">
        <div class="w-full h-full">
            <img :src="pageData.about.img" class="w-full h-full" alt="">
        </div>
        <div class="w-full px-12 max-md:px-8">
            <h1 class="uppercase font-thin text-9xl max-md:text-6xl tracking-widest">{{ pageData.about.title }}</h1>
            <p class="leading-relaxed mt-20">
                {{ pageData.about.desc }}
            </p>
            <div class="mt-20">
                <h1 class="font-bold text-5xl mb-5">Values</h1>
                <div class="p-2 px-4 rounded-xl bg-light-gray [&:not(:last-child)]:mb-4"
                    v-for="(item, index) in pageData.about.values" :key="index">
                    {{ item.title }}
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps(['pageData'])

</script>

<style lang="scss" scoped></style>