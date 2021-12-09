<script setup>
import BDialogButton from './base/BDialogButton.vue'
import useModel from 'src/composables/useModel'
import { ref } from 'vue'
import TodoList from 'src/models/TodoList'

const {
  create: createTodoList,
  creating: creatingTodoList
} = useModel(TodoList)

const form = ref({
  label: ''
})

const dialogButton = ref()

async function createTodoListButtonClicked () {
  await createTodoList(form.value)
  form.value.label = ''
  dialogButton.value.hide()
}
</script>

<template>
  <BDialogButton ref="dialogButton">
    <q-card-section>
      <q-form>
        <q-input
          v-model="form.label"
          label="title"
          filled
        />
        <q-btn
          label="Create"
          class="q-mt-md"
          :loading="creatingTodoList"
          @click="createTodoListButtonClicked"
        />
      </q-form>
    </q-card-section>
  </BDialogButton>
</template>
