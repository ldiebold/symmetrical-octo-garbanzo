import { Model } from '@vuex-orm/core'

export default class Todo extends Model {
  static entity = 'todos'

  static fields () {
    return {
      id: this.attr(null),
      label: this.attr(null),
      complete: this.attr(false)
    }
  }
}
