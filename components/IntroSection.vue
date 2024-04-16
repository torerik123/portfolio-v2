<template>
	<v-sheet
		color="transparent"
	>
		<!-- About  -->
		<v-row
			dense
		>
		<!-- :cols="$vuetify.display.mdAndUp ? 'auto' : '12'" -->
			<v-col
				cols="auto"
				md="6"
			>
				<h1 
					class="text-h3 mb-5"
				>
					Hi! I'm <span class="text-primary">Tor Erik Grimen</span>.
				</h1>
			</v-col>

			<!-- Text  -->
			<!-- :cols="$vuetify.display.xs ? 'auto' : '12'" -->
			<v-col 
				cols="auto"
				md="6"
				sm="10"
			>
				<div>
					<p class="text-body-1">
						I’m a frontend developer based in Trondheim.  									
					</p>
					<p class="text-body-1 mb-5">
						I am most proficient in Vue, but also have some experience with other frameworks like React and Django.
					</p>

					<p>
						When I'm not at work I spend my time doing olympic weightlifting, hiking, learning to make music, or dreaming about climbing big mountains.
					</p>
				</div>
			</v-col>

			<!-- Image  -->
			<!-- <v-col>
				<v-sheet
					height="300"
					width="300"
					class="bg-cyan"
					:class="$vuetify.display.xs ? '' : 'mx-auto'"
				/>
			</v-col> -->
		</v-row>
	</v-sheet>
</template>