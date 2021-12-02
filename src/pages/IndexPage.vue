<template>
  <q-page class="flex flex-center">
    <CounterButton color="green" />
  </q-page>
</template>

<script>
import {
  defineComponent
} from 'vue'
import CounterButton from 'components/CounterButton.vue'

export default defineComponent({
  name: 'PageIndex',

  components: {
    CounterButton
  }

})
</script>
