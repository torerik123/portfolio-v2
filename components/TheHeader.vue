<template>
	<v-app-bar
		scroll-behavior="elevate"
		dense
		style="background-color: rgb(var(--v-theme-background));"
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
						@click="$emit('scroll', 'top')"
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
						v-for="button in navItems"
						:key="button.text"
						:color="isActive(button.selector) ? 'primary' : ''"
						:text="button.text"
						@click="$emit('scroll', button.selector)"
					/>
				</v-col>
			</ClientOnly>

			<!-- Icons  -->
			<v-col 
				cols="auto"
				class="d-flex"
			>
				<v-btn 
					icon="mdi-github"
					href="https://github.com/torerik123"
					target="_blank" 
				/>

				<ClientOnly>
					<v-btn
						v-if="!$vuetify.display.mdAndUp" 
						icon="mdi-menu"
						@click="$emit('toggle-menu')"	
					/>
				</ClientOnly>
			</v-col>
		</v-row>
	</v-app-bar>
</template>

<script setup lang="ts">
const emits =  defineEmits(["toggle-menu", "scroll"])

// TODO => TS 
// - Fix all TS errors
// - Type declarationg for navBtn type?
// - Functions
const props = defineProps({
	highlightSection: {
		type: String,
		default: "",
	},
	navItems: {
		type: Array,
		default: () => ([])
	}
})

const isActive = (btnName) => {
	const isActive = props.highlightSection.includes(btnName.replace("#", ""))
	return isActive
}
</script>