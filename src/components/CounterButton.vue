<template>
  <q-btn
    :label="myNumber"
    v-bind="$attrs"
    @click="increment"
  />
  {{ doubled }}
</template>

<script setup>
import useCounter from './useCounter'

const {
  doubled,
  increment,
  myNumber
} = useCounter()
</script>
