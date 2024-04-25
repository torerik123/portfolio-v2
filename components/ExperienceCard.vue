<template>
	<v-card
		:title="title"
		:subtitle="subtitle"
		class="rounded-lg elevation-0"
		color="transparent"
		link
	>
		<v-card-text>
			<v-list 
				density="compact"
				elevation="0"
				class="bg-transparent"
			>
				<v-list-item
					v-for="item in description"
					:key="item"
					prepend-icon="mdi-chevron-right" 
					class="v-card-text"
				>{{ item }}</v-list-item>
			</v-list>
		</v-card-text>

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
		type: Array,
		default: () => [],
	},
	technology: {
		type: Array,
		default: () => [],
	}
})
</script>