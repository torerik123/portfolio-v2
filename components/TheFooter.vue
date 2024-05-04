<template>
	<v-footer
		style="background-color: rgb(var(--v-theme-background));"
		class="px-2"
	>
		<v-row 
			dense
			no-gutters
			justify="space-between"
			justify-md="center"
			align="center"
		>
			<v-col
				cols="12"
				md="10"
				lg="8"
			>	
				<v-row dense>
					<v-col align-self="center">
						<span class="pl-4">&copy; {{ new Date().getFullYear() }} | Tor Erik Grimen</span> 
					</v-col>
					<!-- <v-col></v-col> -->
					<v-col cols="auto">
						<v-btn 
							icon="mdi-arrow-up"
							@click="$emit('scroll', 'top')"
							variant="text" 
						/>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-footer>
</template>

<script setup>
const emits =  defineEmits(["scroll"])
</script>