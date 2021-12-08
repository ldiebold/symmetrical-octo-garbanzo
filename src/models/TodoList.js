import { Model } from '@vuex-orm/core'

export default class TodoList extends Model {
  static entity = 'todo_lists'

  static fields () {
    return {
      id: this.attr(null),
      label: this.attr(null),
      color: this.attr(null),
      icon: this.attr(null)
    }
  }
}
