<template>
	<v-app-bar
		scroll-behavior="elevate"
		dense
		style="background-color: rgb(var(--v-theme-background));"
		:class="$vuetify.display.mdAndUp ? 'px-12' : 'px-2'"
	>	
		<ClientOnly>
			<v-row
				dense 
				no-gutters
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
						<v-btn
							v-for="button in navItems"
							:key="button.text"
							:id="button.id"
							:text="button.text"
							@click="$emit('scroll', button.selector)"
						/>
					</v-col>
				</ClientOnly>

				<!-- Icons  -->
				<v-col 
					cols="auto"
				>
					<div>
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
					</div>
				</v-col>	
			</v-row>
		</ClientOnly>
	</v-app-bar>
</template>

<script setup lang="ts">
const emits =  defineEmits(["toggle-menu", "scroll"])

const props = defineProps({
	navItems: {
		type: Array,
		default: () => ([])
	}
})
</script>