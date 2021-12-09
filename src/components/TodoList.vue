<script setup>
import useModelCollection from 'src/composables/useModelCollection'
import TodoList from 'src/models/TodoList'

const {
  fetch,
  collection: todoLists
} = useModelCollection(TodoList)
fetch()

</script>

<template>
  <q-list>
    <q-item
      v-for="todoList in todoLists"
      :key="todoList.id"
      clickable
      :to="`/list/${todoList.id}`"
    >
      <q-item-section>
        {{ todoList.label }}
      </q-item-section>
    </q-item>
  </q-list>
</template>
