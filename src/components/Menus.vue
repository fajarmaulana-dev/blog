<script setup lang="ts">
import { toRefs } from '@vue/reactivity';
import { getAssets } from '.';
import { useRoute } from 'vue-router';

const emit = defineEmits(['select'])
const props = defineProps({
    mini: {
        type: Boolean,
        default: false
    }
})

const { mini } = toRefs(props)
const route = useRoute()
const menu: Record<string, string> = { 'user-tie': 'About', 'briefcase': 'Work', 'laptop-code': 'Project', 'envelope': 'Contact' }
</script>
<template>
    <div :class="mini ? 'flex mini text-lg [&>*]:flex-row-reverse [&>*]:gap-4' : 'items-center text-sm md:text-base gap-5 lg:gap-6 [&>*]:gap-2'"
        class="flex [&>*]:flex [&>*]:items-center">
        <a v-for="i in Object.keys(menu)" class="group" :href="'#' + menu[i].toLowerCase()" @click="emit('select')">
            <i class="text-cyan-300 fas" :class="'fa-' + i"></i>
            <span
                :class="route.fullPath.includes(`#${menu[i].toLowerCase().toLowerCase()}`) ? 'text-cyan-300' : 'text-gray-300'"
                class="dmon group-hover:text-cyan-300 [transition:.4s] tracking-widest">{{ menu[i] }}</span>
        </a>
    </div>
    <a title="download certificate" :href="getAssets('resume.pdf')" target="_blank"
        :class="mini ? 'w-fit px-8 h-10' : 'text-sm px-3 h-9'"
        class="dmon tracking-wider text-cyan-300 rounded-lg border-2 border-cyan-300 grid place-items-center hover:bg-cyan-950 active:bg-transparent [transition:.4s]">
        Resume</a>
</template>

<style scoped>
@media screen and (max-height: 35rem) {
    .mini {
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 3rem;
        row-gap: 2rem;
        justify-content: end;
    }
}

@media screen and (min-height: 35.1rem) {
    .mini {
        flex-direction: column;
        gap: 4rem;
    }
}
</style>