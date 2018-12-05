<template>
    <b-field label="Select a date">
        <b-datepicker
            placeholder="Välj här din jefeeel">
        </b-datepicker>
    </b-field>
<!--
		<b-field label="Välj datum">
			<b-datepicker 
				placeholder="Klicka för att välja" 
				icon-pack="fa" 
				icon="calendar" 
				:min-date="minDate"
				:max-date="maxDate">
			</b-datepicker>
		</b-field>
		-->
</template>

<script>
  export default {
		  data() {
          const today = new Date()
        return {
          date: new Date(),
          minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
          maxDate: new Date(today.getFullYear(), today.getMonth() + 6, today.getDate())
        }
      }
  }

</script>

<style>
	.datepicker-wrapper{
		flex-basis: 45%;
	}
</style>
