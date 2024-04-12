<template>
	<v-app-bar
		scroll-behavior="elevate"
		dense
	>
		<v-row
			dense 
			no-gutters 
			class="px-12"
			justify="space-between"
			align="center"
		>
			<!-- Title  -->
			<v-col 
				class="d-flex"
				cols="auto"
			>
				<v-toolbar-title>
					<v-btn 
						text="Tor Erik Grimen"
						@click="scroll('top')"
					/>
				</v-toolbar-title>
			</v-col>

			<!-- Navigation  -->
			<ClientOnly>
				<v-col 
					v-if="$vuetify.display.mdAndUp"
					cols="auto"
				>
					<!-- TODO => Set active color  -->
					<v-btn
						v-for="button in navBtns" 
						:key="button.text"
						:text="button.text"
						@click="scroll(button.selector)"
					/>
				</v-col>
			</ClientOnly>

			<!-- Icons  -->
			<v-col 
				cols="auto"
				class="d-flex"
			>
				<v-btn icon="mdi-github" />

				<ClientOnly>
					<v-btn
					v-if="!$vuetify.display.mdAndUp" 
						icon="mdi-menu" 
					/>
				</ClientOnly>
			</v-col>
		</v-row>
	</v-app-bar>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
// TODO => TS 
// - Type declarationg for navBtn type?
// - Functions

const scroll = (selector) => {

	// TODO => Offset by header height ??
	if (selector === 'top') {
		window.scrollTo({ top: 0, behavior: "smooth"  })
	} else {
		document.querySelector(selector).scrollIntoView({ behavior: "smooth" })
	}
}

const navBtns = ref([
	{
		text: "About",
		selector: "#about",
	},
	{
		text: "Work",
		selector: "#work",
	},
	{
		text: "Projects",
		selector: "#projects",
	},
	{
		text: "Contact",
		selector: "#contact",
	},
])

</script>