<template>
	<v-row dense>
		<v-col cols="12">
			<v-card
				style="height: 100%"
				color="transparent"
				class="elevation-0 rounded-lg"
				link
			>
				<v-card-item>
					<v-img
						class="rounded-lg px-8"
						height="400"
						cover
						:src="img"
					/>
				</v-card-item>

				<v-card-title>{{ name }}</v-card-title>
				<v-card-subtitle>
					<v-row dense>
						<v-col
							v-for="item in stack"
							:key="item"
							cols="auto"
						>
							<v-chip 
								variant="outlined" 
								color="primary"
							>
								{{ item }}
							</v-chip>
						</v-col>
					</v-row>
				</v-card-subtitle>

				<v-card-text>{{ description }}</v-card-text>
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
	name: "ProjectCard",

	props: {
		name: {
			type: String,
			default: "",
		},
		stack: {
			type: Array,
			default: () => [],
		},
		description: {
			type: String,
			default: "",
		},
		img: {
			type: String,
			default: "",
		},
	}
};
</script>