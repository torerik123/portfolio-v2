<template>
	<v-row dense>
		<v-col cols="12">
			<v-card
				style="height: 100%"
				color="transparent"
				class="elevation-0 rounded-lg"
				link
			>
				<v-card-item>
					<v-img
						class="rounded-lg px-8"
						cover
						max-height="500"	
						:src="img"
					/>
				</v-card-item>

				<v-card-title>{{ name }}</v-card-title>
				<v-card-subtitle>
					<!-- <v-row dense>
						<v-col
							v-for="item in stack"
							:key="item"
							cols="auto"
						>
							<v-chip 
								variant="outlined" 
								color="primary"
							>
								{{ item }}
							</v-chip>
						</v-col>
					</v-row> -->
				</v-card-subtitle>

				<v-card-text>{{ description }}</v-card-text>
				
				<v-card-actions>
					<!-- Chips -->
					<v-row dense>
						<v-col
							v-for="item in stack"
							:key="item"
							cols="auto"
						>
							<v-chip 
								variant="outlined" 
								color="primary"
							>
								{{ item }}
							</v-chip>
						</v-col>
					</v-row>
				</v-card-actions>
				
			
				
				<v-card-actions>
					<v-row dense>
						<v-col 
							cols="12"
							order="1"
						>
							<v-btn
								v-if="demo"
								size="large"
								class="rounded-lg"
								:href="demo"
								target="_blank" 
							>
								Demo
							</v-btn>
							<v-btn
								v-if="github"		
								size="large"
								class="rounded-lg"
								:href="github"
								target="_blank" 
							>
								Code
							</v-btn>
						</v-col>
					</v-row>
					
				</v-card-actions>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
export default {
	name: "ProjectCard",

	props: {
		name: {
			type: String,
			default: "",
			required: true,	
		},
		stack: {
			type: Array,
			default: () => [],
			required: true,
		},
		description: {
			type: String,
			default: "",
			required: true,
		},
		img: {
			type: String,
			default: "",
			required: true,
		},
		demo: {
			type: String,
			default: "",
			required: false,
		},
		github: {
			type: String,
			default: "",
			required: true,
		},
	}
};
</script>