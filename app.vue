<template>
	<v-app id="inspire">
		<TheHeader />
		<v-main>
			<v-container>
				<IntroSection></IntroSection>	

				<!-- Projects  -->
				<v-sheet
					id="#projects" 
					color="transparent" 
					height="100vh"
				> 
					<v-row
						align="center"
						style="height: 100%;"
					>
						<v-col>
							<Project 
								v-for="project in projects"
								:key="project.name"
								:name="project.name"
								:description="project.description"
								:stack="project.stack"
								:img="project.img"
								class="mb-10"
							></Project>
						</v-col>
					</v-row>
				</v-sheet>
				

			</v-container>
		</v-main>
	</v-app>
</template>
  
<script>
export default {
	data() {
		return {
			projects: [
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

		}
	},
}
</script>