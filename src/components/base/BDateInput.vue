<script setup>
import { date } from 'quasar'
const { formatDate, extractDate } = date
import { ref } from 'vue'

const props = defineProps({
  modelValue: {
    required: true,
    type: [Date]
  },
  dateMask: {
    required: false,
    type: String,
    default: 'MM-DD-YYYY'
  },
  inputMask: {
    required: false,
    type: String,
    default: '##-##-####'
  }
})

const emit = defineEmits(['update:model-value'])

const _date = ref(formatDate(props.modelValue, props.dateMask))

function unformatDate (date) {
  return extractDate(date, props.dateMask).toISOString()
}

function onInputBlur () {
  emit('update:model-value', unformatDate(_date.value))
}

function onDateSelected () {
  emit('update:model-value', unformatDate(_date.value))
}
</script>

<template>
  <q-input
    v-model="_date"
    :mask="inputMask"
    style="max-width: 300px;"
    @blur="onInputBlur"
  >
    <template #append>
      <q-btn
        flat
        round
        icon="calendar_today"
      >
        <q-popup-proxy>
          <q-date
            v-model="_date"
            :mask="dateMask"
            @update:model-value="onDateSelected"
          >
            <q-btn
              v-close-popup
              flat
              label="close"
            />
          </q-date>
        </q-popup-proxy>
      </q-btn>
    </template>
  </q-input>
</template>
