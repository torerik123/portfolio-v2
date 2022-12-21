<template>
    <v-sheet color="transparent" height="100vh">
        <v-row>
            <v-col cols="9">
                <v-row
                    dense
                    align="center"
                    style="margin-top: 60px;"
                >
                    <!-- Intro text     -->
                    <v-col>
                        <div class="text-h3 font-weight-400" >Hi! I'm Tor Erik Grimen.</div>
                        <div class="text-h3 font-weight-400" >I'm a software developer based in Trondheim.</div>
                    </v-col>
                </v-row>

                <!-- Buttons  -->
                <v-row dense style="margin-top: 18px">
                    <v-col cols="auto">
                        <v-btn large variant="outlined">View projects</v-btn>
                        <v-btn large variant="outlined" class="ml-2">Contact</v-btn>
                    </v-col>
                </v-row>

                <!-- About  -->
                <v-row dense style="margin-top: 48px">
                    <v-col cols="auto">
                        <v-card 
                            color="transparent"
                            class="pa-0"
                        >
                            <v-card-title class="pl-0">About</v-card-title>
                            <v-card-text class="pl-0">I used to work with film and television production, but after falling in love with programming I decided to pursue a career in software development. I like to solve problems and dive into new technologies. When I'm not working I dream of climbing big mountains.</v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

    </v-sheet>
</template>