<template>
	<v-app id="inspire">
		<v-main>
			<v-container>
				<!-- Hero section  -->
				<v-sheet color="transparent" height="100vh"> 
					<v-row
						align="center"
						style="height: 100%;"
					>
						<v-spacer></v-spacer>
						<v-col cols="auto">
							<div class="text-h2">Tor Erik Grimen</div>
						</v-col>
						<v-spacer></v-spacer>
					</v-row>
				</v-sheet>

				<!-- Projects  -->
				<v-sheet color="transparent" height="100vh"> 
					<v-row
						align="center"
						style="height: 100%;"
					>
						<v-col>
							<Project class="mb-10"></Project>
							<Project></Project>
						</v-col>
						<!-- <v-spacer></v-spacer> -->
						<!-- <v-col cols="auto"> -->
							<!-- <v-card>
								<v-img
									height="auto" width="80vw"  
									src="https://torerik123.github.io/portfolio/static/images/AP.jpg"
								></v-img>
								<v-card-title>Project name</v-card-title>
								<v-card-subtitle>
									<v-row dense>
										<v-col cols="auto">
											<v-chip class="mr-1">Vue</v-chip>
										</v-col>
										<v-col cols="auto">
											<v-chip class="mx-1">Nuxt</v-chip>
										</v-col>
										<v-col cols="auto">
											<v-chip class="mx-1">Firebase</v-chip>
										</v-col>
										<v-col cols="auto">
											<v-chip class="mx-1">DatoCMS</v-chip>
										</v-col>
									</v-row>

								</v-card-subtitle>
								<v-card-text>Here is some info about the project, how to use it etc...</v-card-text>
								<v-card-actions>
									<v-btn>
										Demo
									</v-btn>
									<v-btn>
										Code
									</v-btn>
								</v-card-actions>
							</v-card> -->
						<!-- </v-col>
						<v-spacer></v-spacer> -->
					</v-row>
				</v-sheet>
				

			</v-container>
		</v-main>
	</v-app>
</template>
  
<script>
export default {
	//
}
</script>