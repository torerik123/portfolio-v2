<template>
	<v-app id="inspire">
		<TheHeader 
			:highlight-section="currentSection"
		/>
		<v-main>
			<v-container>
				<!-- Intro  -->
				<v-card
					v-intersect="onIntersect"
					color="transparent"
					class="elevation-0"
				>
					<IntroSection id="about" />	
				</v-card>

				<!-- Experience  -->
				<v-card
					id="experience"
					v-intersect="onIntersect"
					color="transparent"
					class="elevation-0 mb-12"
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

				<!-- Projects  -->
				<v-lazy>
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
				</v-lazy>

				<!-- Contact  -->
				<v-card 
					id="contact" 
					v-intersect="onIntersect"
					color="transparent"
				>
					<SectionHeader text="TODO => Contact" />
				</v-card>
			</v-container>
		</v-main>
	</v-app>
</template>
  
<script setup>
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

const onIntersect = (isIntersecting, entries, observer) => {
		// if (isIntersecting) {
		// }
		// currentSection.value = entries[0].target.id
		// console.log("Entries!", entries[0].target.id)
}
</script>