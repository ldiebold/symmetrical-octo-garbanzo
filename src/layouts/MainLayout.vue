<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>{{ fullName }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
          class="row items-center"
        >
          Todo Lists
          <q-space />
          <CreateTodoListButton
            flat
            icon="add"
          />
        </q-item-label>
        <TodoList />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import CreateTodoListButton from 'src/components/CreateTodoListButton.vue'
import TodoList from 'src/components/TodoList.vue'
import { useAuth } from 'src/store/pinia/useAuth'
import { useLayout } from 'src/store/pinia/useLayout'

const { fullName } = useAuth()

const { toggleLeftDrawer } = useLayout()
const { leftDrawerOpen } = storeToRefs(useLayout())
</script>
