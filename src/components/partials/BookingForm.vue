<template>
	<section class="book-input">
		<form @submit.prevent="validateBeforeSubmit">
{{booking}}
			<div class="select-wrapper">
				<b-field label="Välj en kategori">
					<b-select v-model="booking.category" placeholder="-" id="category-select" required>
						<option v-for="option in categories" :value="option.value" :key="option.value">
							{{ option.title }}
						</option>
					</b-select>
				</b-field>
			</div>

			<label class="label title-label">Fyll i dina personliga uppgifter</label>
			<b-field>
				<b-input placeholder="Förnamn" type="text" v-model="booking.firstName" use-html5-validation  required></b-input>
			</b-field>

			<b-field>
				<b-input placeholder="Efternamn" type="text" v-model="booking.lastName" use-html5-validation required>
				</b-input>
			</b-field>

			<b-field>
				<b-input placeholder="Email" type="email" v-model="booking.email" use-html5-validation required>
				</b-input>
			</b-field>

			<b-field>
				<b-input placeholder="Telefonnummer" type="tel" min="9" max="10" v-model="booking.phone" use-html5-validation required>
				</b-input>
			</b-field>

			<b-field class="textarea-wrapper">
				<b-input type="textarea" minlength="3" maxlength="100" placeholder="Beskriv kortfattat vad du vill ha hjälp med"
					v-model="booking.description" required>
				</b-input>
			</b-field>
			<date-picker v-on:emitSelectedDate="excludeBookedTimes($event)"/>
			<time-picker v-on:emitSelectedTime="booking.time = $event" :disabled="timePicker.isDisabled"
			:unselectable="timePicker.bookedTimes"/>

			<div class="btn-wrapper">
				<button type="button" class="btn-purple" @click="checkBooking">Boka nu</button>
			</div>
		</form>

		<modal v-show="modal.isVisible" @close="modal.isVisible = false">
      <h1 slot="title"><i class="fas fa-angle-right"></i> Error</h1>
      <div class="modal-error-message" slot="body">
				<p>{{ modal.message }}</p>
				<button type="button" class="btn-purple" @click="modal.isVisible = false">Ok</button>
			</div>
    </modal>

	</section>
</template>

<script>
	import { fetchBookingsByDate } from '@/functions/fetching/getRequests.js';
  import Datepicker from './DatePicker.vue';
  import Timepicker from './Timepicker.vue';
	import Modal from './Modal.vue';

	export default {
		data() {
			const categories = [{
					value: 'coaching',
					title: 'Coaching'
				},
				{
					value: 'tarot-runor',
					title: 'Tarot / Runor'
				}
			];
	
			return {
				categories,
				booking: {
					firstName: '',
					lastName: '',
					email: '',
					phone: '',
					category: '',
					description: '',
					date: '',
					time: ''
				},
				timePicker: {
					isDisabled: true,
					bookedTimes: []
				},
				modal: {
        	isVisible: false,
					message: ''
				}
			}
		},
		components: {
	  'date-picker': Datepicker,
		'time-picker': Timepicker,
		'modal': Modal
		},
		methods: {
      showModal: function () {
        this.modal.isVisible = true;
      },
      closeModal: function () {
        this.modal.isVisible = false;
      },
			excludeBookedTimes: function (date) {
				this.booking.date = date;
				fetchBookingsByDate(date)
					.then((fetchedBookings) => {
						let bookedTimes = [];

						/* Formatting the times in this component instead of Timepicker because this mapping has to be done to filter the times */
						if (fetchedBookings.length > 0) {
							bookedTimes = this.filterTimes(fetchedBookings);
						}
						/* Timepicker is abled when booked times is excluded */
						this.timePicker.bookedTimes = bookedTimes;
						this.timePicker.isDisabled = false;
					});
			},
			filterTimes: function (bookings) {
				const times = bookings.map((row) => {
					return this.formatTimeForTimePicker(row.time);
				});
				return times;
			},
			/* Formatting the time to exclude booked sessions in timepicker */
			formatTimeForTimePicker: function (time) {
				const hours = parseInt(time.slice(0, 2));
				const formattedTime = new Date();
				formattedTime.setHours(hours);
				formattedTime.setMinutes(0);
				return formattedTime;
			},
			checkIfEmpty: function (object) {
				let emptyFields = [];
				for (let key in object) {
					console.log(key);
					if (object.key !== '' && object.key !== 'undefined') {
						emptyFields.push(key);
					}
				}
				if (emptyFields.length > 0) {
					return emptyFields;
				} else { 
					return false;
				}
			},
			checkBooking: function () {
				/* Getting the empty values to continue on this function and print what inputs are missing */
				const isEmpty = this.checkIfEmpty(this.booking);
				if (isEmpty.length > 0) {
					this.modal.message = 'Alla fält måste vara ifyllda!';
					this.modal.isVisible = true;
				} else {
					this.sendBooking();
				}
			},
			sendBooking: function () {
				this.$emit('sendBooking', this.booking);
			}
		}
	}
</script>

<style lang="scss">
	@import '@/scss/_main.scss';

	#book-page {
		.book-input {
			form {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				@include form-placeholder($lightGrey);

				.select-wrapper {
					display: block;
					width: 100%;
					margin-bottom: 4rem;
					padding-bottom: 3rem;
					border-bottom: 0.1rem solid $white;
					@include form-select;
				}

				.btn-wrapper {
					width: 100%;
					text-align: center;
					margin-top: 4rem;

					button {
						border-color: none;
						border-style: none;
					}
				}

				.input,
				.textarea {
					@include form-input;
				}

				.field {
					flex-basis: 45%;
				}

				.label {
					@include form-label;
				}

				.textarea-wrapper {
					flex-basis: 100%;
				}

				/* Timepicker and datepicker */
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



				/* Datepicker */
				.datepicker,
				.timepicker {
					.control {
						input {
							padding-left: 2.25rem;
						}
					}
				}

				.datepicker {
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

				/* Timepicker */
				.timepicker {
					.dropdown-content {
						padding: 0.5rem 1rem 1rem 1rem;
					}
				}
			}
		}
	}

</style>
