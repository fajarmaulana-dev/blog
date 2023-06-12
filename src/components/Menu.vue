<script setup lang="ts">
import { onMounted, ref, toRefs } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const props = defineProps({
    ['menu']: {
        type: Array,
        default: [
            { name: 'Home', act: () => false },
            { name: 'Blog', act: () => false },
        ]
    }
})
const { menu } = toRefs(props)
const router = useRouter()
const route = useRoute()
const onScrollY = ref(window.scrollY);
onMounted(() => {
    window.addEventListener('scroll', () => {
        onScrollY.value = window.scrollY;
    })
})
const trigger = ref(false)
</script>

<template>
    <header style="transition: .4s;" :class="onScrollY > 5 ? 'shadow-[0_1px_3px_0] shadow-violet-200' : ''"
        class="z-[1] select-none bg-white px-[calc(2rem+8vw)] h-[3.5rem] w-full fixed top-0 flex items-center justify-between">
        <div class="h-full w-[2.5rem] grid place-items-center cursor-pointer"
            @click="router.push('/'); (menu as any)[0].act()">
            <img src="@/assets/fdev.avif" alt="logo">
        </div>
        <div class="hidden sm:flex gap-4 font-medium [&>*]:cursor-pointer hover:[&>*]:text-fuchsia-600">
            <div v-for="a, i in (menu as any)" :key="i" class="relative" style="transition: .4s;"
                :class="(route.fullPath === '/' && i === 0) || route.fullPath.includes(a.name.toLowerCase()) ? 'text-fuchsia-600' : 'text-violet-600'"
                @click="a.name === 'Blog' ? router.push('/blog') : router.push(`${a.name === 'Home' ? '/' : `#${a.name.toLowerCase()}`}`); a.act()">
                {{ a.name }}
                <span style="transition: .4s;"
                    :class="(route.fullPath === '/' && i === 0) || route.fullPath.includes(a.name.toLowerCase()) ? 'w-full' : 'w-0'"
                    class="h-[.2rem] rounded-[.2rem] -bottom-[.2rem] left-0 absolute bg-fuchsia-600"></span>
            </div>
        </div>
        <div class="block sm:hidden cursor-pointer text-violet-600 hover:[&>*]:text-fuchsia-600 active:[&>*]:text-violet-600"
            tabindex="0" @blur="trigger = false">
            <div style="transition: .4s;" @click="trigger = !trigger" class="h-full grid place-content-center">
                <i class="fa-solid fa-bars text-xl"></i>
                <div style="transition: .4s;" :class="trigger ? 'translate-x-0' : 'translate-x-[calc(10rem+8vw)]'"
                    class="absolute top-[3.5rem] right-0">
                    <div
                        class="flex rounded-bl-xl flex-col items-center justify-center w-[10rem] bg-white [&>*]:text-violet-600 shadow-md font-bold [&>*]:h-[2.5rem] [&>*]:w-full [&>*]:grid [&>*]:place-items-center overflow-hidden hover:[&>*]:bg-fuchsia-200">
                        <span v-for="a, i in (menu as any)" :key="i" style="transition: .4s;"
                            :class="(route.fullPath === '/' && i === 0) || route.fullPath.includes(a.name.toLowerCase()) ? 'bg-fuchsia-200' : ''"
                            @click="a.name === 'Blog' ? router.push('/blog') : router.push(`${a.name === 'Home' ? '/' : `#${a.name.toLowerCase()}`}`); a.act()">
                            {{ a.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>