<script setup>
import { ref } from 'vue'

const showDialog = ref(false)

const dialogComponent = ref()

defineExpose({
  hide: (...params) => dialogComponent.value.hide(...params),
  show: (...params) => dialogComponent.value.show(...params)
})
</script>

<template>
  <q-btn
    v-bind="$attrs"
    @click="showDialog = true"
  >
    <q-dialog
      ref="dialogComponent"
      v-model="showDialog"
    >
      <slot name="before-card" />
      <q-card>
        <slot name="default" />
      </q-card>
      <slot name="after-card" />
    </q-dialog>
  </q-btn>
</template>
