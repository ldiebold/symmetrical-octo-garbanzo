<script setup>
import BDialogButton from './base/BDialogButton.vue'
import useModel from 'src/composables/useModel'
import { ref } from 'vue'
import Todo from 'src/models/Todo'
import BModelForm from './base/BModelForm.vue'

const props = defineProps({
  todoListId: {
    required: true,
    type: [String, Number]
  }
})

const {
  create: createTodo,
  creating: creatingTodo
} = useModel(Todo)

const form = ref({
  label: '',
  todo_list_id: null
})

const dialogButton = ref()

async function createTodoButtonClicked () {
  form.value.todo_list_id = props.todoListId
  await createTodo(form.value)
  form.value.label = ''
  dialogButton.value.hide()
}
</script>

<template>
  <BDialogButton ref="dialogButton">
    <q-card-section>
      <BModelForm
        v-model="form"
        :schema="Todo.schema"
        :input-props="{
          color: 'green',
          filled: true,
          class: 'q-mb-sm'
        }"
      >
        <template #field-label="scope">
          <q-input
            :model-value="scope.modelValue"
            @update:model-value="scope.onUpdateModelValue"
          />
        </template>

        <template #bottom>
          <q-btn
            label="Create"
            class="q-mt-md"
            :loading="creatingTodo"
            @click="createTodoButtonClicked"
          />
        </template>
      </BModelForm>
    </q-card-section>
  </BDialogButton>
</template>
