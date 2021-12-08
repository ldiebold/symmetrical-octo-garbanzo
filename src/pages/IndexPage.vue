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
            @click="createTodoButtonClicked"
          />
        </q-form>
      </q-card-section>
    </q-card>

    <pre>{{ allTodos }}</pre>
  </q-page>
</template>

<script setup>
// import { api } from 'src/boot/axios'
import { api } from 'src/boot/axios'
import { ref } from 'vue'

const form = ref({
  label: ''
})

function createTodoButtonClicked () {
  api.post('todos', form.value)
    .then((response) => {
      allTodos.value.push(response.data.data)
    })
}

const allTodos = ref([])

api.get('todos')
  .then(response => {
    allTodos.value = response.data.data
  })
</script>
