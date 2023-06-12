<script setup lang="ts">
import { toRefs } from 'vue';
const props = defineProps({
    stroke: String,
    is: {
        type: String,
        default: 'ring'
    },
    width: {
        type: Number,
        default: 24
    },
})

const { stroke, is, width } = toRefs(props);
const at = 'http://www.w3.org/2000/svg'
</script>

<template>
    <div :id="is">
        <svg v-if="is === 'lazy-ring'" :width="width" :height="width" :class="stroke" viewBox="0 0 24 24" :xmlns="at">
            <g class="spinner_V8m1">
                <circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3"></circle>
            </g>
        </svg>
    </div>
</template>

<style scoped>
/* Ring */
.spinner_V8m1 {
    transform-origin: center;
    animation: spinner_zKoa 2s linear infinite
}

.spinner_V8m1 circle {
    stroke-linecap: round;
    animation: spinner_YpZS 1.5s ease-in-out infinite
}

@keyframes spinner_zKoa {
    100% {
        transform: rotate(360deg)
    }
}

@keyframes spinner_YpZS {
    0% {
        stroke-dasharray: 0 150;
        stroke-dashoffset: 0
    }

    47.5% {
        stroke-dasharray: 42 150;
        stroke-dashoffset: -16
    }

    95%,
    100% {
        stroke-dasharray: 42 150;
        stroke-dashoffset: -59
    }
}
</style>