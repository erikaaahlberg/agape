<template>
	<section class="book-input">
		<form @submit="checkInput">
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
				<b-input placeholder="Förnamn" type="text" v-model="booking.firstName" use-html5-validation required></b-input>
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
				<input type="submit" class="btn-primary" @click.prevent="checkBooking" value="Boka nu">
			</div>
		</form>

		<modal v-show="messageModal.isVisible" @close="messageModal.isVisible = false">
	  <h1 slot="title"><i class="fas fa-angle-right"></i> {{ messageModal.title }}</h1>
	  <div class="modal-error-message" slot="body">
				<p>{{ messageModal.message }}</p>
				<div class="btn-wrapper">
					<button type="button" :class="messageModal.btnClass" @click="messageModal.isVisible = false">{{ messageModal.btnTitle }}</button>
				</div>
			</div>
	</modal>

		<modal v-show="confirmModal.isVisible" @close="confirmModal.isVisible = false">
	  <h1 slot="title"><i class="fas fa-angle-right"></i> Bekräfta bokning</h1>>
			<div class="modal-confirm-booking" slot="body">
				<ul class="booking-list">
					<li>
						<label class="label title-label">Förnamn: </label> <p>{{ this.booking.firstName }}</p>
					</li>
					<li>
						<label class="label title-label">Efternamn: </label> <p>{{ this.booking.lastName }}</p>
					</li>
					<li>
						<label class="label title-label">Email: </label> <p>{{ this.booking.email }}</p>
					</li>
					<li>
						<label class="label title-label">Telefon: </label> <p>{{ this.booking.phone }}</p>
					</li>
					<li>
						<label class="label title-label">Kategori: </label> <p>{{ this.booking.category }}</p>
					</li>
					<li>
						<label class="label title-label">Beskrivning: </label> <p>{{ this.booking.description }}</p>
					</li>
					<li>
						<label class="label title-label">Datum: </label> <p>{{ this.booking.date }}</p>
					</li>
					<li>
						<label class="label title-label">Tid: </label> <p>{{ this.booking.time }}</p>
					</li>
				</ul>

				<div class="btn-wrapper">
					<button type="button" class="btn-primary" v-on:click="emitBooking">Skicka</button>
					<button type="button" class="btn-secondary" v-on:click.prevent="confirmModal.isVisible = false">Avbryt</button>
				</div>

			</div>
		</modal>

	</section>
</template>

<script>
	import { fetchBookingsByDate } from '@/functions/recurringFetch.js';
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
					firstName: null,
					lastName: null,
					email: null,
					phone: null,
					category: null,
					description: null,
					date: null,
					time: null
				},

				timePicker: {
					isDisabled: true,
					bookedTimes: []
				},

				messageModal: {
					isVisible: false,
					title: '',
					message: '',
					btnClass: '',
					btnTitle: ''
				},

				confirmModal: {
					isVisible: false
				}
			}
		},

		props: [
			'confirmMessage'
		],

		computed: {
			setValue: function (value) {
				if (checkIfEmpty(value)) {

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

			checkInput: function () {
				this.booking.keys();
				
				for (var key in this.booking) { 
					if (checkIfEmpty(this.booking.key)) { 
						return false; 
				 	} else { 
						 return true; 
					}
				}
			},

			checkIfEmpty: function () {
				const values = Object.values(this.booking);

				let empty = 0;

				for (let i = 0; i < values.length; i++) {
					if (values[i] === '' || values[i] === null) {
						empty++;
					}	
				}

				return empty;
			},

			checkBooking: function (e) {
				e.preventDefault();

				const missingInput = this.checkIfEmpty();

				if (missingInput !== 0) {
					this.messageModal.title = 'Error';
					this.messageModal.message = `Hoppsan, det finns ${missingInput} tomma fält. Alla fält måste vara ifyllda!`;
					this.messageModal.btnClass = 'btn btn-secondary';
					this.messageModal.btnTitle = 'Försök igen';
					this.messageModal.isVisible = true;
				} else {
					this.confirmModal.isVisible = true;
				}
			},

			emitBooking: function () {
				this.$emit('emitBooking', this.booking);
			}
		}
	}
</script>

<style lang="scss">
	@import '@/scss/_main.scss';


		.book-input {
			form {
				display: flex;
				flex-direction: column;
				@include form-placeholder($lightGrey);

				@include ipad-min {
					flex-direction: row;
					justify-content: space-between;
					flex-wrap: wrap;
				}

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
					flex-basis: 100%;
					margin-bottom: 1rem;
					margin-top: 1rem;

					@include ipad-min {
						flex-basis: 45%;
					}
				}

				.label {
					@include form-label;
				}

				.textarea-wrapper {
					flex-basis: 100%;
					margin-bottom: 4rem;
				}

				.title-label {
					display: block;
					width: 100%;
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

			/* .modal-confirm-booking {
				 li {
          text-transform: none;
					display: flex;
					letter-spacing: 0.15rem;
					color: $lightGrey;

          &:not(:last-child) {
          margin-bottom: 1.2rem;
          }

           label {
            @include form-label;
            margin-right: 0.5rem;
          }

          .field {
            width: 100%;
            display: inline-block;
					}
        }
					
				.btn-wrapper {
					margin-top: 2rem;
					text-align:center;
					button {
						margin-right: 0.5rem;
					}
				}
			 }*/
		}
	

</style>
