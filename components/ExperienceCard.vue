<template>
	<v-card
		:title="title"
		:subtitle="subtitle"
		:text="description"
		class="rounded-lg elevation-0"
		color="transparent"
		link
	>
		<v-card-actions>
			<v-row dense>
				<v-col
					v-for="tech in technology" 
					:key="tech"
					cols="auto"
				>
					<v-chip 
						color="primary"
						variant="outlined"
					>
						{{ tech }}
					</v-chip>
				</v-col>
			</v-row>
		</v-card-actions>
	</v-card>
</template>

<script setup>
const props = defineProps({
	title: {
		type: String,
		default: "",
	},
	subtitle: {
		type: String,
		default: "",
	},
	description: {
		type: String,
		default: "",
	},
	technology: {
		type: Array,
		default: () => [],
	}
})
</script>