<template>
    <section v-if="pageData.brands" class="py-32 bg-primary-100">
        <div class="container px-4">
            <img :src="pageData.brands[0].img" class="mx-auto" alt="Duogel Logo">
            <p class="leading-relaxed text-center mt-20 w-2/3 max-md:w-full mx-auto text-dark-gray">
                {{ pageData.brands[0].desc }}
            </p>
            <div class="mt-20 bg-white rounded-lg p-10 max-md:p-8">
                <h3 class="font-bold text-4xl">
                    {{ pageData.brands[0].title }}
                </h3>
                <div class="categories my-10 flex items-center gap-2 flex-wrap">
                    <Carousel class="w-full" v-bind="categoriesConfig" :breakpoints="categoriesBreakpoints" v-model="currentSlide">
                        <Slide v-for="(item, index) in pageData.brands[0].categories"
                            @click="toggleActiveTab(item, index)" :key="index">
                            <span
                                class="carousel__item w-full block mx-2 p-1.5 px-5 rounded-full cursor-pointer transition-all ease-in-out hover:bg-primary-100"
                                :class="`${activeTab == item.id ? 'bg-primary-100' : ''}`">
                                {{ item.title }}
                            </span>
                        </Slide>
                    </Carousel>
                </div>
                <div class="products mt-4" v-if="products.length > 0">
                    <div class="inner-slider">
                        <Carousel ref="productsCarousel" :breakpoints="productsBreakpoints" v-bind="productsConfig">
                            <Slide v-for="(product, index) in products" :key="index">
                                <div
                                    class="carousel__item product-box p-5 w-full mx-5 rounded-xl h-full bg-light-gray flex flex-col">
                                    <img :src="product.img" class="mt-auto mb-5 mix-blend-multiply" :alt="product.name">
                                    <span class="block mt-auto font-bold text-xl text-center">{{ product.name }}</span>
                                </div>
                            </Slide>
                        </Carousel>
                    </div>
                    <div class="navigation mt-10 flex items-center gap-5">
                        <button
                            class="w-10 h-10 rounded-full grid place-items-center bg-middle-light-gray transition-all ease-in-out hover:bg-primary-300"
                            @click="productsCarousel.prev()">
                            <Icon icon="fluent:chevron-left-12-filled" class="text-xl text-white"></Icon>
                        </button>
                        <button
                            class="w-10 h-10 rounded-full grid place-items-center bg-middle-light-gray transition-all ease-in-out hover:bg-primary-300"
                            @click="productsCarousel.next()">
                            <Icon icon="fluent:chevron-right-12-filled" class="text-xl text-white"></Icon>
                        </button>
                    </div>
                </div>
                <div v-else class="empty h-[300px] grid place-items-center">
                    <h2 class="text-gray-400 text-xl">No results</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { Carousel, Slide } from 'vue3-carousel'
defineProps(['pageData'])

const productsCarousel = ref(null)
const activeTab = ref("1")
const currentSlide = ref(0)
const products = ref([])
const productsConfig = ref({
    itemsToShow: 1,
    itemsToScroll: 1
})
const productsBreakpoints = ref({
    0: {
        itemsToShow: 1,
        itemsToScroll: 1
    },
    991: {
        itemsToShow: 2,
        itemsToScroll: 1
    },
    1280: {
        itemsToShow: 4.5,
        itemsToScroll: 2
    }
})

const categoriesConfig = ref({
    itemsToShow: 5,
    snapAlign: "start"
})
const categoriesBreakpoints = ref({
    0: {
        itemsToShow: 2,
    },
    991: {
        itemsToShow: 4,
    },
    1280: {
        itemsToShow: 5,
    }
})

const toggleActiveTab = (item, index) => {
    activeTab.value = item.id
    currentSlide.value = index
    getProducts(activeTab.value)
}

const getProducts = async (categoryId) => {
    try {
        const response = await axios.get(`https://api-woman-secrets.spider-te8.com/api/categories/${categoryId}/products`)
        products.value = response.data.data
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    getProducts(activeTab.value)
})



</script>

<style lang="scss" scoped></style>