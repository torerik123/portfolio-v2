<template>
	<h1 class="text-h3 mb-6 text-primary">
		{{ text }}				
	</h1>
</template>

<script setup>
const props = defineProps({
	text: {
		type: String,
		default: "",
	}
})
</script>