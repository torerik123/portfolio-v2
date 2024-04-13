<template>
	<v-row dense>
		<v-col cols="12">
			<v-card
				style="height: 100%"
				color="transparent"
				class="elevation-0"
			>
				<v-img
					class="rounded-lg"
					height="400"
					width="100%"
					cover
					:src="img"
				/>
				<v-card-title>{{ name }}</v-card-title>
				<v-card-subtitle>
					<v-row dense>
						<v-col
							v-for="item in stack"
							:key="item"
							cols="auto"
						>
							<v-chip class="mr-1">
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