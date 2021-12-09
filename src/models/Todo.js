import { Model } from '@vuex-orm/core'
import TodoList from './TodoList'

export default class Todo extends Model {
  static entity = 'todos'

  static fields () {
    return {
      id: this.attr(null),
      label: this.attr(null),
      complete: this.attr(false),
      todo_list_id: this.attr(null),
      todo_list: this.belongsTo(TodoList, 'todo_list_id')
    }
  }
}
