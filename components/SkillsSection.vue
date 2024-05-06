<template>
	<v-card class="bg-transparent elevation-0 text-body-1">
		<p>
			<span class="text-primary" :class="fontWeight">Languages: </span> 
			Javascript, TypeScript, Python, HTML, CSS, SQL
		</p>
		<p>
			<span class="text-primary" :class="fontWeight">Frameworks: </span>	
			Vue, Nuxt, React, Django, Flask 
		</p>
		<p>
			<span class="text-primary" :class="fontWeight">UI Libraries: </span>
			Vuetify, Bootstrap
		</p>
		<p>
			<span class="text-primary" :class="fontWeight">Database: </span>
			 Supabase/PostgreSQL, Firebase, SQlite
		</p>
		<p>
			<span class="text-primary" :class="fontWeight">Testing: </span>
			Cypress, Vitest
		</p>
		<p>
			<span class="text-primary" :class="fontWeight">Version Control:</span>
			Git, Github
		</p>
	</v-card>
</template>

<script setup>
const fontWeight = ref("font-weight-black")
</script>
