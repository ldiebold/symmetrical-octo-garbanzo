<template>
  <q-page class="column flex-center">
    <q-card style="min-width: 300px;">
      <q-list>
        <TodoItem
          v-for="currentTodo in todosFiltered"
          :key="currentTodo.id"
          :todo="currentTodo"
        />
      </q-list>
    </q-card>

    <q-page-sticky
      position="bottom-right"
      :offset="[28, 28]"
    >
      <CreateTodoButton
        icon="add"
        color="accent"
        :todo-list-id="route.params.todoListId"
        fab
      />
    </q-page-sticky>
  </q-page>
</template>

<script setup>
import TodoItem from 'src/components/TodoItem.vue'
import useModelCollection from 'src/composables/useModelCollection'
import Todo from 'src/models/Todo'
import CreateTodoButton from 'src/components/CreateTodoButton.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const { fetch: fetchTodos, collection: todos } = useModelCollection(Todo)
fetchTodos()

const todosFiltered = computed(() => {
  return todos.value.filter(todo => todo.todo_list_id === parseInt(route.params.todoListId))
})
</script>
