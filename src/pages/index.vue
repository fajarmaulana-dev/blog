<script setup lang="ts">
import { ref, reactive } from '@vue/reactivity';
import { onMounted, watch } from '@vue/runtime-core'
import Menus from '~/Menus.vue';
import TextLine from '~/TextLine.vue';
import { getAssets } from '~/.';
import AOS from "aos";
import { Form, Field } from 'vee-validate';
import * as yup from 'yup';
import emailjs from 'emailjs-com';
import typer from 'typer-js'

const screenWidth = ref(window.innerWidth);
onMounted(() => {
    window.addEventListener('resize', () => {
        screenWidth.value = window.innerWidth;
    })
    AOS.init()
    typer('#typer')
        .line('Fajar Maulana').pause(4000).back('all')
        .continue('Web Developer').pause(4000).back('all')
        .repeat(Infinity)
})
const open = ref<boolean>(false)
const tech = [
    ['TailwindCSS', 'CSS Module', 'SCSS', 'Styled Components', 'JavaScript (ES6+)', 'TypeScript', 'Python', 'Go'],
    ['MongoDB', 'Express.js', 'Vue.js', 'Node.js', 'PostgreSQL', 'GIN', 'React.js', 'Next.js'],
    ['Nuxt.js', 'PWA', 'TensorFlow', 'FastAPI', 'Cloudinary', 'Beautiful Soup']
]
const work_data: Record<string, string> = {
    'Komerce - Present': 'In this company, I was responsible for handling Komtim and Komplace products. Komtim is a talent service provider of Customer Service, Advertiser, Marketplace Admin, and Livestreamer to help MSME businesses in need. While Komplace is a product management service provider in many stores, order processing in all marketplaces, stock synchronization, and customer chat reply in one application. In addition, I also have the responsibility to revamp and improve landing page performance for several products, as well as doing bug fixing.',
    'Sea Labs Indonesia - Jan/2024': 'On this occasion I learned a lot about building backend services with Golang in a clean architecture. The framework used for the backend is GIN. Meanwhile, the database used is PostgreSQL. I also learned Frontend Development using React, Redux, and Next.js with a reusable atomic design. Apart from that, I also learned a lot about improving SEO and dividing pages as CSR, SSR, SSG, ISR according to needs, as well as testing applications both on the frontend and backend. On the backend side, testing uses the Testify and Mockery libraries. Meanwhile, on the frontend side, use Jest or Vitest.',
    'FIM UNNES - Aug/2022': 'On this occasion, I was required to learn backend development because the project I was working on here was a Fullstack web project. I chose to use Node.js and Express.js as the framework for the backend side, and MongoDB as the database. On the frontend side, I also learned to use Quill.js as a Richtext Editor and PWA to build a website that can be installed on mobile and desktop devices and supports page loading without internet access.',
    'GITS.ID - Feb/2022': 'This is the first time I started my career as a web developer. I interned at PT. GITS Indonesia through the Certified Internship program from the Ministry of Education and Culture. Here I learned a lot about using Vue.js, TailwindCSS, Vuetify, and Highcharts to build a dashboard page display that displays several data presentations in the form of line charts, pie charts, and tables within a certain month range. I also learned how to integrate the Frontend with the Backend via API using Axios. Apart from that, I also learned the development methods at this company which used the SCRUM method and several tools such as Trello as a framework and the use of Husky in commit management.'
}
const work = ref<string>(Object.keys(work_data)[0])

const project: Record<string, any>[] = [
    { name: 'RajaOngkir API', image: getAssets('rajaongkir.avif'), desc: 'RajaOngkir is a service that provides shipping cost information, as well as Open API for shipping goods and COD for various couriers in Indonesia such as POS Indonesia, JNE, TIKI, J&T, IDexpress, SAP, Ninja, and SiCepat. This Landing Page is built with Next.js App Router without any additional libraries when initiated to support good Core Web Vitals.', tech: ['Next.js', 'TypeScript', 'TailwindCSS'], secret: true, done: true, git: '', url: 'https://rajaongkir.com/api', email: '', pass: '' },
    { name: 'Komtim.id', image: getAssets('komtim.avif'), desc: 'Komtim is a talent service provider of Customer Service, Advertiser, Marketplace Admin, and Livestreamer to help MSME businesses in need. The core web vitals of this landing page has been improved as part of the task.', tech: ['Nuxt.js', 'JavaScript'], secret: true, done: true, git: '', url: 'https://komtim.id', email: '', pass: '' },
    { name: 'Komtim - Customer Service', image: getAssets('komtim-customer-service.avif'), desc: 'Komtim - Customer Service is a landing page used to promote reliable customer service talents who have been fostered by Komtim. The core web vitals of this landing page has been improved as part of the task.', tech: ['Nuxt.js', 'JavaScript'], secret: true, done: true, git: '', url: 'https://komtim.id/customer-service', email: '', pass: '' },
    { name: 'Komtim - Livestreamer', image: getAssets('komtim-livestreamer.avif'), desc: 'Komtim - Livestreamer is a landing page used to promote reliable live streamer talents who have been fostered by Komtim. The core web vitals of this landing page has been improved as part of the task.', tech: ['Nuxt.js', 'JavaScript'], secret: true, done: true, git: '', url: 'https://komtim.id/livestreamer', email: '', pass: '' },
    { name: 'Komtim - Advertiser', image: getAssets('komtim-advertiser.avif'), desc: 'Komtim - Advertiser is a landing page used to promote reliable advertiser talents who have been fostered by Komtim. The core web vitals of this landing page has been improved as part of the task.', tech: ['Nuxt.js', 'JavaScript'], secret: true, done: true, git: '', url: 'https://komtim.id/advertiser-package', email: '', pass: '' },
    { name: 'Komtim - Admin Marketplace', image: getAssets('komtim-admin-marketplace.avif'), desc: 'Komtim - Admin Marketplace is a landing page used to promote reliable admin marketplace talents who have been fostered by Komtim. The core web vitals of this landing page has been improved as part of the task.', tech: ['Nuxt.js', 'JavaScript'], secret: true, done: true, git: '', url: 'https://komtim.id/admin-marketplace', email: '', pass: '' },
    { name: 'Komerce.id', image: getAssets('komerce.avif'), desc: 'Komerce.id is the landing page of Komerce. Komerce is a startup that is ready to help improve sales performance in e-commerce by providing trained talent support, order delivery platforms, and warehouse management.', tech: ['Nuxt.js', 'JavaScript'], secret: true, done: true, git: '', url: 'https://komerce.id', email: '', pass: '' },
    { name: 'Komplace.id', image: getAssets('komplace.avif'), desc: 'Komplace is a product management service provider in many stores, order processing in all marketplaces, stock synchronization, and customer chat reply in one application. The landing page is built in PWA to provide some features, like caching, notification, etc.', tech: ['Vue.js', 'JavaScript', 'TailwindCSS', 'PWA'], secret: true, done: true, git: '', url: 'https://komplace.id', email: '', pass: '' },
    { name: 'Komclass.id', image: getAssets('komclass.avif'), desc: 'Komclass.id is a service that is help SMEs to go digital with online business training, and offering lots of practical sessions. The class is available online and offline. The landing page is built with Next.js Page Router.', tech: ['Next.js', 'TypeScript', 'TailwindCSS'], secret: true, done: true, git: '', url: 'https://komclass.id', email: '', pass: '' },
    // { name: 'PokeDex', image: getAssets('pokedex.avif'), desc: 'Pokedex is a web app to find and catch pokemons. This app supported by PokeAPI as data provider that use nested API method. So that, it needs more logic and strategy to consume the API', tech: ['Vue.js', 'Pinia', 'TailwindCSS', 'PWA', 'TypeScript'], secret: false, done: true, git: 'https://github.com/fajarmaulana-dev/pokemon', url: 'https://fajars-pokedex.netlify.app', email: '', pass: '' },
    { name: 'UniFACT', image: getAssets('unifact.avif'), desc: 'UniFACT is the result of my bachelor thesis completion. This web can classify the Indonesian-language news narratives as valid, misleading content / false context / manipulated content, or fabricated content / imposter content with support of Bidirectional Temporal Convolutional Network Model. Data for model training is obtained by scraping method on turnbackhoax.id and news.detik.com sites.', tech: ['Beautiful Soup', 'Grequest', 'TensorFlow', 'Keras-TCN', 'FastAPI', 'Docker', 'Vue.js', 'Vuex', 'PWA', 'TailwindCSS'], secret: false, done: true, git: 'https://github.com/fajarmaulana-dev/unifact', url: 'https://unifact.netlify.app', email: '', pass: '' },
    { name: 'FIM UNNES', image: getAssets('fim.avif'), desc: 'This app is a medium used to make it easier to organize the FIM UNNES final round. Consists of three main pages, namely the authentication page, quiz page, and questions and points editing page for each question. This app has several features that accommodate the rules that have been set out in the guide book, such as playing back the time for each question, automatically giving points to participants according to the question points, automatically giving bonus points according to the guide, an undo/redo feature, display and edit the formula content with rich text editor, etc.', tech: ['Vue.js', 'TailwindCSS', 'PWA', 'TypeScript', 'Quill.js', 'Node.js', 'Express.js', 'MongoDB'], secret: false, done: true, git: 'https://github.com/fajarmaulana-dev/finalfim', url: 'https://fimunnes.netlify.app', email: 'fajarmaulana.dev@gmail.com', pass: 'Fajars2023!' },
    { name: 'GPP System', image: getAssets('gpp.avif'), desc: 'GITS Project Profitability System (GPP System) is an application built to facilitate the profit analysis, project cost analysis, and review the logtime of each employee at PT. GITS Indonesia. This was the first time I pursued the field of frontend development through my participation in Magang Merdeka.', tech: ['Vue.js', 'TailwindCSS', 'Vuetify', 'HighCharts', 'TypeScript'], secret: true, done: true, git: '', url: 'https://msib-gpp.gits.app', email: '', pass: '' },
]

const copy_state = ref<Record<string, { text: string, state: boolean }>[]>([...Array(project.length)].map((i) => { return { email: { text: 'Copy Email', state: false }, pass: { text: 'Copy Password', state: false } } }))
const copy = async (i: number, type: string) => {
    await navigator.clipboard.writeText(project[i][type])
    copy_state.value.forEach((x, idx) => copy_state.value[idx] = { email: { text: 'Copy Email', state: false }, pass: { text: 'Copy Password', state: false } })
    copy_state.value[i][type].state = true
    copy_state.value[i][type].text = `${type == 'email' ? 'Email' : 'Password'} Copied`
    setTimeout(() => {
        copy_state.value[i][type].text = `Copy ${type == 'email' ? 'Email' : 'Password'}`
        copy_state.value[i][type].state = false
    }, 3000)
}

const modal = reactive({ container: false, box: false })
const modalImg = ref('')
const openModal = (i: number) => {
    document.body.style.overflow = 'hidden'
    modalImg.value = project[i].image
    modal.container = true;
    setTimeout(() => {
        modal.box = true
    }, 100)
}

const closeModal = () => {
    modal.box = false;
    setTimeout(() => {
        modal.container = false
        document.body.style.overflow = 'auto'
    }, 300)
}

const user_email = ref('')
const user_name = ref('')
const message = ref('')

const schema = yup.object({
    user_name: yup.string().required('full name is required'),
    user_email: yup.string().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'please type a valid email').required('email is required'),
    message: yup.string().required('message is required'),
})

const loading = ref(false)
const toast = reactive({ success: false, error: false })
const text = ref('')
const hasSend = ref(false)
const revision = ref(false)
const animation = ref(false)

watch([user_email, user_name, message], () => {
    if (user_email.value !== '' && user_name.value !== '' && message.value !== '') animation.value = true;
    else animation.value = false
})

const sendEmail = async () => {
    loading.value = true
    try {
        const form: any = document.getElementById('form')
        await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form, import.meta.env.VITE_USER_ID)
        toast.success = true
        text.value = '✓ Your message has been sent successfully'
    } catch (error: any) {
        toast.error = true
        error.text.includes('http') ? text.value = error.text.split('.')[0] : text.value = (error.text || 'Network issue. Please check your internet connection before.')
    }
    loading.value = false
    hasSend.value = true
    revision.value = false
    animation.value = false
}

const reset = () => {
    hasSend.value = false;
    if (toast.success) {
        user_name.value = ''
        user_email.value = ''
        message.value = ''
    }
    if (toast.error) {
        revision.value = true
        animation.value = true
    }
    toast.error = false;
    toast.success = false;
}

const social: Record<string, string> = { 'Github': 'https://github.com/fajarmaulana-dev', 'Whatsapp': 'https://wa.me/6285842039127', 'Linkedin': 'https://www.linkedin.com/in/fajar-maulana-16b98b152', 'Facebook': 'https://web.facebook.com/profile.php?id=100090702398845' }
</script>

<template>
    <div
        class="fixed z-[2] flex items-center justify-between h-16 w-full top-0 left-0 bg-[rgb(10,25,47)]/50 backdrop-blur-lg px-7 sd:px-10 sm:px-9 lg:px-[3.75rem]">
        <a class="h-10" href="#" aria-label="home" data-aos="fade-right" data-aos-duration="2000">
            <img src="@/assets/fdev.avif" width="29" height="40" alt="logo" class="h-full">
        </a>
        <div class="hidden sm:flex justify-end items-center gap-5 lg:gap-6" data-aos="fade-left"
            data-aos-duration="2000">
            <Menus />
        </div>
        <button class="dmon font-medium block sm:hidden tracking-wider text-cyan-300 z-[3]" @click="open = !open"
            data-aos="fade-left" data-aos-duration="2000">{{ open ? 'Close' : 'Menu' }}</button>
        <div :class="open ? 'left-0 opacity-100' : '-left-full opacity-30'" style="transition: left .65s, opacity .65s;"
            class="fixed flex flex-col items-end mini justify-center px-5 xs:px-10 sm:hidden top-0 h-screen w-full bg-[rgb(10,25,47)] z-[2]">
            <Menus mini @select="open = false" />
        </div>
    </div>
    <div class="link !hidden sm:!block">
        <div data-aos="fade-up" data-aos-duration="2000"
            class="z-[2] text-2xl flex flex-col gap-2 items-center fixed text-gray-200 bottom-0 left-[2.5rem] lg:left-[4rem]">
            <div v-for="i in Object.keys(social)" class="flex flex-col gap-2 items-center">
                <div class="relative">
                    <a :href="social[i]" :aria-label="i" target="_blank"
                        class="peer fab [transition:.4s] hover:text-cyan-300"
                        :class="`fa-${i.toLowerCase()}${i.startsWith('L') ? '-in' : ''}`"></a>
                    <b
                        class="peer-hover:opacity-100 [transition:.4s] opacity-0 absolute whitespace-nowrap top-[calc(50%-.55rem)] left-[calc(100%+.5rem)] rounded tracking-widest py-0.5 px-2 text-xs viet min-w-fit bg-cyan-300 font-black text-slate-900">
                        {{ i }}</b>
                </div>
                <hr class="bg-gray-200 h-[4.5rem] w-[1px]" />
            </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" class="fixed  -right-[11.25rem] lg:-right-40 bottom-52">
            <div class="rotate-90 text-xl flex gap-2 items-center text-gray-200">
                <a href="mailto:fajarmaulana.dev@gmail.com"
                    class="dmon hover:text-cyan-300 [transition:.4s] tracking-[.2rem]">fajarmaulana.dev@gmail.com</a>
                <hr class="bg-gray-200 w-[4rem] h-[.1rem]" />
            </div>
        </div>
    </div>
    <div class="bg-[rgb(10,25,47)] px-7 sd:px-10 sm:px-28 lg:px-40 pb-4">
        <div class="pt-[calc(5.5rem+5.5vw)] pb-[calc(9rem+8vw)]" data-aos="fade-down" data-aos-duration="2000">
            <h1 class="mb-1.5 dmon text-cyan-300 text-sm sd:text-base md:text-lg">Hi, I am</h1>
            <div
                class="viet clip bg-gradient-to-b from-gray-200 to-slate-400 [&>h1]:font-bold [&>h1]:text-[1.65rem] [&>h1]:leading-[2rem] xs:[&>h1]:text-[1.9rem] xs:[&>h1]:leading-[2.5rem] sd:[&>h1]:text-[2.9rem] sd:[&>h1]:leading-[3.5rem] md:[&>h1]:text-[3.7rem] md:[&>h1]:leading-[4.3rem] lg:[&>h1]:text-[4rem] lg:[&>h1]:leading-[4.5rem] xl:[&>h1]:text-[4.25rem] xl:[&>h1]:leading-[4.75rem]">
                <h1 id="typer"
                    class="min-h-[2rem] xs:min-h-[2.5rem] sd:min-h-[3.5rem] md:min-h-[4.3rem] lg:min-h-[4.5rem] xl:min-h-[4.75rem]">
                </h1>
                <h1>Let's build your dream <span class="whitespace-nowrap">web !</span></h1>
                <h2 class="text-sm sd:text-base md:text-lg mt-2 md:w-[80%] lg:w-[70%]">
                    I am a web developer with high passion to build a high-performance web app. I can't do your live
                    code in
                    just a few minutes, but I can make the app you want in several sprints.
                </h2>
            </div>
            <div
                class="flex flex-col-reverse xs:flex-row gap-x-3 gap-y-2.5 w-full xs:w-fit dmon text-base xs:text-lg md:text-xl [&>*]:border-2 [&>*]:border-cyan-300 [&>*]:px-4 md:[&>*]:px-5 [&>*]:py-2.5 md:[&>*]:py-3 [&>*]:rounded-xl [&>*]:[transition:.4s] [&>*]:grid [&>*]:place-items-center mt-6">
                <a class="bg-cyan-300 text-slate-900 font-bold shadow-[0_0_1.5rem_2px_#22d3ee] hover:shadow-[0_0_2rem_2px_#22d3ee] active:shadow-[0_0_1.5rem_2px_#22d3ee]"
                    :href="getAssets('resume.pdf')" target="_blank">Get Resume!</a>
                <a href="#contact" class="text-cyan-300 font-medium hover:bg-cyan-950 active:bg-transparent">Say
                    Hello</a>
            </div>
        </div>
        <div id="about" class="pt-[calc(3.5rem+2.5vw)] pb-[calc(5rem+4vw)]">
            <h2 class="viet text-gray-200 text-3xl sd:text-4xl font-bold mb-6"><span
                    class="dmon text-cyan-300 text-2xl sd:text-3xl">01.</span>
                About Me
            </h2>
            <div data-aos="fade-up" data-aos-duration="2000"
                class="flex flex-col-reverse xl:flex-row gap-x-16 gap-y-8 items-center">
                <div class="viet text-sm sd:text-base md:text-lg font-light text-slate-300 [&_span]:text-cyan-300">
                    <p>
                        Hi, my name is <span>Fajar</span>. I just a <span>Mathematician</span> who also has an interest
                        in
                        <span>Software Development and Deep Learning</span>. I started this interest <span>since</span>
                        the beginning of <span>2021</span> through the <span>Bangkit and Certified Internship
                            Programs</span>. I am passionate about learning new technologies and building beautiful
                        views.
                    </p>
                    <p class="my-3">Here are few technologies I've been working recently</p>
                    <div
                        class="dmon flex flex-wrap gap-x-12 sd:gap-x-16 gap-y-4 translate-x-5 pr-5 text-xs sd:text-sm md:text-base">
                        <ul v-for="x in tech" class="list-disc">
                            <li v-for="y in x">{{ y }}</li>
                        </ul>
                    </div>
                </div>
                <div
                    class="relative z-0 w-44 sd:min-w-[18rem] h-44 sd:h-72 rounded-md border-[3px] border-cyan-300 [&>*]:-translate-x-4 [&>*]:translate-y-4 [&>*]:rounded-md">
                    <img src="@/assets/mypict.avif" width="288" height="288" alt="mypict" class="h-full">
                    <span class="absolute inset-0 bg-cyan-300/60 hover:opacity-0 [transition:.5s]"></span>
                </div>
            </div>
        </div>
        <div id="work" class="pt-[calc(3.5rem+2.5vw)] pb-[calc(5rem+4vw)] lg:grid place-items-center">
            <div class="w-full lg:w-[70%]">
                <h2 class="viet text-gray-200 text-3xl sd:text-4xl font-bold mb-6"><span
                        class="dmon text-cyan-300 text-2xl sd:text-3xl">02.</span>
                    Where I've Worked
                </h2>
                <div data-aos="fade-up" data-aos-duration="2000">
                    <div class="max-w-full overflow-x-auto flex font-semibold pb-2 sc-h">
                        <label v-for="i in Object.keys(work_data)" :for="`work-${i}`" class="check py-2.5">
                            <input type="radio" :value="i" :checked="work == i" @input="work = i" :id="`work-${i}`"
                                name="work" class="peer">
                            <span style="transition: background-color .4s, padding .4s;"
                                class="whitespace-nowrap tracking-widest px-12 py-2.5 dmon text-slate-300 hover:bg-cyan-950 peer-checked:bg-cyan-950 peer-checked:border-b-[3px] peer-checked:px-8 border-cyan-300 cursor-pointer">
                                {{ i.split(' - ')[0] }}</span>
                        </label>
                    </div>
                    <div class="py-5">
                        <h3 class="dmon text-cyan-300 font-bold tracking-widest mb-1">{{ work }}</h3>
                        <p class="viet text-slate-300 font-light">{{ work_data[work] }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="project" class="pt-[calc(3.5rem+2.5vw)] pb-[calc(2.5rem+1.5vw)] lg:px-[calc(2.5rem+2.5vw)]">
            <h2 class="viet text-gray-200 text-3xl sd:text-4xl font-bold mb-6"><span
                    class="dmon text-cyan-300 text-2xl sd:text-3xl">03.</span>
                Some Things I Built
            </h2>
            <div class="flex flex-col gap-[calc(2.5rem+2vw)] md:gap-[calc(4.5rem+4vw)]">
                <div v-for="x, y in project" :key="y" data-aos="fade-up" data-aos-duration="1500"
                    class="viet md:bg-transparent px-6 py-4 md:py-1 md:px-0 relative flex flex-col justify-start">
                    <div
                        class="z-[1] font-bold tracking-wider mb-3.5 flex flex-col md:flex-row md:items-center gap-x-2.5 gap-y-1.5">
                        <h3 class="text-xl text-gray-300 md:text-2xl">{{ x.name }}</h3>
                        <div
                            class="flex flex-wrap gap-x-2.5 gap-y-1.5 [&>*]:text-xs md:[&>*]:text-sm [&>*]:py-1 [&>*]:px-3 [&>*]:text-slate-950 md:[&>*]:border-[3px] [&>*]:border-[rgb(10,25,47)] [&>*]:rounded-full hover:[&>button]:bg-sky-400 [&>button]:[transition:.4s]">
                            <span class="bg-rose-300" v-if="x.secret">secret</span>
                            <span class="bg-orange-300" v-if="!x.done">on progress</span>
                            <button v-if="x.email !== ''" :disabled="copy_state[y].email.state"
                                :class="copy_state[y].email.state ? 'bg-sky-400 cursor-not-allowed' : 'bg-sky-300'"
                                @click="copy(y, 'email')">{{ copy_state[y].email.text }}</button>
                            <button v-if="x.pass !== ''" :disabled="copy_state[y].pass.state"
                                :class="copy_state[y].pass.state ? 'bg-sky-400 cursor-not-allowed' : 'bg-sky-300'"
                                @click="copy(y, 'pass')">{{ copy_state[y].pass.text }}</button>
                        </div>
                    </div>
                    <p
                        class="md:p-6 md:bg-[rgb(17,34,64)] z-[1] text-slate-300 w-full md:w-[calc(30rem+5vw)] text-sm md:text-base md:font-light">
                        <span v-if="x.email !== ''" class="text-sky-300 font-bold">
                            Copy the email and password above to login.</span>
                        {{ x.desc }}
                    </p>
                    <div
                        class="flex items-center justify-end md:justify-start mt-4 gap-2 sm:gap-2.5 text-sm text-cyan-300 dmon z-[1] flex-wrap md:w-[calc(30rem+5vw)]">
                        <span v-for="i in x.tech" class="tracking-wider py-1.5 px-3 rounded-full bg-[rgb(35,53,84)]">
                            {{ i }}</span>
                    </div>
                    <div
                        class="flex justify-end md:justify-start z-[1] gap-5 mt-4 mr-2 md:ml-2 md:mr-0 text-slate-300 [&>*]:relative hover:[&>div>:not(b)]:text-cyan-300 [&>div>:not(b)]:cursor-pointer [&>div>*]:[transition:.4s] [&_b]:opacity-0 [&_b]:absolute [&_b]:whitespace-nowrap [&_b]:top-[calc(100%+.25rem)] [&_b]:right-0 md:[&_b]:left-0 [&_b]:rounded [&_b]:tracking-widest [&_b]:py-0.5 [&_b]:px-2 [&_b]:text-xs [&_b]:viet [&_b]:min-w-fit [&_b]:bg-cyan-300 [&_b]:font-black [&_b]:text-slate-900">
                        <div>
                            <a v-if="!x.secret && x.git !== ''" :href="x.git" target="_blank"
                                :aria-label="`${x.name} git url`"
                                class="peer fab fa-github text-[1.25rem] leading-[1.7rem] md:text-[1.4rem] md:leading-7"></a>
                            <b class="peer-hover:opacity-100">Open Repo</b>
                        </div>
                        <div>
                            <i @click="openModal(y)"
                                class="peer fas fa-up-right-and-down-left-from-center text-lg md:text-xl"></i>
                            <b class="peer-hover:opacity-100">Open Full Image</b>
                        </div>
                        <div>
                            <a v-if="x.done && x.url !== ''" :href="x.url" target="_blank" :aria-label="`${x.name} url`"
                                class="peer fas fa-up-right-from-square text-lg md:text-xl"></a>
                            <b class="peer-hover:opacity-100">Open App</b>
                        </div>
                    </div>
                    <div class="absolute right-0 z-0 w-full md:w-[60%] inset-y-0">
                        <img loading="lazy" :src="x.image" :alt="x.name" class="object-cover object-top w-full h-full">
                    </div>
                    <div
                        class="absolute right-0 z-0 bg-[rgb(17,34,64)]/80 md:bg-cyan-300/60 hover:md:bg-transparent [transition:.5s] w-full md:w-[60%] inset-y-0">
                    </div>
                </div>
            </div>
            <section @click="closeModal()"
                class="fixed z-[2] h-screen w-screen bg-cyan-300/10 top-0 left-0 p-[calc(1.9rem+1.9vw)]"
                :class="modal.container ? 'block' : 'hidden'" style="transition: .1s; transition-delay: .1s;">
                <div :class="modal.box ? 'scale-100' : 'scale-0'" style="transition: .3s; max-width: 1440px;"
                    class="w-full h-full m-auto transform-gpu bg-slate-900 rounded-lg flex items-center justify-center shadow-[0_0_20px_1px] shadow-cyan-400/50 relative overflow-hidden">
                    <div class="w-full h-full grid place-items-center overflow-y-auto">
                        <img loading="eager" :src="modalImg" class="select-none w-[100%]" alt="zoomed image" />
                    </div>
                    <div style="transition: .4s;" @click="closeModal()"
                        class="fixed select-none -top-8 -right-8 w-16 h-16 bg-cyan-300 opacity-90 hover:opacity-100 active:opacity-90 text-slate-900 grid place-items-center rounded-full font-black cursor-pointer text-sm">
                        <span class="-translate-x-[.8rem] translate-y-[.85rem]">
                            <i class="fas fa-xmark text-lg"></i>
                        </span>
                    </div>
                </div>
            </section>
        </div>
        <div id="contact" class="pt-[calc(6rem+5vw)] pb-[calc(3rem+2.5vw)] grid place-items-center" data-aos="fade-up"
            data-aos-duration="2000">
            <div class="sm:w-[80%] lg:w-[35rem] flex flex-col items-center">
                <h2 class="dmon text-cyan-300 sd:text-lg tracking-wide">04. What's Next?</h2>
                <h2 class="viet text-gray-200 text-3xl sd:text-4xl font-bold">Get In Touch</h2>
                <p class="text-center viet md:text-lg text-slate-300 font-light my-8">
                    I'm currently looking for any new opportunities, my inbox is always open. Whatever you have a
                    question
                    or just to say hi, i'll try my best to get back to you</p>
                <div v-if="hasSend" class="flex flex-col items-center gap-4">
                    <p class="text-center viet md:text-lg font-bold"
                        :class="toast.success ? 'text-emerald-300' : toast.error ? 'text-amber-300' : 'text-gray-200'">
                        {{ text }}</p>
                    <button
                        class="py-1.5 px-4 border-2 border-cyan-300 rounded-md text-cyan-300 tracking-wider font-medium dmon hover:bg-cyan-950 [transition:.4s]"
                        @click="reset()">{{ toast.success ? 'Send More Message' : toast.error ? 'Try Again ?' : '' }}
                    </button>
                </div>
                <Form v-else class="w-full" id="form" :validation-schema="schema" v-slot="{ meta }">
                    <div class="flex flex-col gap-7 w-full">
                        <Field v-slot="{ field, errorMessage }" name="user_name">
                            <div>
                                <TextLine v-model="user_name" id="user_name" placeholder="Full Name" width="w-44"
                                    :="field" />
                                <p class="text-left text-rose-300 text-xs mt-1 viet">{{ errorMessage }}</p>
                            </div>
                        </Field>
                        <Field v-slot="{ field, errorMessage }" name="user_email">
                            <div>
                                <TextLine v-model="user_email" id="user_email" placeholder="Email" width="w-44"
                                    :="field" />
                                <p class="text-left text-rose-300 text-xs mt-1 viet">{{ errorMessage }}</p>
                            </div>
                        </Field>
                        <Field v-slot="{ field, errorMessage }" name="message">
                            <div>
                                <TextLine is="area" v-model="message" id="message" placeholder="Message" width="w-44"
                                    :="field" />
                                <p class="text-left text-rose-300 text-xs viet">{{ errorMessage }}</p>
                            </div>
                        </Field>
                    </div>
                    <button type="button" @click.prevent="sendEmail()"
                        :disabled="(!(meta.valid && meta.dirty) || loading) && !revision"
                        :class="(!(meta.valid && meta.dirty) || loading) && !revision ? 'cursor-not-allowed' : 'hover:opacity-100'"
                        class="h-10 mt-4 w-full rounded-md bg-cyan-300 shadow shadow-cyan-400 text-[rgb(10,25,47)] text-lg dmon tracking-wider font-bold opacity-90 [transition:.4s] grid place-items-center">
                        <span>Send Message</span>
                    </button>
                </Form>
            </div>
        </div>
        <div :class="loading ? 'bottom-0 opacity-100' : '-bottom-[calc(100%+4rem)] opacity-30'"
            style="transition: bottom .65s, opacity .65s;"
            class="fixed left-0 h-screen w-full bg-[rgb(10,25,47)] z-[4]">
            <div v-if="animation" class="h-full w-full overflow-hidden relative flex items-center justify-center scene">
                <i v-for="i in Math.floor(screenWidth / 18)" class="star absolute -top-4 w-0.5 bg-cyan-100 rounded-full"
                    :style="`height: ${25 + (Math.random() * 100)}px; left: ${Math.floor(Math.random() * screenWidth)}px; animation-duration: ${(Math.random() * 100) + 1}s`"></i>
                <span class="flare absolute -translate-x-[5px] -translate-y-[100px]"></span>
                <span class="dmon text-cyan-300 absolute translate-y-[130px] xs:text-lg bg-[rgb(10,25,47)] font-medium">
                    Your message is being sent ...</span>
                <i class="fas fa-rocket text-[5rem] text-gray-200 relative rocket"></i>
            </div>
        </div>
        <div class="pt-[calc(1.5rem+1vw)] text-slate-300">
            <div
                class="flex sm:hidden items-center justify-center text-xl sd:text-2xl gap-6 sd:gap-8 mb-2 hover:[&>*]:text-cyan-300 [&>*]:[transition:.4s]">
                <a v-for="i in Object.keys(social)" :href="social[i]" :aria-label="i" target="_blank" class="peer fab"
                    :class="`fa-${i.toLowerCase()}${i.startsWith('L') ? '-in' : ''}`"></a>
                <a class="fas fa-at" href="mailto:fajarmaulana.dev@gmail.com" aria-label="mail me"></a>
            </div>
            <p class="dmon justify-center items-center text-sm sd:text-base flex flex-col sd:flex-row">
                Crafted by Fajar Maulana
                <span class="hidden sd:block">&nbsp;© {{ new Date().getFullYear() }}</span>
                <span class="block sd:hidden">{{ new Date().getFullYear() }}</span>
            </p>
        </div>
    </div>
</template>

<style scoped>
.clip {
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
}

@media screen and (min-height: 33.75rem) {
    .link {
        display: block;
    }
}

@media screen and (max-height: 33.749rem) {
    .link {
        display: none !important;
    }
}

@media screen and (max-height: 37.5rem) {
    .mini {
        column-gap: 3rem;
        row-gap: 2rem;
    }
}

@media screen and (min-height: 37.6rem) {
    .mini {
        gap: 4rem;
    }
}

.rocket {
    animation: animate .2s ease infinite;
}

@keyframes animate {

    0%,
    100% {
        transform: translateY(-102px) rotate(-45deg);
    }

    50% {
        transform: translateY(-98px) rotate(-45deg);
    }
}

.flare::before,
.flare::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 13rem;
    border-radius: 7px;
    background: linear-gradient(rgb(103, 232, 249), transparent)
}

.flare::after {
    filter: blur(20px);
}

.star {
    animation: star linear infinite;
}

@keyframes star {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(100vh);
    }
}
</style>