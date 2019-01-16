<template>
<section>
        <div class="booking-body" 
        v-for="content in bookingContent" 
        :key="content.id">
        <!--ny komponent-->  
          <div class="booking-content">
            <h4>{{ content.time }}</h4>

            <ul class="booking-list">
              <li><label for="firstName">Namn:</label> {{ content.firstName }} </li>
              <li><label for="lastName">Efternamn:</label> {{ content.lastName }} </li>
              <li><label for="email">Email:</label> {{ content.email }} </li>
              <li><label for="phone">Telefonnummer:</label> {{ content.phone }} </li>
              <li><label for="category">Kategori:</label> {{ content.category }} </li>
              <li><label for="description">Beskrivning:</label> {{ content.description }} </li>
            </ul>

            <div class="btn-wrapper">
              <a href="#" type="button" class="btn-purple">Redigera</a>
              <a href="#" type="button" class="btn-red">Ta bort</a>
            </div>
          </div>
        <!--/ny-->

        </div>
        <!--/booking-body-->
				</section>
</template>
<script>
export default {
  props: [
    'bookingContent',
    'isOpen'
  ],/*
      computed: {
      accordionClasses: function () {
        return {
          'is-closed': !this.isOpen,
          'is-primary': this.isOpen,
          'is-dark': !this.isOpen
        };
      }
      }/*,
    data: function () {
      return {
        isOpen: false
      }
    }*/
}
</script>
<style lang="scss">
  @import '@/scss/_variables.scss';
  section {
    width: 100%;
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
  }
</style>