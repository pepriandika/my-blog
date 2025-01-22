<script setup>
import BorderLabel from "@/components/sidebar/BorderLabel.vue";
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name (value) {
      if (value?.length >= 2) return true

      return 'Name needs to be at least 2 characters.'
    },
    subject (value) {
      if (value?.length > 0 ) return true

      return 'Subject Cannot be empty'
    },
    email (value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

      return 'Must be a valid e-mail.'
    },
    message (value) {
      if (value?.length > 0 ) return true

      return 'Message Cannot be empty'
    }
  },
})
const name = useField('name')
const subject = useField('subject')
const email = useField('email')
const message = useField('message')

const submit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2))
})
</script>

<template>
  <v-container>
    <v-row no-gutters class="justify-space-around justify-center align-center">
      <v-col cols="6" align-self="center" text-center>
        <h1>Lets Talk</h1>
        <br/>
        <p>"Halo! Saya senang Anda mampir.
          Kirimkan pesan Anda di sini, dan saya akan segera menjawabnya.
          Mari tetap terhubung.
          Jika Anda memiliki pertanyaan, proyek yang ingin didiskusikan, atau sekadar ingin mengobrol, jangan ragu untuk menghubungi saya.
          Saya dengan senang hati akan merespons pesan Anda secepat mungkin"</p>
      </v-col>
      <v-col cols="4">
        <BorderLabel msg="Contact Me">
          <form @submit.prevent="submit">
            <v-text-field
                v-model="name.value.value"
                :counter="10"
                :error-messages="name.errorMessage.value"
                label="Name"
            ></v-text-field>

            <v-text-field
                v-model="subject.value.value"
                :error-messages="subject.errorMessage.value"
                label="Subject"
            ></v-text-field>

            <v-text-field
                v-model="email.value.value"
                :error-messages="email.errorMessage.value"
                label="E-mail"
            ></v-text-field>

            <v-textarea
                v-model="message.value.value"
                :error-messages="message.errorMessage.value"
                label="Message"
                rows="3"
                rounded="true"
            ></v-textarea>

            <v-btn
                class="me-4"
                type="submit"
            >
              submit
            </v-btn>

            <v-btn @click="handleReset">
              clear
            </v-btn>
          </form>
        </BorderLabel>
      </v-col>
    </v-row>
  </v-container>
</template>


