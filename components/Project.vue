<template>
	<v-row dense>
		<v-col cols="6">
			<v-img
				class="rounded-lg"
				height="400" width="600"
				cover
				src="https://torerik123.github.io/portfolio/static/images/AP.jpg"
			>
			</v-img>
		</v-col>
		<v-col cols="6">
			<v-card style="height: 100%">
				<v-card-title>Project name</v-card-title>
				<v-card-subtitle>
					<v-row dense>
						<v-col cols="auto">
							<v-chip class="mr-1">Vue</v-chip>
						</v-col>
						<v-col cols="auto">
							<v-chip class="mx-1">Nuxt</v-chip>
						</v-col>
						<v-col cols="auto">
							<v-chip class="mx-1">Firebase</v-chip>
						</v-col>
						<v-col cols="auto">
							<v-chip class="mx-1">DatoCMS</v-chip>
						</v-col>
					</v-row>

				</v-card-subtitle>
				<v-card-text>Here is some info about the project, how to use it etc...</v-card-text>
				<v-card-actions>
					<v-btn>
						Demo
					</v-btn>
					<v-btn>
						Code
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
export default {
	name: "Project",
}
</script>