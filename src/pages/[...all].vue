<script setup lang="ts"></script>

<template>
    <div class="min-h-screen grid place-items-center">
        <div class="w-[80vw] max-w-[35rem] grid place-items-center">
            <img src="@/assets/notfound.avif" class="max-h-[50vh]" alt="Notfound Thumbnail" />
            <router-link to="/" style="transition: .4s;"
                class="py-2 w-[10rem] grid place-items-center rounded-md mt-4 bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white font-bold hover:tracking-wider active:tracking-normal">
                Back to Home</router-link>
        </div>
    </div>
</template>