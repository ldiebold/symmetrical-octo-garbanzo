<script setup>
import BDateInput from 'src/components/base/BDateInput.vue'
import { ref } from 'vue'

const myDate = ref(new Date().toISOString())
</script>

<template>
  <q-page padding>
    <BDateInput v-model="myDate" />
    <pre>{{ myDate }}</pre>
    <q-btn @click="sendToServer">
      send to server
    </q-btn>
  </q-page>
</template>
