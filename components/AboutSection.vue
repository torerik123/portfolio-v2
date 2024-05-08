<template>
	<!-- About  -->
	<v-sheet color="transparent">
		<v-row 
			dense
		>
			<!-- Skills  -->
			<v-col 
				:order="$vuetify.display.mdAndUp ? 0 : 1"
				md="6" 
				cols="12" 
			>
				<SectionHeader text="Skills"></SectionHeader>
				<SkillsSection />
			</v-col>

			<!-- Description  -->
			<v-col
				:order="$vuetify.display.mdAndUp ? 1 : 0"
				md="6" 
				cols="12"
				:class="$vuetify.display.mdAndUp ? '' : 'mb-12'"
			>
				<SectionHeader text="About"></SectionHeader>
				<v-card
					color="transparent" 
					class="elevation-0"
				>
					<v-card-text 
						:class="textClass"
					>
						{{ aboutSection[0] }}
					</v-card-text>
					<v-card-text :class="textClass">
						{{ aboutSection[1] }}
					</v-card-text>
				</v-card>
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

<script setup lang="ts">
import { ref } from "vue"
import type { Ref } from "vue"

type Paragraph = string
type Section = Array<Paragraph>

const aboutSection: Ref<Section> = ref([
	"I am most proficient in Vue, but also have some experience with other frameworks like React and Django.",
	"When I'm not at work I spend my time doing olympic weightlifting, hiking, learning to make music, or dreaming about climbing big mountains.",
])

const textClass: Ref<String> = ref("text-h6")

</script>

<style lang="css" scoped>
p {
	text-wrap: pretty;
}
</style>