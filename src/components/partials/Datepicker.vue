<template>
  <b-field label="Välj ett datum">
    <b-datepicker placeholder="Tryck för att välja"
				icon-pack="fa" 
				icon="calendar-alt" 
				:min-date="minDate"
				:max-date="maxDate"
				:unselectable-dates="minDate">
    </b-datepicker>
  </b-field>
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
    /*<div class="pickers-wrapper">
      <!--Datepicker-->
      <b-field label="Välj ett datum">
        <b-datepicker placeholder="Tryck för att välja"
            icon-pack="fa" 
            icon="calendar-alt" 
            :min-date="minDate"
            :max-date="maxDate"
            v-model="input.date">
        </b-datepicker>
      </b-field>

      <!--Timepicker-->
      <b-field label="Välj tid">
        <b-timepicker placeholder="Tryck för att välja" 
        icon-pack="fa" 
        icon="clock" 
        :min-time="minTime" 
        :max-time="maxTime"
        v-model="input.time">
        </b-timepicker>
      </b-field> 
    </div> */
</script>

<style lang="scss">
@import '@/scss/_variables.scss';
  #book {
		.datepicker{
			font-family: 'Hind', sans-serif;
			.dropdown-content{
				background: $black;
			}
			.datepicker-header {
				.pagination-previous,
				.pagination-next{
					border: none;
					font-size: 1.5em;
				}
				.pagination-previous i{
					color: $primary;
    			margin-bottom: -4px;
				}				
				.pagination-next i{
					color: $red;
				}
				
			}
			.datepicker-cell{
				&.is-unselectable{
					color: #4a4a4a;
				font-size: 1.1em;
				letter-spacing: 2px;
				}
				&.is-selectable{
					color: white;
				font-size: 1.1em;
				letter-spacing: 2px;
				}
				&.is-selectable:hover{
					background: $red;
					font-size: 1.1em;
				}
				&.is-today{
					border: 2px solid $primary;
					font-size: 1.5em;
				}
			}
		}
		.datepicker-wrapper {
			flex-basis: 45%;
		}
  }
</style>
