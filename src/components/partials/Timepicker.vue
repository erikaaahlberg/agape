<template>
  <b-field label="Välj tid">
    <b-timepicker placeholder="Tryck för att välja" 
		icon-pack="fa" 
		icon="clock" 
		:min-time="minTime" 
		:max-time="maxTime">
    </b-timepicker>
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
    }
  }

</script>

<style></style>
