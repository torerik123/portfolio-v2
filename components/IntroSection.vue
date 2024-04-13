<template>
	<v-sheet
		color="transparent"
	>
		<v-row>
			<v-col cols="9">
				<v-row
					dense
					align="center"
					style="margin-top: 60px;"
				>
					<!-- Intro text     -->
					<!-- <v-col>
						<div class="text-h3 font-weight-400 text-primary">
							Tor Erik Grimen
						</div>
					</v-col> -->
				</v-row>

				<!-- Buttons  -->
				<!-- <v-row
					dense
					style="margin-top: 18px"
				>
					<v-col cols="auto">
						<v-btn
							large
							variant="outlined"
						>
							View projects
						</v-btn>
						<v-btn
							large
							variant="outlined"
							class="ml-2"
						>
							Contact
						</v-btn>
					</v-col>
				</v-row> -->

				<!-- About  -->
				<v-row
					dense
					style="margin-top: 48px"
				>
					<v-col cols="auto">
						<v-card
							color="transparent"
							class="pa-0 elevation-0"
						>
							<!-- <v-card-title class="pl-0">
								About
							</v-card-title> -->
							<v-card-text class="pl-0">
								I’m a front-end developer based in Trondheim.
								I work primarily with Vue, but also have some experience with other frameworks. When I'm
								not at work I dream of climbing big mountains.
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>

				<!-- TODO Skills section -->
				<!-- Skills
				Languages: Javascript, Python, HTML, CSS, SQL 

				Frameworks: Vue, Nuxt, React, Django 

				UI Libraries: Vuetify, Bootstrap

				Database: Supabase/PostgreSQL, Firebase, SQlite

				Testing: Cypress, Vitest

				Version Control: Git, Github 
				-->

				<!-- TODO: Contact form  -->

				<!-- Download => CV  -->
			</v-col>
		</v-row>
	</v-sheet>
</template>