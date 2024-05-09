<template>
	<div>
		<SectionHeader text="Contact" />

		<v-alert 
			v-if="messageSent === 'delivered'"
			type="success"
			:text="messageDeliveredText"
			class="mb-4"
			closable
			@click:close="messageSent = false"
		/>
		<v-alert 
			v-if="messageSent === 'failed'"
			type="error"
			:text="messageDeliveredText"
			class="mb-4"
			closable
			@click:close="messageSent = false"
		/>

		<v-form
			v-model="formIsValid" 
			@submit.prevent="submitForm"
			validate-on="input"
		>
			<v-text-field
				v-model="name"	
				:rules="rules.name"
				label="Name"
				autocomplete="name"
				:variant="variant"
				color="primary"
			/>
			<v-text-field
				v-model="email"
				label="Email"
				type="email"
				:rules="rules.email"
				:variant="variant"
				color="primary"
			/>
			<v-textarea
				v-model="message"
				label="Message"
				:rules="rules.message"
				:variant="variant"
				color="primary"
			/>
			<v-btn 
				class="mt-2" 
				type="submit" 
				block
				text="Submit"
				color="primary"
				size="x-large"
			/>
		</v-form>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import type { Ref } from "vue"

type VariantOptions = "outlined" | "solo-filled" | "plain" | "underlined" | "filled" | "solo" | "solo-inverted" | undefined
const variant: Ref<VariantOptions> = ref("solo-filled")
	
// Form data
const formIsValid: Ref<null | true> = ref(null)
const name: Ref<string> = ref("")
const email: Ref<string> = ref("")
const message: Ref<string> = ref("")
const messageSent: Ref<string | false> = ref(false)
const messageDeliveredText: Ref<string> = ref("Message sent!")

// Validation 
const rules = ref({
	name: [
        (value: string) => value ? true : "Name can not be empty."
	],
	email: [
		(value: string) => {
			const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			return pattern.test(value) || 'Invalid e-mail.'
		}
	],
	message: [
		(value: string) => value.length >= 10 ? true : "Message must be more than 10 characters." 
	],
})

const submitForm = async () : Promise<void> => {
	if (formIsValid.value) {
		const data = { 
			name: name.value, 
			email: email.value, 
			message: message.value, 
		}

		try {
			await $fetch("https://formspree.io/f/moqgykap", {
				method: "POST",
				headers: {
					'Accept': 'application/json'
				},
				body: data,
			})

			messageSent.value = "delivered"
		} catch (error) {
			messageSent.value = "failed"
			messageDeliveredText.value = "Something went wrong! Please try again later or email me at tor_erik_grimen@hotmail.com."
			console.log(error)
		}
	}
}
</script>