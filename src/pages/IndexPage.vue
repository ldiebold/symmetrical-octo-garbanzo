<template>
  <q-page class="column flex-center">
    <q-card>
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
            :loading="creating"
            @click="createTodoButtonClicked"
          />
        </q-form>
      </q-card-section>
    </q-card>

    <q-card style="min-width: 300px;">
      <q-list>
        <TodoItem
          v-for="currentTodo in Todo.all()"
          :key="currentTodo.id"
          :todo="currentTodo"
        />
      </q-list>
    </q-card>
    <pre>{{ Todo.all() }}</pre>
  </q-page>
</template>

<script setup>
import { api } from 'src/boot/axios'
import TodoItem from 'src/components/TodoItem.vue'
import useModel from 'src/composables/useModel'
import Todo from 'src/models/Todo'
import { ref } from 'vue'

const todo = useModel(Todo)

const form = ref({
  label: ''
})

const creating = ref(false)

async function createTodoButtonClicked () {
  creating.value = true
  await todo.create(form.value)
  form.value.label = ''
  creating.value = false
}

api.get('todos')
  .then(response => {
    Todo.insert({ data: response.data.data })
  })
</script>
