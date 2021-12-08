import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import Todo from 'src/models/Todo'
import TodoList from 'src/models/TodoList'
import VuexORM from '@vuex-orm/core'

const database = new VuexORM.Database()

database.register(Todo)
database.register(TodoList)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    plugins: [VuexORM.install(database)],

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
