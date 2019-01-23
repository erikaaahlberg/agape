<template>
	<b-field label="Välj en tid">
		<b-timepicker 
		placeholder="Tryck här för att välja tid" 
		icon-pack="fa" icon="clock"   
		:min-time="minTime"
		:max-time="maxTime" 
		:increment-minutes="60"
		@input="emitSelectedTime($event)"
		:unselectable-times="unselectable"
		required
		:disabled="disabled">
		</b-timepicker>
		{{unselectable}}
		{{disabled}}
	</b-field>
</template>

<script>
	export default {
		name: 'Timepicker',
		data() {
			const min = new Date()
			min.setHours(9)
			min.setMinutes(0)
			const max = new Date()
			max.setHours(18)
			max.setMinutes(0)
			return {
				minTime: min,
				maxTime: max
			}
		},
		props: [
			'disabled',
			'unselectable'
		],
		methods: {
			formatTimeForPostRequest: function (date) {
				/* Min will always have the same value */
				const min = '00';
				const hour = date.getHours();
				return `${hour}:${min}`;
			},
			emitSelectedTime: function ($event) {
				const formattedTime = this.formatTimeForPostRequest($event);
				this.$emit('emitSelectedTime', formattedTime);
			}
		}
	}
</script>

<style lang="scss">
	@import '@/scss/_main.scss';
	
	.timepicker {
		.icon i {
			color: $mediumGrey;
			margin-right: 0.5rem;
		}
		.dropdown-content {
			background: $black;
			@include form-select;
			padding: 0.5rem 1rem 1rem 1rem;
		}
		.title-label {
			display: block;
			width: 100%;
		}
	}	
</style>
