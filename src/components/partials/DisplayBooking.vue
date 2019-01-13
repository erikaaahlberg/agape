<template>
<section>
<!--  <div class="accordion-wrapper">
    <ul class="booking-accordion">
      <li v-for="date in bookedDates">
        <h3>{{ date.date }}</h3>
        <accordion :dates="bookedDates" :booking="booking"/>
      </li>
    </ul>
  </div>-->
   <!-- <div class="accordion-wrapper">
    <ul class="bookings-accordion">-->
      <!--<li v-for="date in bookedDates">
        <h3>{{ date.date }}</h3>
      </li>  -->
        <div class="booking" :class="accordionClasses">
        <li v-for="date in sortedBookings" 
        :key="date.date" 
        class="booking-header" 
        @click="toggleAccordion">
          {{ date.date }} 
        </li>
        <single-booking :allBookings="sortedBookings"/>
<!--
        <div class="booking-body" 
        v-for="booking in allBookings" 
        :key="booking.id">

          <div class="booking-content">
            <h4>{{ booking.time }}</h4>

            <ul class="bookings__list">
              <li><label for="firstName">Namn:</label> {{ booking.firstName }} </li>
              <li><label for="lastName">Efternamn:</label> {{ booking.lastName }} </li>
              <li><label for="email">Email:</label> {{ booking.email }} </li>
              <li><label for="phone">Telefonnummer:</label> {{ booking.phone }} </li>
              <li><label for="category">Kategori:</label> {{ booking.category }} </li>
              <li><label for="description">Beskrivning:</label> {{ booking.description }} </li>
            </ul>

            <div class="btn-wrapper">
              <a href="#" type="button" class="btn-purple">Redigera</a>
              <a href="#" type="button" class="btn-red">Ta bort</a>
            </div>
          </div>

        </div>-->
        <!--/booking-body-->

       <!-- <div class="booking-body">
          <div class="booking-content">
            <h4>{{ booking.time }}</h4>

            <ul class="bookings__list">
              <li><label for="firstName">Namn:</label> {{ booking.firstName }} </li>
              <li><label for="lastName">Efternamn:</label> {{ booking.lastName }} </li>
              <li><label for="email">Email:</label> {{ booking.email }} </li>
              <li><label for="phone">Telefonnummer:</label> {{ booking.phone }} </li>
              <li><label for="category">Kategori:</label> {{ booking.category }} </li>
              <li><label for="description">Beskrivning:</label> {{ booking.description }} </li>
            </ul>

            <div class="btn-wrapper">
              <a href="#" type="button" class="btn-purple">Redigera</a>
              <a href="#" type="button" class="btn-red">Ta bort</a>
            </div>
          </div>

        </div>-->
        <!--/booking-body-->
      </div>
      <!--/booking-->
       <!-- <accordion :dates="bookedDates" :booking="booking"/>-->
       
    <!--</ul>
  </div>-->

        
  <!--
      <div class="accordion-wrapper">
    <ul class="booking-accordion">
        <div class="booking" :class="accordionClasses">
          <li class="booking-header" @click="toggleAccordion" v-for="date in bookedDates"> 
            {{ date.date }} 
          </li>
        <accordion :item="booking"/>
        </div>
    </ul>
  </div>
  -->
  </section>
</template>

<script>
  //import { fetchBookings } from '@/functions/fetching/getRequests.js';
  //import { fetchBookedDates } from '@/functions/fetching/getRequests.js';
  import Accordion from '@/components/partials/Accordion.vue';
  import BookingContent from '@/components/partials/BookingContent.vue';

  export default {
    props: [
      'sortedBookings'
    ],
    components: {
      'single-booking': BookingContent
    },
    mounted: function () {
      //this.fetchDates();
      //const bookade = this.$props.allBookings;
      console.log('hej');
      //console.log(this.$props.bookedDates);
      //this.sortByDate();
    },
    computed: {
      accordionClasses: function () {
        return {
          'is-closed': !this.isOpen,
          'is-primary': this.isOpen,
          'is-dark': !this.isOpen
        };
      }
    },
    data: function () {
      return {
        isOpen: false,
        bookingsSortedByDate: []
      }
    },
    methods: {
      /*accordionActions: function () {
        var accItem = document.getElementsByClassName('accordionItem');
        var accHD = document.getElementsByClassName('accordionItemHeading');
        /*for (i = 0; i < accHD.length; i++) {
            accHD[i].addEventListener('click', toggleItem, false);
        }*/
        /*function toggleItem() {
          var itemClass = this.parentNode.className;
          for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordionItem close';
          }
          if (itemClass == 'accordionItem close') {
            this.parentNode.className = 'accordionItem open';
          }
        }
      },*/
      toggleAccordion: function () {
        this.isOpen = !this.isOpen;
      },      
      sortByDate: function () {
        const bookedDates = this.$props.bookedDates;
        const bookings = this.$props.allBookings;
        console.log(bookedDates);
        console.log(bookedDates);
        let sorted = [];
        let content = [];
        let date = '';

        //console.log(bookings);
        
          /*const newArray = bookings.map((row) => {
            return row.date;
          });*/
          //console.log(newArray);
        /*for (let i = 0; i < bookedDates.length; i++) {
          //content = [];
          sorted.push(
            {
              date: bookedDates[i],
              bookings: []
            }
          );
          /*
          let found = bookings.find(function(element) {
            return element;
          });
          console.log(found);*/
          //sorted[i].bookings.push(found);
          //console.log(sorted[i].date);
          /*bookings.forEach(function(row, index) {
            console.log(row);
          });
          for (let v = 0; v < bookings.length; v++) {
            let k = 0;
          //console.log(sorted[i].date);
            //console.log(bookedDates[i].date);
            //console.log(bookings[v]);
            //if (bookings[v].date === sorted[i].date) {
              //console.log('tjena');
              //content.push(bookings[v]);
              //sorted[i].content.push(content);
            //}
          }
          /*console.log(content);
          sorted[i].content.push(content);*/
        //}
        //console.log(sorted);
          /*for (let v = 0; v < bookings.length; v++) {
            let k = 0;
            if (bookings[v].date === sorted[i].date) {
              console.log('tjena');
              content.push(bookings[v]);
              sorted[i].content.push(content);
            }
          }*/

        //console.log(bookings);
      },
      isValueInArray: function (value, arrayOfObjects, key) {
        const newArray = array.map((row) => {
          return row.key === value;
        });
        console.log(newArray);
      }
      /*,
    
    setClass: function(item){
        if (item.isopen == true ) {
          return 'open'
        }
        return 'close'
    },
    
    enter: function(el, done){   
        Velocity(el, 'slideDown', {duration: 400,  
                                   easing: "easeInBack"},
                                  {complete: done})
    },
    
    leave: function(el, done){
        Velocity(el, 'slideUp', {duration: 400,  
                                 easing: "easeInBack"},
                                {complete: done})
    }*/
  }
  }

</script>
<style lang="scss">
  @import '@/scss/_variables.scss';

  .booking-content {
    background: $black;
    padding: 20px 50px;

    ul {
      margin-top: 20px;
      margin-bottom: 20px;

      li {
        margin: 5px;

        label {
          letter-spacing: 1.5px;
          font-weight: 600;
        }
      }
    }

    .btn-wrapper {
      a {
        margin-right: 5px;
      }
    }
  }

  /* Vue accordion */
  .booking {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .booking-header {
    cursor: pointer;
  }

  .booking-body {
    padding: 0;
    //max-height: 10em;
    overflow: hidden;
    transition: 0.3s ease all;
  }

  .is-closed .booking-body {
    max-height: 0;
  }

</style>
