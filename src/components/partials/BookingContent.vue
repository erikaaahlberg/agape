<template>
<section>
        <div class="booking-body" 
        v-for="content in bookingContent" 
        :key="content.id">
        <!--ny komponent-->  
          <div class="booking-content">
            <h4>{{ content.time }}</h4>

            <ul class="bookings__list">
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
      'bookingContent'
    ]
}
</script>
<style lang="scss">

</style>