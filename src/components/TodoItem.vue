<script setup>
import useModel from 'src/composables/useModel'
import Todo from 'src/models/Todo'
import { watchEffect, ref } from 'vue'

const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
})

const loading = ref(false)

const todoService = useModel(Todo)

watchEffect(() => {
  todoService.id.value = props.todo.id
})

async function toggleTodo (id) {
  loading.value = true
  await todoService.update({ complete: !todoService.model.value.complete })
  loading.value = false
}

const label = ref(props.todo.label)
async function updateTodoLabel () {
  focused.value = false
  if (label.value === props.todo.label) {
    return
  }
  loading.value = true
  await todoService.update({ label: label.value })
  loading.value = false
}

const focused = ref(false)
</script>

<template>
  <q-item>
    <q-item-section side>
      <q-checkbox
        :disable="loading"
        :model-value="!!todo.complete"
        @update:model-value="toggleTodo(todo.id)"
      />
    </q-item-section>
    <q-item-section>
      <q-input
        v-model="label"
        :loading="loading"
        dense
        :borderless="!focused"
        @focus="focused = true"
        @blur="updateTodoLabel"
      />
    </q-item-section>
  </q-item>
</template>
