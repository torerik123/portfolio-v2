<template>
	<v-app id="inspire">
		<ClientOnly>
			<v-navigation-drawer 
				v-model="menu" 
				temporary
				location="right"
				style="background-color: rgb(var(--v-theme-background));"
			>
				<v-list-item
					v-for="btn in navBtns"
					:key="btn.text"
					link 
					:title="btn.text"
					@click="scroll(btn.selector)"
				/>
			</v-navigation-drawer>
		</ClientOnly>
		
		<ClientOnly>
			<TheHeader 
				:highlight-section="currentSection"
				@toggle-menu="toggleMenu"
				:nav-items="navBtns"
				@scroll="scroll"
			/>
		</ClientOnly>
			
		<v-main>
			<v-row dense justify="center">
				<v-col 
					cols="12"
					md="10"
					lg="8"
				>
					<v-container 
						fluid
					>
						<div class="d-flex align-start">
							<div 
								style="margin-top: 200px; margin-bottom: 150px;"
							>
								<!-- Intro  -->
								<v-card
									v-intersect="onIntersect"
									color="transparent"
									class="elevation-0"
									style="margin-bottom: 80px;"
								>
									<v-row
										no-gutters
									>
										<v-col>
											<IntroSection/>	
										</v-col>
									</v-row>
								</v-card>
								
								<!-- About  -->
								<v-card
									color="transparent"
									class="elevation-0	"	
								>
									<v-row
										align="center"
										style="height: 100%;"
										no-gutters
										class="mb-12"
									>
										<v-col>
											<ClientOnly>
												<AboutSection id="about"/>
											</ClientOnly>	
										</v-col>
									</v-row>
								</v-card>
							</div>
						</div>

						<!-- Experience  -->
						<v-sheet 
							color="transparent"
							style="margin-bottom: 150px;"
						>
							<v-card
								id="experience"
								v-intersect="onIntersect"
								color="transparent"
								class="elevation-0 mb-12 elevation-0"
							>
								<SectionHeader text="Experience" />
								<ExperienceCard 	
									v-for="card in experience"
									:key="card.title" 
									:title="card.title" 
									:subtitle="card.subtitle" 
									:description="card.description" 
									:technology="card.technology" 
								/>
							</v-card>
						</v-sheet>

						<!-- Projects  -->
						<v-card
							id="projects" 
							v-intersect="onIntersect"
							color="transparent"
							class="elevation-0"
							style="margin-bottom: 150px;"
						>
							<SectionHeader text="Projects"></SectionHeader>

							<v-row
								align="center"
							>
								<v-col>
									<ProjectCard 
										v-for="project in projects"
										:key="project.name"
										:name="project.name"
										:description="project.description"
										:stack="project.stack"
										:img="project.img"
										:github="project.github"
										:demo="project.demo"
										class="mb-10"
									/>
								</v-col>
							</v-row>
						</v-card>

						<!-- Contact  -->
						<v-card 
							id="contact" 
							v-intersect="onIntersect"
							color="transparent"
							elevation="0"
						>
							<ContactForm class="pb-12"/>
						</v-card>
					</v-container>
				</v-col>
			</v-row>
		</v-main>
	</v-app>
</template>
  
<script setup>

// Navigation 
const navBtns = ref([
	{ text: "About", selector: "#about", },
	{ text: "Experience", selector: "#experience", },
	{ text: "Projects", selector: "#projects", },
	{ text: "Contact", selector: "#contact", },
])

// TODO => Move to CMS 
const experience = ref([
	{
		title: "Frontend developer - Invid",
		subtitle: "2020 - present",
		description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
		technology: ["Javascript", "Vue", "Nuxt", "HTML & SCSS", "Cypress"],
	}
])

const projects = ref([
		{
			name: "SampleWizard",
			description: "Chrome extension to record browser audio. Designed for music producers using samples in their workflow.",
			stack: ['Vue', 'Vuetify', 'Vite', 'Stripe'],
			img: "https://camo.githubusercontent.com/73219b01b5ebbfc6b7cd9e6e97613a0835d86f017d245b66f078855d06aebca6/68747470733a2f2f692e696d6775722e636f6d2f734d6b525539732e706e67",
			demo: "https://chromewebstore.google.com/detail/samplewizard/keipgjjippmankncmhaenioaacgfdpfp?hl=en&authuser=0",
			github: "https://github.com/torerik123/samplewizard",
		},
		
		{
			name: "Anelill.com",
			description: "Portfolio for artist Ane Lill.",
			stack: ["Vue", "Vuetify", "Nuxt", "DatoCMS"],
			img: "/anelillcom_screenshot.jpg",
			demo: "https://anelill.com",
			github: "https://github.com/torerik123/anelill-v2",
		},

		{
			name: "MPC",
			description: "Drum machine made in React using Howler.js. Design inspired by the AKAI MPC500. Use the keyboard to play sounds or click the pads. The pad bank stores different drum kits and allows the user to swich drumkits. The drumkits are made with sounds from soundpacks.com.",
			stack: ["React"],
			img: "/mpc.jpg",
			demo: "https://torerik123.github.io/mpc/",
			github: "https://github.com/torerik123/mpc",
		},
		{
			name: "Adventure Planner",
			description: "Tool for creating and sharing gear lists for all kinds of adventures. The idea was to create an app for people who are planning long distance trips where packing light and saving weight is essential.",
			stack: ["Flask", "PostgreSQL", "Bootstrap"], 
			img: "https://torerik123.github.io/portfolio/static/images/AP.jpg",
			github: "https://github.com/torerik123/adventureplanner",
			demo: "", 
		},
	]
)

const currentSection = ref("")
const menu = ref(false)

const toggleMenu = () => {
	menu.value = !menu.value
}

const scroll = (selector) => {
	if (selector === 'top') {
		window.scrollTo({ top: 0, behavior: "smooth"  })
	} else {
		const el = document.querySelector(selector)
		const elementPosition = el.getBoundingClientRect().top
		const headerOffset = 100
		const offsetPosition = elementPosition + window.scrollY - headerOffset
		window.scrollTo({ top: offsetPosition, behavior: "smooth"  })
	}
}

const onIntersect = (isIntersecting, entries, observer) => {
		// if (isIntersecting) {
		// }
		// currentSection.value = entries[0].target.id
		// console.log("Entries!", entries[0].target.id)
}
</script>
