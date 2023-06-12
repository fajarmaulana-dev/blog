<script setup lang="ts">
import { ref, toRefs, watch } from 'vue';

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
    is: {
        type: String,
        default: 'info'
    },
    title: {
        type: String,
        default: 'Pengguna berhasil dihapus'
    },
    modelValue: {
        type: Boolean,
        default: false
    },
})

const { is, title, modelValue } = toRefs(props);

const text = ref()
const ico = ref()

const container = ref(false);
const box = ref(false)

const openToast = () => {
    container.value = true
    setTimeout(() => {
        box.value = true;
    }, 100)
    setTimeout(() => {
        box.value = false;
    }, 2500);
    setTimeout(() => {
        container.value = false;
    }, 3100);
}

const hardClose = () => {
    box.value = false
    setTimeout(() => {
        container.value = false;
    }, 600);
}

watch(modelValue, () => {
    if (modelValue.value === true) {
        openToast();
        emit('update:modelValue', false)
    }
})

if (is.value === 'success') {
    text.value = 'bg-emerald-200 text-emerald-800 border-emerald-800'; ico.value = 'circle-check';
} if (is.value === 'error') {
    text.value = 'bg-rose-200 text-rose-800 border-rose-800'; ico.value = 'circle-exclamation';
} if (is.value === 'info') {
    text.value = 'bg-sky-200 text-sky-800 border-sky-800'; ico.value = 'circle-info'
} if (is.value === 'warning') {
    text.value = 'bg-amber-200 text-amber-800 border-amber-800'; ico.value = 'triangle-exclamation'
}
</script>

<template>
    <section class="fixed inset-0 z-[70] items-end justify-start" :class="container ? 'flex' : 'hidden'"
        @click="hardClose()">
        <div :class="[text, box ? 'trans' : 'translate-y-[100%]']" style="transition: .5s;"
            class="w-fit max-w-[15rem] sm:max-w-[29rem] font-bold border-[.15rem] border-solid py-[0.375rem] px-3 rounded-md flex items-center gap-3 translate-x-4">
            <i :class="`fa-solid fa-${ico}`" class=" text-2xl"></i>
            <span>{{ title }}</span>
        </div>
    </section>
</template>

<style scoped>
.trans {
    transform: translate(1rem, -1rem) !important;
}
</style>