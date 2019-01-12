<template>
  <div class="accordion-wrapper">
    <ul class="bookings-accordion">
      <li v-for="booking in bookings">
        <accordion :item="booking"/>
      </li>
    </ul>
  </div>
</template>

<script>
  //import fetchBookings from '@/functions/fetching/fetchBookings.js';
  import Accordion from '@/components/partials/Accordion.vue';

  export default {
    props: [
      'bookedDates'
    ],
    components: {
      'accordion': Accordion
    },
    data() {
        const bookings = [
          {
            firstName: 'namn',
            lastName: 'efternamn',
            email: 'email',
            phone: 'telefon',
            category: 'kategori',
            description: 'beskrivning',
            date: '24 Mars 2019',
            time: '12.00'
          },
          {
            firstName: 'namn',
            lastName: 'efternamn',
            email: 'email',
            phone: 'telefon',
            category: 'kategori',
            description: 'beskrivning',
            date: '24 Mars 2019',
            time: '12.00'
          },
          {
            firstName: 'namn',
            lastName: 'efternamn',
            email: 'email',
            phone: 'telefon',
            category: 'kategori',
            description: 'beskrivning',
            date: '24 Mars 2019',
            time: '12.00'
          }
        ];
      return {
        bookings: bookings
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
      openItem: function(item){
        item.isopen = !item.isopen
      }/*,
    
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
  }, 
    computed: {
      accordionClasses: function () {
        return {
          'is-closed': !this.isOpen,
          'is-primary': this.isOpen,
          'is-dark': !this.isOpen
        };
      }
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


  /* Vue accordion 2 */
  /*li {
  list-style:none;
  cursor:pointer;
  font: 22px/48px 'Cantata One', serif;
}
li>div {
  font: 14px/22px 'Noto Sans', serif;
  padding-bottom:20px;
}

.item {
  overflow:hidden;
  width:600px;
}

.arrow_box {
  width:10px;
  height:10px;
  transition: all .3s;
  padding-bottom:0px;
  position:absolute;
  margin:20px 0px 0px -15px;
  
}


.arrow_box:after, .arrow_box:before {
	border: solid transparent;
	content: " ";
	position: absolute;
}

.arrow_box:after {
	border-width: 5px;
}
.arrow_box:before {
	border-left-color: #000;
	border-width: 5px;
}

.arrow_box--open{
   transform: rotateZ(90deg);
   transform-origin: 50% 50%;
}*/

</style>
