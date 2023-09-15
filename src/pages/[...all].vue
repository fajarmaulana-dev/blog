<script setup lang="ts"></script>

<template>
    <div class="min-h-screen grid place-items-center bg-[rgb(10,25,47)]">
        <div class="w-[80vw] max-w-[35rem] grid place-items-center">
            <img src="@/assets/notfound.avif" class="max-h-[50vh]" alt="Notfound Thumbnail" />
            <router-link to="/" style="transition: .4s;"
                class="py-2 w-[10rem] dmon tracking-widest grid place-items-center rounded-md mt-8 bg-gradient-to-br from-lime-300 to-emerald-300 text-slate-900 font-bold hover:tracking-wider active:tracking-normal">
                Go Back</router-link>
        </div>
    </div>
</template>