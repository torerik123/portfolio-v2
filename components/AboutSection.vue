<template>
	<!-- About  -->
	<v-sheet color="transparent">
		<v-row dense>
			<!-- Skills  -->
			<v-col>
				<SectionHeader text="Skills"></SectionHeader>
				<SkillsSection />
			</v-col>
			<!-- Description  -->
			<v-col>
				<SectionHeader text="About"></SectionHeader>
				<div>
					<p class="text-body-1 mb-5">
						I am most proficient in Vue, but also have some experience with other frameworks like React and
						Django.
					</p>

					<p>
						When I'm not at work I spend my time doing olympic weightlifting, hiking, learning to make
						music, or
						dreaming about climbing big mountains.
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