<template>
<section>
        <div class="booking-body" 
        v-for="content in bookingContent" 
        :key="content.id">
        <!--ny komponent-->  
          <div class="booking-content">
            <h4>{{ content.time }}</h4>

            <ul class="booking-list">
              <li>
                <label for="firstName">Namn:</label>
                  <b-field>
                    <b-input 
                    :placeholder=content.firstName 
                    type="text" 
                    v-model="firstName" 
                    id="email-input" 
                    use-html5-validation>
                    </b-input>
                </b-field> 
              </li>
              <li>
                <label for="lastName">Efternamn:</label>
                  <b-field>
                    <b-input 
                    :placeholder=content.lastName 
                    type="text" 
                    v-model="lastName" 
                    id="email-input" 
                    use-html5-validation
                    :disabled=true>
                    </b-input>
                </b-field> 
              </li>
              <li>
                <label for="email">Email:</label>
                  <b-field>
                    <b-input 
                    :placeholder=content.email 
                    type="email" 
                    v-model="email" 
                    id="email-input" 
                    use-html5-validation>
                    </b-input>
                </b-field> 
              </li>
              <li>
                <label for="phone">Telefonnummer:</label> 
                  <b-field>
                    <b-input 
                    :placeholder=content.phone 
                    type="tel" 
                    v-model="phone" 
                    id="email-input" 
                    use-html5-validation>
                    </b-input>
                </b-field> 
              </li>
              <li>
                <label for="category">Kategori:</label> 
                  <b-field>
                    <b-input 
                    :placeholder=content.category 
                    type="text" 
                    v-model="category" 
                    id="email-input" 
                    use-html5-validation>
                    </b-input>
                </b-field> 
              </li>
              <li>
                <label for="description">Beskrivning:</label>
                  <b-field>
                    <b-input 
                    :placeholder=content.description 
                    type="text" 
                    v-model="description" 
                    id="email-input" 
                    use-html5-validation>
                    </b-input>
                </b-field> 
              </li>
            </ul>

            <div class="btn-wrapper">
              <a href="#" type="button" class="btn-purple">Redigera</a>
              <a href="#" type="button" class="btn-red" @click="getIdToDelete(content.id)">Ta bort</a>
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
  ],
  methods: {
    getIdToDelete: function (bookingId) {
      this.$emit('getIdToDelete', bookingId);
    },
    getInputToUpdate: function (input) {
      console.log('hej');
    }
      /*const requestBody = {
        id: bookingId,
      };

      fetch("http://localhost:3001/bookings/delete", {
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
        body: JSON.stringify(requestBody),
      })
        .then((response) => {
          if (response.ok) {
            return;
          }
          const message = "Det gick inte att ta bort bokningen. Försök igen.";
          //this.triggerShowModal(message, true);
        })
        .then(() => {
          console.log('yes');
          //this.updateAdminState();
        });*/
    
  }/*
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

      ul.booking-list {
        margin-top: 20px;
        margin-bottom: 20px;

        li {
          margin: 5px;
          text-transform: none;
          letter-spacing: 1.5px;
          label {
            display: inline-block;
            letter-spacing: 1.5px;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 1.1em;
          }
          .field {
            display: inline-block;
          }
          input {
            background: transparent;
            border: none;
            margin-top: -7px;
            //display: inline-block;
            //border-bottom: 1px solid $lightGrey;
            //border-radius: 0px;
            color: $white;
            font-family: 'Hind', sans-serif;
            letter-spacing: 1.5px;
            padding: 0px;
            //padding-bottom: 5px;
            &:focus {
              border-color: none;
              box-shadow: none;
            }
          }
          input:-webkit-autofill,input:-webkit-internal, input:-webkit-selected,
          input:-webkit-autofill:hover, 
          input:-webkit-autofill:focus {
            background: transparent;
          }
          ::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: $white;
          font-family: 'Hind', sans-serif;
          letter-spacing: 1.5px;
        }

        ::-moz-placeholder {
          /* Firefox 19+ */
          color: $white;
          font-family: 'Hind', sans-serif;
          letter-spacing: 1.5px;
        }

        :-ms-input-placeholder {
          /* IE 10+ */
          color: $white;
          font-family: 'Hind', sans-serif;
          letter-spacing: 1.5px;
        }

        :-moz-placeholder {
          /* Firefox 18- */
          color: $white;
          font-family: 'Hind', sans-serif;
          letter-spacing: 1.5px;
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