<template>
  <section class="book-input">
    <div class="select-wrapper">
      <b-field label="Välj en kategori">
        <b-select v-model="selectedOption" placeholder="-">
          <option 
					v-for="option in data" 
					:value="option.value" 
					:key="option.value">
            {{ option.title }}
          </option>
        </b-select>
      </b-field>
    </div>
    <label class="label title-label">Fyll i dina personliga uppgifter</label>
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
const data = [
	{
	value: 'coaching',
	title: 'Coaching'
	},	
	{
	value: 'tarot-runor',
	title: 'Tarot / Runor'
	},	
	{
	value: 'workshop',
	title: 'Workshop'
	},	
	{
	value: 'lecture',
	title: 'Föreläsning'
	},
];


export default {
  data() {
		return { data }
  }
}

</script>

<style lang="scss">
  @import '@/scss/_variables.scss';

  #book {
    .book-input {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .title-label {
      display: block;
      width: 100%;
    }

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
    }

    .textarea-wrapper {
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
