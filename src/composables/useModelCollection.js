import { api } from 'src/boot/axios'
import { computed } from 'vue'

export default (Model, persistBy = 'create') => {
  const entity = Model.entity

  async function fetch () {
    const response = await api.get(entity)
    Model[persistBy]({ data: response.data.data })
    return response
  }

  const collection = computed(() => Model.all())

  const ids = computed(() => collection.value.map(val => val.id))

  return {
    fetch,
    collection,
    ids
  }
}
