<template>
  <section class="book-input">
    <form @submit.prevent="validateBeforeSubmit">

      <div class="select-wrapper">
        <b-field label="Välj en kategori">
          <b-select v-model="category" placeholder="-" id="category-select" v-validate="'required'">
            <option v-for="option in categories" :value="option.value" :key="option.value">
              {{ option.title }}
            </option>
          </b-select>
        </b-field>
      </div>

      <label class="label title-label">Fyll i dina personliga uppgifter</label>
      <b-field :type="{'is-danger': errors.has('firstName')}" :message="errors.first('firstName')">
        <b-input placeholder="Förnamn" type="text" v-model="firstName" id="firstname-input" v-validate="'required'"></b-input>
      </b-field>

      <b-field>
        <b-input placeholder="Efternamn" type="text" v-model="lastName" id="lastname-input" v-validate="'required'">
        </b-input>
      </b-field>

      <b-field>
        <b-input placeholder="Email" type="email" v-model="email" id="email-input" v-validate="'required'">
        </b-input>
      </b-field>

      <b-field>
        <b-input placeholder="Telefonnummer" type="tel" min="10" max="10" v-model="phone" id="phone-input" v-validate="'required'">
        </b-input>
      </b-field>

      <b-field class="textarea-wrapper">
        <b-input type="textarea" minlength="10" maxlength="100" placeholder="Beskriv kortfattat vad du vill ha hjälp med"
          v-model="description" id="description-input">
        </b-input>
      </b-field>

      <b-field label="Välj ett datum">
        <b-datepicker placeholder="Tryck för att välja" icon-pack="fa" icon="calendar-alt" :min-date="minDate"
          :max-date="maxDate" v-model="date" v-validate="'required'" v-on:change="fetchBookingsByDate"
          :unselectable-days-of-week="[5, 6]">
        </b-datepicker>
      </b-field>
      <!--
				  :unselectable-dates="minDate" -->

      <b-field label="Välj tid">
        <b-timepicker placeholder="Tryck för att välja" icon-pack="fa" icon="clock" :min-time="timeFrame.minTime"
          :max-time="timeFrame.maxTime" :increment-minutes=60 v-model="time" v-validate="'required'">
        </b-timepicker>
      </b-field>
      <!--
          :unselectable-times=times -->

      <div class="btn-wrapper">
        <button type="button" class="btn-purple" v-on:click="onSubmit">Boka nu</button>
      </div>
    </form>
  </section>
</template>

<script>
  import {
    fetchBookings
  } from '@/functions/fetching/getRequests.js';
  //import { fetchBookedDates } from '@/functions/fetching/getRequests.js';

  export default {
    mounted: function () {
      this.fetchBookingsByDate(this.date);
    },
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

      const today = new Date();

      /* Min time for timepicker */
      const min = new Date();
      min.setHours(9);
      min.setMinutes(0);

      /* Max time for timepicker */
      const max = new Date();
      max.setHours(18);
      max.setMinutes(0);

      const timeFrame = {
        minTime: min,
        maxTime: max
      }

      const exclude = new Date();
      exclude.setHours(9);
      exclude.setMinutes(0);

      const time = [exclude];

      return {
        date: new Date(),
        minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
        maxDate: new Date(today.getFullYear(), today.getMonth() + 6, today.getDate()),
        timeFrame,
        categories,
        bookedSessions: [],
        bookedTimes: ''
      }
    },
    methods: {
      excludeBookedTimes: function () {
        this.fetchBookingsByDate()
          .then((fetchedBookings) => {
            console.log(fetchedBookings);
            /*const bookings = fetchedBookings.map((row) => {
              return { 
                date: row.date, 
                time: row.time 
              };
            });*/
            /*console.log(booked);
            console.log(bookings);
            const bookedSessions = this.filterBookedTimeByPickedDate(bookings);
            if (bookedSessions.length > 0) {
              const formattedTimes = bookedSessions.map((row) => {
                return this.formatTimeForTimePicker(row.time);
              });
              console.log(formattedTimes);
              this.bookedTimes = formattedTimes;
            }
            //this.bookedSessions = bookings;
            //const bookedTimes = this.filterTimeByPickedDate(bookings);
            //return bookedDates;*/
          });
      },
      fetchBookingsByDate: function (date) {
        console.log('tjenare')
        return fetch(`http://localhost:3001/bookings/date/${date}`, {
            host: 'localhost',
            // port to forward to
            port: 3001,
            // path to forward to
            //path:   '/api/bookings',
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then((fetchedBookings) => {
            console.log(fetchedBookings);
            return fetchedBookings;
          });
      },
      collectInput: function () {
        const input = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phone: this.phone,
          category: this.category,
          description: this.description,
          date: this.date.toISOString().slice(0, 10),
          time: this.time
          /*
          date: this.formatDateForPostRequest(this.date),
          time: this.formatTimeForPostRequest(this.time)
           */
        }
        return input;
      },
      formatTimeForPostRequest: function (time) {
        /* Min will always have the same value */
        const min = '00';
        const hour = time.getHours();

        return `${hour}:${min}`;
      },
      formatDateForPostRequest: function (date) {
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        const day = date.getDate();

        if (monthNumber < 10) {
          month = `0${monthNumber}`;
        }

        return `${year}-${month}-${day}`;
      },
      /* Formatting the time to exclude booked sessions in timepicker */
      formatTimeForTimePicker: function (time) {
        console.log(time.slice(0, 2));
        const hours = parseInt(time.slice(0, 2));
        const formattedTime = new Date();
        formattedTime.setHours(hours);
        formattedTime.setMinutes(0);
        console.log(formattedTime);
      },
      formatStringToDateObject: function (dateString) {
        const year = dateString.slice(0, 4);
        const month = dateString.slice(5, 7);
        const date = dateString.slice(9, 11);

        console.log(`${date}, ${year}, ${month}`);
      },
      filterBookedTimeByPickedDate: function (bookingsArray) {
        const pickedDate = this.formatDateForPostRequest(this.date);
        let bookedTimes = [];
        console.log(pickedDate);

        for (let i = 0; i < bookingsArray.length; i++) {
          if (pickedDate === bookingsArray[i].date) {
            console.log('tjenare');
            bookedTimes.push(bookingsArray[i].time);
          }
        }

        console.log(bookedTimes);
        return bookedTimes;
      },
      checkIfEmpty: function (object) {
        for (let key in object) {
          console.log(key);
          console.log(object.key);
          if (object.key !== '' && object.key !== 'undefined') {
            return true;
          } else {
            return false;
          }
        }
      },
      sendBooking: function (booking) {
        this.$emit('sendBooking', booking);
      },
      onSubmit: function () {
        const booking = this.collectInput();
        console.log(booking);
        //this.sendBooking(booking);
      },
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.$toast.open({
              message: 'Form is valid!',
              type: 'is-success',
              position: 'is-bottom'
            })
            return;
          }
          this.$toast.open({
            message: 'Form is not valid! Please check the fields.',
            type: 'is-danger',
            position: 'is-bottom'
          })
        });
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

  /*.book-input input{
	flex-basis: 45%;
}
.book-input input,
.book-input textarea{
	background: transparent;
	border: none;
	border-bottom: 1rem solid rgb(193, 163, 87);
	border-radius: 0rem;
	}
.input,
.textarea{
	background: transparent;
	border: none;
	border-bottom: 1rem solid rgb(193, 163, 87);
	border-radius: 0rem;
}
b-input:focus,
textarea:focus,
.input:focus,
.textarea:focus,
.control:focus,
#booking-form input:focus{
	background: transparent;
	border: none;
	outline: none !important;
	border-bottom: 1rem solid red;
	border-radius: 0rem;
}*/

</style>
