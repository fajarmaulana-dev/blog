<script setup lang="ts">
import { toRefs } from '@vue/reactivity';

const emit = defineEmits(['update:modelValue', 'appendClick', 'onEnter']);
const props = defineProps({
    id: String,
    is: {
        type: String,
        default: 'text'
    },
    ico: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'text',
    },
    name: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: '',
    },
    modelValue: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    width: {
        type: String,
        default: ''
    },
    rows: {
        type: Number,
        default: 4
    }
})
const { id, is, ico, type, name, placeholder, modelValue, disabled, rows } = toRefs(props);
const onModel = (e: any) => emit('update:modelValue', e.target.value)
</script>

<template>
    <section class="relative dmon">
        <input v-if="is === 'text'" :required="true" :type="type" :id="id" :name="name" :disabled="disabled"
            :value="modelValue" @input="onModel($event)" spellcheck="false" @keyup.enter="emit('onEnter')"
            :class="ico.length > 0 ? 'pr-[calc(1.5rem+2.5vw)]' : ''"
            class="peer [transition:.4s] outline-none w-full bg-transparent h-[2.5rem] focus:pb-[0.2rem] focus:pt-[0.7rem] valid:pb-[0.2rem] valid:pt-[0.7rem] border-b-2 focus:outline-none disabled:cursor-not-allowed focus:ring-0
            disabled:border-neutral-200 disabled:shadow-none disabled:ring-0 ring-0 text-gray-300 border-gray-300 hover:border-cyan-300 focus:border-cyan-300 valid:border-cyan-300 light">
        <textarea v-if="is === 'area'" :rows="rows" required="true" :type="type" :id="id" :name="name" :disabled="disabled"
            :value="modelValue" @input="onModel($event)" spellcheck="false" @keyup.enter="emit('onEnter')"
            :class="ico.length > 0 ? 'pr-[calc(1.5rem+2.5vw)]' : ''" :style="`height: ${rows * 1.75}rem`"
            class="peer [transition:.4s] outline-none w-full bg-transparent focus:pb-[0.2rem] focus:pt-[0.7rem] valid:pb-[0.2rem] valid:pt-[0.7rem] border-b-2 focus:outline-none disabled:cursor-not-allowed focus:ring-0
            disabled:border-neutral-200 disabled:shadow-none disabled:ring-0 ring-0 text-gray-300 border-gray-300 hover:border-cyan-300 focus:border-cyan-300 light"></textarea>
        <label :for="id" style="transition: .5s" :class="width" class="absolute text-left left-0 top-3.5 rounded pointer-events-none
                    peer-valid:-translate-y-[1.2rem] peer-valid:text-[.6rem] peer-valid:tracking-[.2rem] peer-valid:font-bold peer-valid:uppercase
                    peer-focus:-translate-y-[1.2rem] peer-focus:text-[.6rem] peer-focus:tracking-[.2rem] peer-focus:font-bold peer-focus:uppercase
                    peer-valid:text-cyan-300 peer-focus:text-cyan-300 text-gray-300">
            {{ placeholder }}</label>
        <i v-if="ico.length > 0" @click="emit('appendClick')"
            class="absolute inset-y-0 right-2 xl:right-0 cursor-pointer w-[calc(.7rem+2.5vw)] grid place-items-center transition duration-300 hover:text-gray-400 active:text-gray-300"
            :class="[ico, disabled ? 'text-neutral-200' : 'text-gray-300']"></i>
    </section>
</template>

<style scoped>
.light:-webkit-autofill,
.light:-webkit-autofill:hover,
.light:-webkit-autofill:focus,
.light:-webkit-autofill:active {
    caret-color: rgb(209, 213, 219) !important;
    -webkit-box-shadow: 0 0 0 30px rgb(10, 25, 47) inset !important;
    -webkit-text-fill-color: rgb(209, 213, 219) !important;
    -webkit-background-clip: text;
    box-shadow: 0 0 0 30px rgb(10, 25, 47) inset !important;
    transition: background-color 5000s ease-in-out 0s;
}
</style>