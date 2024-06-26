<template>
	<v-app id="app">
		<ClientOnly>
			<v-navigation-drawer v-model="menu" temporary location="right"
				style="background-color: rgb(var(--v-theme-background));">
				<v-list-item v-for="btn in navBtns" :key="btn.text" link @click="scroll(btn.selector)" :id="btn.id">
					<v-list-item-title class="text-overline">{{ btn.text }}</v-list-item-title>
				</v-list-item>
			</v-navigation-drawer>
		</ClientOnly>

		<ClientOnly>
			<TheHeader :highlight-section="currentSection" @toggle-menu="toggleMenu" :nav-items="navBtns"
				@scroll="scroll" />
		</ClientOnly>

		<v-main>
			<v-row dense justify="center">
				<v-col cols="12" md="10" lg="8">
					<v-container fluid>
						<div class="d-flex align-start">
							<div style="margin-top: 100px; margin-bottom: 150px;">
								<!-- Intro  -->
								<v-sheet id="about" v-intersect="{
									handler: onIntersect,
									options: {
										intersectOptions
									}
								}" color="transparent" style="margin-bottom: 80px;" data-aos="zoom-in-right">
									<v-row no-gutters>
										<v-col>
											<IntroSection />
										</v-col>
									</v-row>
								</v-sheet>

								<!-- About  -->
								<v-sheet color="transparent" data-aos="fade-up">
									<v-row align="center" style="height: 100%;" no-gutters class="mb-12">
										<v-col>
											<ClientOnly>
												<AboutSection :text=aboutText />
											</ClientOnly>
										</v-col>
									</v-row>
								</v-sheet>

							</div>
						</div>

						<!-- Experience  -->
						<v-sheet color="transparent" style="margin-bottom: 150px;">
							<v-sheet id="experience" v-intersect="{
								handler: onIntersect,
								options: {
									intersectOptions
								}
							}" color="transparent" class="mb-12" data-aos="fade-right">
								<SectionHeader text="Experience" />
								<ExperienceCard v-for="card in experience" :key="card.title" :title="card.title"
									:subtitle="card.subtitle" :description="card.description"
									:technology="card.technology" />
							</v-sheet>
						</v-sheet>

						<!-- Projects  -->
						<v-sheet id="projects" v-intersect="{
							handler: onIntersect,
							options: {
								intersectOptions
							}
						}" color="transparent" style="margin-bottom: 150px;">
							<SectionHeader text="Projects" data-aos="fade-right"></SectionHeader>

							<v-row align="center">
								<v-col>
									<ProjectCard data-aos="fade-right" v-for="project in projects" :key="project.name"
										:name="project.name" :description="project.description" :stack="project.stack"
										:img="project.img" :lazy="project?.lazy_src" :github="project.github"
										:demo="project.demo" class="mb-10" />
								</v-col>
							</v-row>
						</v-sheet>

						<!-- Contact  -->
						<v-sheet data-aos="fade-right" id="contact" v-intersect="{
							handler: onIntersect,
							options: {
								intersectOptions
							}
						}" color="transparent">
							<ContactForm class="pb-12" />
						</v-sheet>
					</v-container>
				</v-col>
			</v-row>

			<v-divider></v-divider>
			<ClientOnly>
				<TheFooter @scroll="scroll" />
			</ClientOnly>
		</v-main>
	</v-app>
</template>
  
<script setup lang="ts">
import { ref, type Ref } from "vue"

useSeoMeta({
	description: 'Norwegian frontend-developer',
	ogTitle: 'Tor Erik Grimen',
	ogDescription: 'Norwegian frontend-developer',
	ogImage: 'https://grimen.io/OGIMAGE.png',
	ogUrl: 'grimen.io',
	twitterTitle: 'Tor Erik Grimen',
	twitterDescription: 'Norwegian frontend-developer',
	twitterImage: '[twitter:image]',
	twitterCard: 'summary'
})

useHead({
	htmlAttrs: {
		lang: 'en'
	},
	title: "Tor Erik Grimen",
	link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],	
})

interface NavBtn {
	text: string
	selector: string
	id: string
}

interface ExperienceCard {
	title: string
	subtitle: string
	description: string[]
	technology: string[]
}

interface ProjectCard {
	name: string
	description: string
	stack: Array<string>
	img?: string
	demo?: string
	github?: string
	lazy_src?: string
}

// Navigation 
const navBtns: Ref<Array<NavBtn>> = ref([
	{ text: "About", selector: "#about", id: "nav-about" },
	{ text: "Experience", selector: "#experience", id: "nav-experience" },
	{ text: "Projects", selector: "#projects", id: "nav-projects" },
	{ text: "Contact", selector: "#contact", id: "nav-contact" },
])


// TODO => Move to CMS 
type AboutSection = Array<string>

const aboutText: Ref<AboutSection> = ref([
	"I like to build cool stuff on the web that brings value to people. My main area of expertise is Vue but I have also worked with other frameworks like React and Django.",
	"A good user experience is important to me, and knowing that my code solves real problems for people keeps me motivated. In my spare time, I like experimenting with new technologies and building small software tools.",
	"Beyond coding, I spend a lot of time in the gym and occasionally compete in olympic weightlifting. I love spending time outdoors, whether it's hiking, climbing, camping, surfing, snowboarding, or fishing. I’m also a bedroom DJ and amateur music producer.",
])

const experience: Ref<Array<ExperienceCard>> = ref([
	{
		title: "Frontend developer - Invid",
		subtitle: "2022 - present",
		description: [
			"Developed new features and improved existing code for a SaaS-product used by transport companies",
			"Worked primarily with Javascript, HTML, CSS and frameworks Vue and Nuxt",
			"Migrated entire codebase from Vue 2/Nuxt 2 to Vue 3/Nuxt 3",
			"End to end testing using Cypress",

		],
		technology: ["JavaScript", "Vue", "Nuxt", "HTML & CSS", "Cypress"],
	}
])

const projects: Ref<Array<ProjectCard>> = ref([
	{
		name: "SampleWizard",
		description: "Chrome extension to record browser audio. Designed for music producers using samples in their workflow. Free and paid plan available, where free users are limited to WEBM downloads, and premium users can download as WAV.",
		stack: ["JavaScript", "TypeScript", "Vue", "TypeScript", "Vuetify", "Vite", "Stripe"],
		img: "https://camo.githubusercontent.com/73219b01b5ebbfc6b7cd9e6e97613a0835d86f017d245b66f078855d06aebca6/68747470733a2f2f692e696d6775722e636f6d2f734d6b525539732e706e67",
		demo: "https://chromewebstore.google.com/detail/samplewizard/keipgjjippmankncmhaenioaacgfdpfp?hl=en&authuser=0",
		github: "https://github.com/torerik123/samplewizard",
	},

	{
		name: "Anelill.com",
		description: "Portfolio website for artist Ane Lill to showcase and sell her paintings. The client has full control to customize all content on the site through DatoCMS.",
		stack: ["JavaScript", "Vue", "Vuetify", "Nuxt", "DatoCMS"],
		img: "/anelillcom_screenshot.jpg",
		demo: "https://anelill.com",
		github: "https://github.com/torerik123/anelill-v2",
	},

	{
		name: "MPC",
		description: "Drum machine made in React using Howler.js. Design inspired by the AKAI MPC500. Use the keyboard to play sounds or click the pads. The pad bank stores different drum kits and allows the user to switch drumkits. The drumkits are made with sounds from soundpacks.com.",
		stack: ["JavaScript", "React"],
		img: "/mpc.jpg",
		demo: "https://torerik123.github.io/mpc/",
		github: "https://github.com/torerik123/mpc",
	},
	{
		name: "Adventure Planner",
		description: "Tool for creating and sharing gear lists for all kinds of adventures. The idea was to create an app for people who are planning long distance trips where packing light and saving weight is essential.",
		stack: ["Python", "JavaScript", "Flask", "PostgreSQL", "Bootstrap"],
		img: "https://torerik123.github.io/portfolio/static/images/AP.jpg",
		github: "https://github.com/torerik123/adventureplanner",
		demo: "",
	},
]
)

const currentSection = ref("")
const menu: Ref<boolean> = ref(false)

const toggleMenu = (): void => {
	menu.value = !menu.value
}

const scroll = (selector: string): void => {
	const el = document.querySelector(selector)

	if (selector === 'top') {
		window.scrollTo({ top: 0, behavior: "smooth" })
	} else {
		const elementPosition = el?.getBoundingClientRect().top
		const headerOffset = 100
		const offsetPosition = elementPosition ? elementPosition + window.scrollY - headerOffset : 0
		window.scrollTo({ top: offsetPosition, behavior: "smooth" })
	}
}

const intersectOptions = ref({
	quiet: true,
	threshold: [0, 0.5, 1.0]
})

const onIntersect = (isIntersecting: boolean, entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
	// TODO: Only one btn can be active
	// Dont trigger before scroll

	// const sectionId = entries[0].target.id
	// const navBtn = document.querySelector("#nav-" + sectionId)

	// if (isIntersecting) {
	// 	console.log("SECTION: ", sectionId)
	// 	navBtn.classList.add("text-primary")
	// } else {
	// 	navBtn.classList.remove("text-primary")
	// }
}
</script>

<style>
/* .gradient {
	background: radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%);
} */
</style>