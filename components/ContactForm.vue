<template>
	<div>
		<SectionHeader text="Contact" />
		<v-form @submit.prevent>
			<v-text-field
				v-model="name"
				:rules="rules"
				label="Name"
				:variant="variant"
				color="primary"
			/>
			<v-text-field
				v-model="email"
				label="Email"
				:rules="rules"
				:variant="variant"
				color="primary"
			/>
			<v-textarea
				v-model="message"
				label="Message"
				:rules="rules"
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

<script setup>
const variant = ref("solo-filled")

const name = ref("")
const email = ref("")
const message = ref("")

const rules = ref([
        value => {
          if (value) return true

          return ""
        }
	])
// basic validation => fields can not be empty
</script>