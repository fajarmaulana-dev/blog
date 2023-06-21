<script setup lang="ts">
import { ref, reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import Menu from '@/components/Menu.vue';
import SimpleText from '@/components/SimpleText.vue';
import Spinner from '@/components/Spinner.vue';
import Toast from '@/components/Toast.vue';
import { Form, Field } from 'vee-validate';
import * as yup from 'yup';
import AOS from "aos";
import emailjs from 'emailjs-com';

const onScrollY = ref(window.scrollY);
const screenWidth = ref(window.innerWidth);
onMounted(() => {
    window.addEventListener('scroll', () => {
        onScrollY.value = window.scrollY;
    })
    window.addEventListener('resize', () => {
        screenWidth.value = window.innerWidth;
    })
    AOS.init();
})

const scroll = (id: string) => (document as any).getElementById(id).scrollIntoView({ behavior: 'smooth' })
const getAssets = (path: string) => {
    return new URL(`/src/assets/${path}`, import.meta.url).href
}

const link = [
    { name: 'Home', act: () => scroll('home') },
    { name: 'Blog', act: () => false },
    { name: 'About', act: () => scroll('about') },
    { name: 'Skills', act: () => scroll('skills') },
    { name: 'Portfolio', act: () => scroll('portfolio') },
    { name: 'Contact', act: () => scroll('contact') },
]

const starter = [
    { style: '', span: '', title: "Portfolio", act: () => scroll('portfolio') },
    { style: 'bg-violet-500 text-white', span: '', title: "Download CV", act: () => window.open(getAssets('resume.pdf'), 'resume') },
    { style: 'bg-white', span: 'bg-gradient-to-br from-violet-600 to-fuchsia-500 clip', title: "Let's Talk !", act: () => scroll('contact') },
]
const summary = [
    { ico: 'sm:text-[3.25rem] lg:text-[2.5rem] xl:text-[3.25rem] fa-circle-check', amount: '5', title: 'Completed Project' },
    { ico: 'sm:text-[3.15rem] lg:text-[2.45rem] xl:text-[3.15rem] fa-robot', amount: '1', title: 'DL Based Project' },
    { ico: 'sm:text-[3rem] lg:text-[2.25rem] xl:text-[3rem] fa-code', amount: `+${new Date().getFullYear() - 2022}`, title: 'Year Experience' },
    { ico: 'sm:text-[3.25rem] lg:text-[2.5rem] xl:text-[3.25rem] fa-certificate', amount: '3', title: 'Tech Certificate' },
]
const me = 'Hi, my name is Fajar Maulana. I graduated from the mathematics department of Universitas Negeri Semarang as a bachelor of science in February, 2023. The many courses on programming from databases to Machine Learning in mathematics courses made me more interested in the computing field and made me start to get involved in the world of IT. To hone my coding skills, I joined the Bangkit 2021 program and took the Machine Learning path. The final product of the Bangkit program, which is a software and requires collaboration with other participants from mobile development and cloud computing path, became the start of my interest in becoming a software developer. After completing the Bangkit program, then I started learning about HTML, CSS, and JavaScript on my own until finally I tried to take part in a certified internship program from the Ministry of Education and Culture at PT. GITS Indonesia as a software engineer in 2022. During my internship, I learned how to use the Vue.js framework, TypeScript, and TailwindCSS, which I often use until now, including for the completion of my bachelor thesis.'
const skillUsed = [
    { style: 'from-orange-600 via-orange-400 to-orange-200', text: 'text-orange-600', width: 'w-[calc(30%)]', title: 'HTML5', src: 'html.avif' },
    { style: 'from-blue-600 via-blue-400 to-blue-200', text: 'text-blue-600', width: 'w-[calc(30%)]', title: 'CSS3', src: 'css.avif' },
    { style: 'from-cyan-500 via-cyan-400 to-cyan-200', text: 'text-cyan-500', width: 'w-[calc(35%)]', title: 'TailwindCSS', src: 'tailwind.avif' },
    { style: 'from-neutral-900 via-amber-400 to-amber-200', text: 'text-neutral-900', width: 'w-[calc(30%)]', title: 'JavaScript', src: 'js.avif' },
    { style: 'from-sky-700 via-sky-400 to-sky-200', text: 'text-sky-700', width: 'w-[calc(30%)]', title: 'TypeScript', src: 'ts.avif' },
    { style: 'from-emerald-900 via-emerald-500 to-emerald-200', text: 'text-emerald-900', width: 'w-[calc(30%)]', title: 'Vue.js', src: 'logo.svg' },
    { style: 'from-slate-800 via-green-400 to-green-200', text: 'text-slate-800', width: 'w-[calc(55%)]', title: 'Node.js', src: 'node.avif' },
    { style: 'from-neutral-900 via-yellow-400 to-yellow-200', text: 'text-neutral-900', width: 'w-[calc(30%)]', title: 'Express.js', src: 'express.avif' },
    { style: 'from-emerald-600 via-emerald-400 to-stone-200', text: 'text-emerald-600', width: 'w-[calc(18%)]', title: 'MongoDB', src: 'mongo.avif' },
    { style: 'from-blue-600 via-amber-400 to-yellow-200', text: 'text-blue-600', width: 'w-[calc(35%)]', title: 'Python', src: 'python.avif' },
    { style: 'from-orange-600 via-amber-400 to-yellow-200', text: 'text-orange-600', width: 'w-[calc(30%)]', title: 'TensorFlow', src: 'tensorflow.avif' },
    { style: 'from-emerald-600 via-emerald-400 to-emerald-200', text: 'text-emerald-600', width: 'w-[calc(30%)]', title: 'FastAPI', src: 'fastapi.avif' },
    { style: 'from-sky-600 via-sky-400 to-sky-200', text: 'text-sky-600', width: 'w-[calc(50%)]', title: 'Docker', src: 'docker.avif' },
    { style: 'from-lime-500 via-gray-400 to-gray-200', text: 'text-emerald-600', width: 'w-[calc(35%)]', title: 'CorelDraw X8', src: 'corel.avif' },
]
const learned = [
    { style: 'from-emerald-900 via-emerald-500 to-emerald-200', text: 'text-emerald-900', width: 'w-[calc(35%)]', title: 'Nuxt.js', src: 'nuxt.svg' },
    { style: 'from-sky-600 via-sky-400 to-sky-200', text: 'text-sky-600', width: 'w-[calc(35%)]', title: 'React.js', src: 'react.avif' },
    { style: 'from-blue-600 via-blue-400 to-blue-200', text: 'text-blue-600', width: 'w-[calc(40%)]', title: 'React Native', src: 'native.avif' },
    { style: 'from-sky-900 via-sky-500 to-sky-200', text: 'text-sky-900', width: 'w-[calc(40%)]', title: 'PostgreSQL', src: 'postgresql.avif' },
]
const port = [
    { img: 'gpp.avif', title: 'GPP System', desc: 'GITS Project Profitability (GPP) System is an application built with Vue.js and TailwindCSS to facilitate profit analysis, project costs analysis, and review employee logtime at PT. GITS Indonesia.', url: 'http://msib-gpp.gits.app/', git: '' },
    { img: 'fim.avif', title: 'FIM UNNES', desc: 'An application built with MongoDB, Vue.js, Express.js, Node.js, and TailwindCSS with Google indexed and PWA support and used as a medium for organizing the final round of a competition called Forum Ilmiah Matematika Nasional at Universitas Negeri Semarang.', url: 'https://fimunnes.netlify.app/', git: 'https://github.com/fajarmaulana-dev/finalfim' },
    { img: 'unifact.avif', title: 'UniFact', desc: 'Applications built with Vue.js, FastAPI, TensorFlow, Docker, and TailwindCSS as a project for my bachelor thesis completion. The application is equipped with a Deep Learning model with a Bi-TCN architecture so that it can classify Indonesian-language news narratives as valid or hoax automatically.', url: 'https://unifact.netlify.app/', git: 'https://github.com/fajarmaulana-dev/unifact' },
    { img: 'blog.avif', title: "Fajar's Web App", desc: 'Portfolio apps built with Vue.js and TailwindCSS with Google indexed and PWA support.', url: 'https://fajarmaulana-dev.netlify.app/', git: 'https://github.com/fajarmaulana-dev/blog' },
    { img: 'uniform.avif', title: 'UniForm', desc: 'Apps built with MongoDB, Vue.js, Express.js, Node.js, Multer, Cloudinary, Google OAauth, and TailwindCSS to dynamically create and manage digital forms.', url: 'https://lpom.netlify.app/app/uniform', git: '' },
]

const user_email = ref('')
const user_name = ref('')
const message = ref('')

const schema = yup.object({
    user_name: yup.string().required('full name is required'),
    user_email: yup.string().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'please type a valid email').required('email is required'),
    message: yup.string().required('message is required'),
})

const socials = [
    { ico: 'github', url: 'https://github.com/fajarmaulana-dev' },
    { ico: 'linkedin-in', url: 'https://www.linkedin.com/in/fajar-maulana-16b98b152' },
    { ico: 'whatsapp', url: 'https://wa.me/6285842039127' },
    { ico: 'facebook', url: 'https://web.facebook.com/profile.php?id=100090702398845' },
]

const modal = reactive({ container: false, box: false })
const modalImg = ref('')
const openModal = (i: number) => {
    modalImg.value = port[i].img
    modal.container = true;
    setTimeout(() => {
        modal.box = true
    }, 100)
}

const closeModal = () => {
    modal.box = false;
    setTimeout(() => {
        modal.container = false
    }, 300)
}

const loading = ref(false)
const toast = reactive({ success: false, error: false })
const text = ref('')
const sendEmail = async () => {
    loading.value = true
    try {
        const form: any = document.getElementById('form')
        await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form, import.meta.env.VITE_USER_ID)
        toast.success = true
        text.value = 'Your email has been sent successfully'
    } catch (error: any) {
        toast.error = true
        error.text.includes('http') ? text.value = error.text.split('.')[0] : text.value = (error.text || 'Network issue. Please check your internet connection before.')
    }
    loading.value = false
}
</script>

<template>
    <Menu :menu="link" />
    <div class="relative">
        <section id="home"
            class="min-h-screen pt-0 sm:pt-[1vw] lg:pt-0 pb-[3.5rem] px-[calc(.35rem+3.5vw)] xs:px-[calc(.5rem+6vw)] grid place-items-center">
            <div class="w-full">
                <div
                    class="w-full px-4 mt-[3.5rem] py-12 xs:px-8 sm:py-16 lg:py-24 bg-gradient-to-br from-violet-500 to-fuchsia-400 rounded-[2rem] text-white flex flex-col lg:flex-row justify-between gap-10">
                    <div class="lg:w-[30%] grid place-items-center" data-aos="fade-right" data-aos-duration="500">
                        <div class="flex items-center justify-center">
                            <div
                                class="w-[10rem] md:w-[14rem] h-[10rem] md:h-[14rem] grid place-items-center bg-white rounded-full">
                                <img fetchpriority="high" rel="preload" src="@/assets/propict.avif" alt="profile image" />
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-[70%] grid place-items-center" data-aos="fade-left" data-aos-duration="500">
                        <div class="flex flex-col justify-center items-center lg:items-start gap-3">
                            <p class="text-center lg:text-left font-extrabold text-xl">Hi, I'm Fajar</p>
                            <h1 class="text-center lg:text-left font-extrabold text-3xl">Junior Web Developer</h1>
                            <p class="text-center lg:text-left max-w-[25rem] lg:max-w-[100%]">
                                with high passion to build an attractive and responsive web application.<br /></p>
                            <div class="flex flex-col lg:flex-row items-center gap-4">
                                <p class="font-bold text-center">
                                    Get in touch with me{{ screenWidth < 1024 ? '.' : ':' }}</p>
                                        <div class="flex gap-4 lg:gap-3 items-center">
                                            <a v-for="social, i in socials" :key="i" style="transition: .4s;"
                                                :href="social.url" target="_blank"
                                                :aria-label="`Go to my ${social.ico} account`"
                                                :class="`fa-brands fa-${social.ico} text-fuchsia-100 hover:text-white text-lg lg:text-base`"></a>
                                        </div>
                            </div>
                            <div class="w-full flex flex-col justify-center lg:justify-start sm:flex-row gap-3">
                                <button type="button" v-for="start, i in starter" :key="i" style="transition: .4s;"
                                    :class="start.style" @click="start.act"
                                    class="w-full sm:w-[8.75rem] h-[2.5rem] rounded-md font-bold border-[3px] border-white hover:tracking-wider active:tracking-normal">
                                    <span :class="start.span">{{ start.title }}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="relative mt-7 lg:mb-6 border-[3px] lg:border-0 rounded-2xl border-fuchsia-400 p-4 xs:p-6 lg:p-0 lg:mt-0">
                    <div class=" h-[22.5rem] xs:h-52 lg:h-20 w-full lg:w-[calc(100%-4rem)] lg:absolute -bottom-10
                    right-[2rem] grid grid-cols-1 xs:grid-cols-2 place-items-center lg:flex justify-center gap-4 xs:gap-6
                    sm:gap-8">
                        <div v-for="sum, i in summary" :key="i" :data-aos="screenWidth < 1024 ? 'none' : 'fade-down'"
                            data-aos-duration="500" :data-aos-delay="`${i + 4}00`"
                            class="h-full w-full lg:w-[13rem] bg-white rounded-xl shadow-[0_1px_8px_0] shadow-fuchsia-400 flex justify-center items-center gap-4 px-3">
                            <i :class="sum.ico"
                                class="bg-gradient-to-br from-violet-500 to-fuchsia-500 clip hidden sm:block fa-solid"></i>
                            <div class="bg-gradient-to-br from-violet-500 to-fuchsia-500 clip">
                                <p class="text-4xl font-bold text-center flex items-center justify-center gap-3">
                                    {{ sum.amount }} <a v-if="i === 3" title="download certificate"
                                        :href="getAssets('certificate.pdf')" target="_blank"
                                        class="fa-solid fa-download text-[1.2rem] cursor-pointer"></a>
                                </p>
                                <p class="text-xs text-center font-bold">{{ sum.title }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="about" class="min-h-screen py-[3.5rem] bg-white">
            <div
                class="min-h-screen bg-fuchsia-100 md:rounded-r-[30vw] py-[3.5rem] px-[calc(.5rem+8vw)] grid place-items-center">
                <div class="w-full sm:px-[calc(1rem+11vw)] text-violet-500">
                    <h2 class="text-center font-bold text-3xl mb-12" data-aos="fade-left" data-aos-duration="500">About Me
                    </h2>
                    <div class="flex flex-col items-center justify-center xl:flex-row gap-12">
                        <div data-aos="fade-right" data-aos-duration="500"
                            class="relative min-h-[12rem] bg-red-200 w-[12rem] xs:w-[16rem] xl:w-[20rem] flex">
                            <img src="@/assets/mypict.avif" alt="mypict">
                            <div class="absolute z-[-1] -left-4 -top-4 w-[calc(40%)] h-[calc(80%)] bg-violet-400"></div>
                            <div class="absolute z-[-1] -right-4 -bottom-4 w-[calc(80%)] h-[calc(40%)] bg-fuchsia-400">
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="500"
                            class="w-full xl:max-w-[calc(100%-20rem)] h-full text-justify">
                            <p class="font-bold text-lg mb-4">Let me introduce my self</p>
                            <p class="text-slate-800">{{ me }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="skills" class="min-h-screen py-[3.5rem] grid place-items-center">
            <div class="text-violet-500 px-[calc(.5rem+8vw)]">
                <h2 class="text-center font-bold text-3xl mb-8" data-aos="fade-left" data-aos-duration="500">Skills</h2>
                <p class="text-center font-bold text-lg mb-4" data-aos="fade-left" data-aos-duration="500">
                    Here are some tools I've used</p>
                <div class="mb-6 flex justify-center flex-wrap gap-x-6 gap-y-4 xs:gap-x-10 xs:gap-y-6" data-aos="fade-right"
                    data-aos-duration="500">
                    <div v-for="use, i in skillUsed" :key="i">
                        <div :class="use.style"
                            class="relative w-[6rem] h-[3.25rem] xs:w-[8.35rem] xs:h-[4.15rem] bg-gradient-to-t rounded-t-full">
                            <div
                                class="absolute w-[5.5rem] h-[3.1rem] xs:w-[7.85rem] xs:h-[3.875rem] bg-white top-[0.3rem] left-1 rounded-t-full grid place-items-center">
                                <img :src="getAssets(use.src)" :class="use.width" class="translate-y-1"
                                    :alt="`${use.title} Icon`">
                            </div>
                        </div>
                        <p class="text-center font-black text-[.8rem] xs:text-lg" :class="use.text">{{ use.title }}</p>
                    </div>
                </div>
                <div class="w-full h-[calc(1rem+1vw)] flex justify-center gap-[calc(.5rem+.5vw)] my-8" data-aos="fade-left"
                    data-aos-duration="500">
                    <div v-for="i in 5" :key="i" class="w-[calc(1rem+1vw)] bg-fuchsia-300 rounded-full">
                    </div>
                </div>
                <p class="text-center font-bold text-lg mb-4" data-aos="fade-left" data-aos-duration="500">
                    And here are some tools I'm currently learning</p>
                <div class="flex justify-center flex-wrap gap-x-6 gap-y-4 xs:gap-x-10 xs:gap-y-6" data-aos="fade-right"
                    data-aos-duration="500">
                    <div v-for="use, i in learned" :key="i">
                        <div :class="use.style"
                            class="relative w-[6rem] h-[3.25rem] xs:w-[8.35rem] xs:h-[4.15rem] bg-gradient-to-t rounded-t-full">
                            <div
                                class="absolute w-[5.5rem] h-[3.1rem] xs:w-[7.85rem] xs:h-[3.875rem] bg-white top-[0.3rem] left-1 rounded-t-full grid place-items-center">
                                <img :src="getAssets(use.src)" :class="use.width" class="translate-y-1"
                                    :alt="`${use.title} Icon`">
                            </div>
                        </div>
                        <p class="text-center font-black text-[.8rem] xs:text-lg" :class="use.text">{{ use.title }}</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="portfolio" class="min-h-screen py-[3.5rem] px-0 sm:px-[calc(.5rem+6vw)] grid place-items-center">
            <div class="text-violet-500 w-[calc(86vw)] sm:w-[calc(84vw-2rem)]">
                <h2 class="text-center font-bold text-3xl mb-2" data-aos="fade-right" data-aos-duration="500">Portfolio</h2>
                <p class="text-center font-bold text-lg mb-6" data-aos="fade-left" data-aos-duration="500">Here are some
                    projects I've done</p>
                <div class="w-full flex flex-row items-center gap-x-8 sm:gap-x-10 overflow-x-auto overflow-y-hidden p-3">
                    <div v-for="po, i in port" :key="i" data-aos="fade-up" data-aos-duration="500"
                        :data-aos-delay="`${i}00`"
                        class="min-w-[18rem] overflow-hidden h-full bg-white shadow-[0_1px_8px_0] shadow-violet-500 rounded-[1.25rem] flex flex-col">
                        <div class="w-full h-[11rem] overflow-hidden cursor-zoom-in" @click="openModal(i)">
                            <img fetchpriority="high" rel="preload" :src="getAssets(po.img)" width="288"
                                :alt="`${po.title} Thumbnail`">
                        </div>
                        <div class="p-4 flex flex-col h-[20.5rem] justify-between">
                            <div>
                                <div class="font-bold text-xl mb-2">{{ po.title }}</div>
                                <div class="text-slate-800 text-sm">{{ po.desc }}</div>
                            </div>
                            <div class="flex gap-2 mt-4">
                                <a v-if="po.git.length > 0" style="transition: .4s;" :href="po.git" target="_blank"
                                    class="fa-brands fa-github grid place-items-center bg-slate-700 text-white text-xl min-w-[2.5rem] h-[2.5rem] rounded-md hover:bg-slate-800 active:bg-slate-700"></a>
                                <a style="transition: .4s;" :href="po.url" target="_blank"
                                    class="w-full grid place-items-center bg-violet-500 text-white h-[2.5rem] rounded-md font-bold hover:tracking-wider active:tracking-normal">
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="contact" class="min-h-screen py-[3.5rem] px-0 sm:px-[calc(.5rem+6vw)] grid place-items-center">
            <div class="w-full flex flex-col lg:flex-row" data-aos="fade-left" data-aos-duration="500">
                <div class="bg-violet-500 text-white p-4 xs:p-8 sm:p-12 w-full lg:w-[30rem] grid place-items-center">
                    <div>
                        <h2 class="font-black text-xl xs:text-3xl mb-5 xs:mb-8 text-center" data-aos="fade-right"
                            data-aos-duration="400" :data-aos-delay="screenWidth < 1024 ? '50' : '400'">Let's talk about
                            everything!
                        </h2>
                        <div class="flex gap-10 xs:gap-12 flex-col sm:flex-row justify-center" data-aos="fade-right"
                            data-aos-duration="400" :data-aos-delay="screenWidth < 1024 ? '50' : '500'">
                            <div class="flex flex-col items-center gap-2">
                                <p class="font-bold flex items-center">
                                    <i class="fa-brands fa-whatsapp mr-2 xs:mr-3 text-xl xs:text-2xl"></i>
                                    Contact Me
                                </p>
                                <div class="w-[8.5rem] h-[8.5rem] xs:w-[11rem] xs:h-[11rem] flex flex-col items-center">
                                    <img src="@/assets/wa.png" alt="">
                                    <a href="https://wa.me/6285842039127" target="_blank"
                                        class="text-xs xs:text-sm font-medium mt-1 cursor-pointer hover:underline">
                                        wa.me/6285842039127</a>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-2">
                                <p class="font-bold flex items-center">
                                    <i class="fa-solid fa-location mr-2 xs:mr-3 text-xl xs:text-2xl"></i>
                                    My Address
                                </p>
                                <div>
                                    <p
                                        class="w-[8.5rem] h-[8.5rem] xs:w-[11rem] xs:h-[11rem] text-[.65rem] xs:text-sm text-center grid place-items-center border-2 xs:border-4 border-solid border-white p-1.5 xs:font-bold">
                                        Five Lamuk Street, Gambaran Village, Kaliwiro District, Wonosobo Regency, Central
                                        Java, Indonesia (56364)
                                    </p>
                                    <a href="https://s.id/1JSr6" target="_blank"
                                        class="text-xs xs:text-sm flex justify-center mt-1 text-center font-medium cursor-pointer hover:underline">
                                        Track location >
                                    </a>
                                </div>
                            </div>
                        </div>
                        <p class="hidden sm:block text-base md:text-xl mt-10 text-center" data-aos="fade-right"
                            data-aos-duration="400" :data-aos-delay="screenWidth < 1024 ? '50' : '600'">Hate forms? Email me
                            to
                            <u><strong>
                                    <a href="mailto:fajarmaulana.dev@gmail.com">fajarmaulana.dev@gmail.com</a>
                                </strong></u> instead.
                        </p>
                    </div>
                </div>
                <div class="bg-fuchsia-100 p-4 xs:p-8 sm:p-12 w-full grid place-items-center">
                    <Form class="w-full" id="form" :validation-schema="schema" v-slot="{ meta }"
                        :data-aos="screenWidth < 768 ? 'none' : 'fade-down'" data-aos-duration="700">
                        <Field v-slot="{ field, errorMessage }" name="user_name">
                            <SimpleText placeholder="Full Name" id="user_name" width="w-[8.2rem]" type="text"
                                v-model="user_name" v-bind="field" />
                            <p class="text-left text-rose-600 text-xs mb-5">{{ errorMessage }}</p>
                        </Field>
                        <Field v-slot="{ field, errorMessage }" name="user_email">
                            <SimpleText placeholder="Email" id="user_email" width="w-[8.2rem]" type="text"
                                v-model="user_email" v-bind="field" />
                            <p class="text-left text-rose-600 text-xs mb-5">{{ errorMessage }}</p>
                        </Field>
                        <Field v-slot="{ field, errorMessage }" name="message">
                            <SimpleText is="area" placeholder="Message" id="message" width="w-[8.2rem]" type="text"
                                v-model="message" v-bind="field" />
                            <p class="text-left text-rose-600 text-xs mb-5">{{ errorMessage }}</p>
                        </Field>
                        <button type="button" :disabled="!(meta.valid && meta.dirty) || loading"
                            style="transition: letter-spacing .4s;"
                            :class="!(meta.valid && meta.dirty) ? 'cursor-not-allowed text-stone-700 bg-stone-300 border-stone-700' : 'cursor-pointer text-white bg-gradient-to-br border-fuchsia-100 hover:tracking-widest active:tracking-normal'"
                            class="h-[3rem] font-bold text-lg sm:text-xl rounded-lg w-full grid place-items-center from-violet-600 to-fuchsia-500 border-2 border-solid"
                            @click.prevent="sendEmail()">
                            <Spinner v-if="loading" is="lazy-ring" stroke="stroke-white" />
                            <span v-else>SEND MESSAGE</span>
                        </button>
                        <p class="block sm:hidden text-xs xs:text-sm mt-4 xs:mt-6 text-center text-violet-600">Hate
                            forms?
                            Email me to
                            <u><strong>
                                    <a href="mailto:fajarmaulana.dev@gmail.com">fajarmaulana.dev@gmail.com</a>
                                </strong></u> instead.
                        </p>
                    </Form>
                </div>
            </div>
        </section>
        <section @click="closeModal()" class="fixed z-[2] h-screen w-screen bg-[#a78bfa49] top-0 left-0 p-[calc(.5rem+4vw)]"
            :class="modal.container ? 'block' : 'hidden'" style="transition: .1s; transition-delay: .1s;">
            <div :class="modal.box ? 'scale-100' : 'scale-0'" style="transition: .3s;"
                class="w-full h-full transform-gpu bg-white rounded-md flex items-center justify-center shadow-[0_1px_16px_0] shadow-violet-400 relative overflow-hidden">
                <div class="w-full h-full grid place-items-center overflow-y-auto">
                    <img fetchpriority="high" rel="preload" :src="getAssets(modalImg)" class="select-none w-[100%]"
                        alt="zoomed image" />
                </div>
                <div style="transition: .4s;" @click="closeModal()"
                    class="fixed select-none -top-8 -right-8 w-16 h-16 bg-violet-500 hover:bg-violet-600 active:bg-violet-500 text-white grid place-items-center rounded-full font-black cursor-pointer text-sm">
                    <span class="-translate-x-3 translate-y-3">✕</span>
                </div>
            </div>
        </section>
    </div>
    <div class="w-full p-3 bg-violet-400 text-violet-100 flex flex-col gap-1 items-center">
        <div class="flex items-center justify-center gap-x-6 xs:gap-x-10">
            <div class="w-[2.75rem] h-[2.75rem] grid place-items-center">
                <img src="@/assets/fdev.avif" alt="logo" class="logo">
            </div>
            <div class="flex justify-center gap-6">
                <a style="transition: .4s;" v-for="social, i in socials" :key="i" :href="social.url"
                    :aria-label="`Go to my ${social.ico} account`" target="_blank"
                    :class="`fa-brands fa-${social.ico} text-2xl cursor-pointer hover:text-white`">
                </a>
            </div>
        </div>
        <p class="font-bold text-xs xs:text-sm text-white">Crafted by Fajar Maulana&emsp;© {{ new Date().getFullYear() }}
        </p>
    </div>
    <Toast is="success" v-model="toast.success" :title="text" />
    <Toast is="error" v-model="toast.error" :title="text" />
</template>

<style scoped>
.clip {
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
}

.overflow-x-auto::-webkit-scrollbar {
    width: .4rem;
    height: .4rem;
}

.overflow-x-auto::-webkit-scrollbar-track {
    background-color: transparent;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
    border-radius: .4rem .4rem 0 0;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
    background-color: #8b5cf6;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
    background-color: #7c3aed;
}

.logo {
    filter: brightness(0) saturate(100%) invert(98%) sepia(23%) saturate(7191%) hue-rotate(181deg) brightness(108%) contrast(99%);
}
</style>