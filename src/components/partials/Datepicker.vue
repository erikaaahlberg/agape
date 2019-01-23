<template>
  <b-field label="Välj ett datum">
    <b-datepicker 
		placeholder="Tryck här för att välja datum" 
		icon-pack="fa" 
		icon="calendar-alt" 
		:min-date="minDate"
    :max-date="maxDate" 
		:value="date" 
		@input="emitSelectedDate($event)" 
		:unselectable-days-of-week="[5, 6]"
    required>
    </b-datepicker>
  </b-field>
</template>

<script>
  export default {
    name: 'Datepicker',
    data() {
      const today = new Date()
      return {
        date: new Date(),
        minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        maxDate: new Date(today.getFullYear(), today.getMonth() + 6, today.getDate())
      }
    },
    computed: {
      formatDate: function (date) {
				const year = date.getFullYear();
				let month = date.getMonth() + 1;
				const day = date.getDate();

				if (month < 10) {
					month = `0${month}`;
				}
        console.log(`${year}-${month}-${day}`);
				//return `${year}-${month}-${day}`;
      }
    },
		methods: {
			emitSelectedDate: function (date) {
        /*const formattedDate = this.formatDateForPostRequest(date);
        console.log(formattedDate);*/
        /* Emit a date formatted as the dates in the database to fetch booked times on selected date */
				this.$emit('emitSelectedDate', this.formatDateForPostRequest(date));
			},
      formatDateForPostRequest: function (date) {
          const year = date.getFullYear();
          let month = date.getMonth() + 1;
          const day = date.getDate();

          if (month < 10) {
            month = `0${month}`;
          }

          return `${year}-${month}-${day}`;
      }
    }
  }
</script>

<style lang="scss">
  @import '@/scss/_main.scss';

  .datepicker {
    .icon i {
      color: $mediumGrey;
      margin-right: 0.5rem;
    }

    .dropdown-content {
      background: $black;
      @include form-select;
    }

    .title-label {
      display: block;
      width: 100%;
    }

    .control {
      input {
        padding-left: 2.25rem;
      }
    }


    .dropdown-content {
      background: $black;

      .select:not(.is-multiple):not(.is-loading)::after {
        border-color: $primary;
      }
    }

    .datepicker-header {

      .pagination-previous,
      .pagination-next {
        border: none;
        font-size: 1.5rem;
      }

      .pagination-previous i {
        color: $primary;
        margin-bottom: -0.4rem;
      }

      .pagination-next i {
        color: $secondary;
      }
    }

    .datepicker-cell {
      &.is-unselectable {
        color: #4a4a4a;
        font-size: 1.1rem;
        letter-spacing: 0.2rem;
      }

      &.is-selectable {
        color: white;
        font-size: 1.1rem;
        letter-spacing: 0.2rem;
      }

      &.is-selectable:hover {
        background: $secondary;
        font-size: 1.1rem;
      }

      &.is-selected {
        border: none;
        background: $primary;
      }
    }
  }


  /*  #book {
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
					color: $secondary;
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
					background: $secondary;
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
  }*/

</style>
