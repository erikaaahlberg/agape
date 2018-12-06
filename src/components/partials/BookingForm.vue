<template>
  <section class="book-input">
    <b-field>
      <b-input placeholder="Förnamn" type="text"></b-input>
    </b-field>

    <b-field>
      <b-input placeholder="Efternamn" type="text"></b-input>
    </b-field>

    <b-field>
      <b-input placeholder="Email" type="email"></b-input>
    </b-field>

    <b-field>
      <b-input placeholder="Telefonnummer" type="tel" min="10" max="10">
      </b-input>
    </b-field>

    <b-field class="textarea-wrapper">
      <b-input type="textarea" minlength="10" maxlength="100" placeholder="Beskriv kortfattat vad du vill ha hjälp med">
      </b-input>
    </b-field>
  </section>
</template>

<script>
  /*export default {
    name: 'BookingForm'
  }*/

</script>

<style lang="scss">
@import '@/scss/_variables.scss';

#book{
	.book-input{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.textarea-wrapper{
		flex-basis: 100%;
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
