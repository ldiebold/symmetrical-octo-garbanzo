<template>
  <q-btn
    @click="increment"
    :label="myNumber"
    v-bind="$attrs"
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
