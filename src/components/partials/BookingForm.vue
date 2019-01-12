<template>
  <section class="book-input">
    <form @submit.prevent="validateBeforeSubmit">
      
      <div class="select-wrapper">
        <b-field label="Välj en kategori">
          <b-select v-model="category" placeholder="-" id="category-select" v-validate="'required'">
            <option 
            v-for="option in categories" 
            :value="option.value" 
            :key="option.value">
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
        <b-input 
        placeholder="Efternamn" 
        type="text" 
        v-model="lastName" 
        id="lastname-input" 
        v-validate="'required'"></b-input>
      </b-field>

      <b-field>
        <b-input 
        placeholder="Email" 
        type="email" 
        v-model="email" 
        id="email-input" 
        v-validate="'required'">
        </b-input>
      </b-field>

      <b-field>
        <b-input 
        placeholder="Telefonnummer" 
        type="tel" 
        min="10" 
        max="10" 
        v-model="phone" 
        id="phone-input" 
        v-validate="'required'">
        </b-input>
      </b-field>

      <b-field class="textarea-wrapper">
        <b-input type="textarea" 
          minlength="10" 
          maxlength="100" 
          placeholder="Beskriv kortfattat vad du vill ha hjälp med"
          v-model="description" 
          id="description-input">
        </b-input>
      </b-field>

      <b-field label="Välj ett datum">
        <b-datepicker placeholder="Tryck för att välja" 
          icon-pack="fa" icon="calendar-alt" 
          :min-date="minDate"
          :max-date="maxDate" 
          v-model="date" 
          v-validate="'required'" 
          v-on:change="fetchBookingsByDate"
          :unselectable-days-of-week="[5, 6]">
        </b-datepicker>
      </b-field>
      <!--
				  :unselectable-dates="minDate" -->

      <b-field label="Välj tid">
        <b-timepicker placeholder="Tryck för att välja" 
          icon-pack="fa" icon="clock" 
          :min-time="timeFrame.minTime"
          :max-time="timeFrame.maxTime" 
          :increment-minutes=60 
          v-model="time" 
          v-validate="'required'">
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
  import fetchBookings from '@/functions/fetching/fetchBookings.js';

  export default {
    mounted: function() {
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

      const time = [ exclude ];

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
          port:   3001,
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
          date: this.date.toISOString().slice(0,10),
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
        console.log(time.slice(0,2));
        const hours = parseInt(time.slice(0,2));
        const formattedTime = new Date();
        formattedTime.setHours(hours);
        formattedTime.setMinutes(0);
        console.log(formattedTime);
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
  @import '@/scss/_variables.scss';

  #book-page {
    .book-input {
      form {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .select-wrapper {
          display: block;
          width: 100%;
          margin-bottom: 40px;
          padding-bottom: 30px;
          border-bottom: 1px solid $white;

          select {
            background: black;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: white;
          }
          .select:not(.is-multiple):not(.is-loading)::after{
            border-color: $primary;
          }
        }

        .btn-wrapper {
          width: 100%;
          text-align: center;
          margin-top: 40px;

          button {
            border-color: none;
            border-style: none;
          }
        }

        .input,
        .textarea {
          background: transparent;
          border: none;
          border-bottom: 1px solid $lightGrey;
          border-radius: 0px;
          color: white;
          font-family: 'Hind', sans-serif;
          letter-spacing: 1.5px;
          padding-bottom: 5px;

          &:active,
          &:focus {
            background: transparent;
            border-bottom: 1px solid $white;
            box-shadow: none;
            border-radius: 0px;
          }
        }
        ::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: $lightGrey;
          font-family: 'Hind', sans-serif;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        ::-moz-placeholder {
          /* Firefox 19+ */
          color: $lightGrey;
          font-family: 'Hind', sans-serif;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        :-ms-input-placeholder {
          /* IE 10+ */
          color: $lightGrey;
          font-family: 'Hind', sans-serif;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        :-moz-placeholder {
          /* Firefox 18- */
          color: $lightGrey;
          font-family: 'Hind', sans-serif;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .field {
          flex-basis: 45%;
        }

        .label {
          font-size: 1.2em;
          color: $white;
          letter-spacing: 1.5px;
        }

        .textarea-wrapper {
          flex-basis: 100%;
        }

        /* Timepicker and datepicker */
        .icon i {
          color: $mediumGrey;
          margin-right: 5px;
        }

        .dropdown-content {
          background: $black;

          select {
            background: black;
            font-family: 'hind', sans-serif;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            font-size: 1.1em;
            color: $white;
          }
        }

        .title-label {
          display: block;
          width: 100%;
        }

        /* Datepicker */
        .datepicker {
          font-family: 'Hind', sans-serif;

          .dropdown-content {
            background: $black;
            .select:not(.is-multiple):not(.is-loading)::after{
              border-color: $primary;
            }
          }

          .datepicker-header {

            .pagination-previous,
            .pagination-next {
              border: none;
              font-size: 1.5em;
            }

            .pagination-previous i {
              color: $primary;
              margin-bottom: -4px;
            }

            .pagination-next i {
              color: $red;
            }

          }

          .datepicker-cell {
            &.is-unselectable {
              color: #4a4a4a;
              font-size: 1.1em;
              letter-spacing: 2px;
            }

            &.is-selectable {
              color: white;
              font-size: 1.1em;
              letter-spacing: 2px;
            }

            &.is-selectable:hover {
              background: $red;
              font-size: 1.1em;
            }

            &.is-today {
              border: 2px solid $primary;
              font-size: 1.5em;
              background: $primary;
            }
          }
        }

        /* Timepicker */
        .timepicker {
          .dropdown-content {
            padding: 5px 10px 10px 10px;
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
	border-bottom: 1px solid rgb(193, 163, 87);
	border-radius: 0px;
	}
.input,
.textarea{
	background: transparent;
	border: none;
	border-bottom: 1px solid rgb(193, 163, 87);
	border-radius: 0px;
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
	border-bottom: 1px solid red;
	border-radius: 0px;
}*/

</style>
