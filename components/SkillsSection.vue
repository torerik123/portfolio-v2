<template>
	<v-card 
		class="bg-transparent elevation-0"
	>
		<!-- <div 
			v-for="skill in skills" 
			:key="skill.title"
		>
			<v-card-title class="text-primary" :class="fontWeight">{{ skill.title }}</v-card-title>
			<v-card-subtitle class="text-body-1">{{ skill.value }}</v-card-subtitle>
		</div> -->

		<v-list 
			class="py-0 bg-transparent"
			lines="two"
			role="list"
			aria-label="skills-section"
		>
			<v-list-item
				v-for="skill in skills" 
				:key="skill.title" 
				class="py-0"
				role="listitem"
				:aria-label="skill.title"
			>
				<v-list-item-title class="text-primary text-body-1" :class="fontWeight">{{ skill.title }}</v-list-item-title>
				<v-list-item-subtitle 
					class="text-body-1"
					style="line-height: 1.3rem;"
				>{{ skill.value }}</v-list-item-subtitle>
			</v-list-item>
		</v-list>
		
	</v-card> 
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

const fontWeight = ref("font-weight-black")

interface skillItem {
	title: string
	value: string
}

const skills: Ref<skillItem[]> = ref([
	{
		title: "Languages" ,
		value: "Javascript, TypeScript, Python, HTML, CSS, SQL"
	},
	{
		title: "Frameworks" ,
		value: "Vue, Nuxt, React, Django, Flask",
	},
	{
		title: "UI Libraries" ,
		value: "Vuetify, Bootstrap",
	},
	{
		title: "Database" ,
		value: "Supabase, PostgreSQL, Firebase, SQlite",
	},
	{
		title: "Testing" ,
		value: "Cypress, Vitest",
	},
	{
		title: "Version control" ,
		value: "Git, Github",
	},
]) 
</script>