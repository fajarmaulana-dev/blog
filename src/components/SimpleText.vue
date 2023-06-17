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
        default: 8
    }
})
const { id, is, ico, type, name, placeholder, modelValue, disabled, rows } = toRefs(props);
const onModel = (e: any) => emit('update:modelValue', e.target.value)
</script>

<template>
    <section class="relative">
        <input v-if="is === 'text'" :required="true" :type="type" :id="id" :name="name" :disabled="disabled"
            :value="modelValue" @input="onModel($event)" spellcheck="false" @keyup.enter="emit('onEnter')"
            :class="ico.length > 0 ? 'pr-[calc(1.5rem+2.5vw)]' : ''"
            class="peer outline-none w-full bg-transparent py-2 px-4 focus:pb-[0.2rem] focus:pt-[0.8rem] valid:pb-[0.2rem] valid:pt-[0.8rem] border-2 focus:outline-none rounded-md disabled:cursor-not-allowed focus:ring-2
            disabled:border-slate-200 disabled:shadow-none disabled:ring-0 focus:ring-opacity-50 text-violet-600 border-violet-600 hover:border-violet-700 focus:ring-violet-500 focus:border-violet-600 light">
        <textarea v-if="is === 'area'" :rows="rows" required="true" :type="type" :id="id" :name="name" :disabled="disabled"
            :value="modelValue" @input="onModel($event)" spellcheck="false" @keyup.enter="emit('onEnter')"
            :class="ico.length > 0 ? 'pr-[calc(1.5rem+2.5vw)]' : ''"
            class="peer outline-none w-full bg-transparent py-2 px-4 focus:pb-[0.2rem] focus:pt-[0.8rem] valid:pb-[0.2rem] valid:pt-[0.8rem] border-2 focus:outline-none rounded-md disabled:cursor-not-allowed focus:ring-2
            disabled:border-slate-200 disabled:shadow-none disabled:ring-0 focus:ring-opacity-50 text-violet-600 border-violet-600 hover:border-violet-700 focus:ring-violet-500 focus:border-violet-600 light"></textarea>
        <label :for="id" style="transition: .5s" :class="width"
            class="absolute text-left left-0 py-[0.62rem] px-4 rounded pointer-events-none
                    peer-valid:translate-x-6 peer-valid:-translate-y-[0.675rem] peer-valid:text-[.6rem] peer-valid:text-center peer-valid:p-1 peer-valid:tracking-[.35rem] peer-valid:font-extrabold peer-valid:uppercase
                    peer-focus:translate-x-6 peer-focus:-translate-y-[0.675rem] peer-focus:text-[.6rem] peer-focus:text-center peer-focus:p-1 peer-focus:tracking-[.35rem] peer-focus:font-extrabold peer-focus:uppercase
                    peer-valid:text-slate-50 peer-valid:bg-violet-600 peer-focus:text-slate-50 peer-focus:bg-violet-600 text-violet-600">
            {{ placeholder }}</label>
        <i v-if="ico.length > 0" @click="emit('appendClick')"
            class="absolute inset-y-0 right-2 xl:right-0 cursor-pointer w-[calc(.7rem+2.5vw)] grid place-items-center transition duration-300 hover:text-violet-700 active:text-violet-600"
            :class="[ico, disabled ? 'text-slate-200' : 'text-violet-600']"></i>
    </section>
</template>

<style scoped>
@media all and (max-width: 540px) {

    input:valid~span,
    input:focus~span,
    textarea:valid~span,
    textarea:focus~span {
        font-size: x-small !important;
        letter-spacing: .25rem !important;
        padding: .15rem !important;
        transform: translateX(1rem) translateY(-0.5rem) !important;
    }
}

.light:-webkit-autofill,
.light:-webkit-autofill:hover,
.light:-webkit-autofill:focus,
.light:-webkit-autofill:active {
    caret-color: #8b5cf6 !important;
    -webkit-box-shadow: 0 0 0 30px #fae8ff inset !important;
    -webkit-text-fill-color: #8b5cf6 !important;
}
</style>