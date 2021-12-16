<script setup>
import { computed } from 'vue'
import { QCheckbox, QInput } from 'quasar'

const typeComponentMap = {
  string: QInput,
  boolean: QCheckbox
}

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  schema: {
    type: Object,
    required: true
  },
  inputProps: {
    type: Object,
    required: false,
    default () {
      return {}
    }
  }
})

const emit = defineEmits(['update:model-value'])

const fields = computed(() => props.schema.fields)

function onInput (field, value) {
  console.log('hit')
  const formCopy = { ...props.modelValue }
  formCopy[field] = value
  emit('update:model-value', formCopy)
}

function getComponent (fieldKey) {
  return typeComponentMap[fieldKey] ?? QInput
}
</script>

<template>
  <q-form>
    <slot
      v-for="fieldKey in Object.keys(fields)"
      :key="fieldKey"
      :name="`field-${fieldKey}`"
      :model-value="modelValue[fieldKey]"
      :label="fields[fieldKey].form.label"
      :onUpdateModelValue="value => onInput(fieldKey, value)"
    >
      <component
        v-bind="inputProps"
        :is="getComponent(fieldKey)"
        :model-value="modelValue[fieldKey]"
        :label="fields[fieldKey].form.label"
        @update:model-value="value => onInput(fieldKey, value)"
      />
    </slot>

    <slot name="bottom" />
  </q-form>
</template>
