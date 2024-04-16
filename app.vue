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
		
		<TheHeader 
			:highlight-section="currentSection"
			@toggle-menu="toggleMenu"
			:nav-items="navBtns"
			@scroll="scroll"
		/>
			
		<v-main>
			<v-container>
				<!-- Intro  -->
				<v-card
					v-intersect="onIntersect"
					color="transparent"
					class="elevation-0"
					height="600"
					style="margin-bottom: 100px;"
				>
					<v-row
						align="center"
						style="height: 100%;"
						no-gutters
					>
						<v-col>
							<IntroSection 
								id="about"
							/>	
						</v-col>
					</v-row>
				</v-card>

				<!-- Experience  -->
				<v-sheet 
					color="transparent"
					height="500"
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
					<SectionHeader text="TODO => Contact" />
				</v-card>
			</v-container>
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
			name: "Adventure Planner",
			description: "Here is some info about the project, how to use it etc...",
			stack: ['Vue', 'Nuxt', 'Firebase', 'DatoCMS'],
			img: "https://torerik123.github.io/portfolio/static/images/AP.jpg",
		},
		{
			name: "222222",
			description: "asdasdasdasd about the project, how to use it etc...",
			stack: ['Vue', 'Nuxt', 'Firebase', 'DatoCMS'],
			img: "https://torerik123.github.io/portfolio/static/images/AP.jpg",
		},
	]
)

const currentSection = ref("")
const menu = ref(false)

const toggleMenu = () => {
	menu.value = !menu.value
}

const scroll = (selector) => {
	// TODO => Offset by header height ??
	if (selector === 'top') {
		window.scrollTo({ top: 0, behavior: "smooth"  })
	} else {
		console.log("selector", selector)
		document.querySelector(selector).scrollIntoView({ behavior: "smooth" })
	}
}

const onIntersect = (isIntersecting, entries, observer) => {
		// if (isIntersecting) {
		// }
		// currentSection.value = entries[0].target.id
		// console.log("Entries!", entries[0].target.id)
}
</script>