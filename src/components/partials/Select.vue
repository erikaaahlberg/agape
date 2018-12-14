<template>
  <b-field label="Välj en kategori">
    <b-select placeholder="Kategori">
			<option value="coaching">Coaching</option>
			<option value="tarot-runor">Tarot/Runor</option>
			<option value="workshop">Workshop</option>
			<option value="lecture">Föreläsning</option>
    </b-select>
  </b-field>
</template>

<script>
export default {
  name: 'Select',
  props: [ 
    'placeholderText',
    'description',
    'imgUrl'
  ],
  data() {
    return { data }
  }
};
</script>

<style>
</style>