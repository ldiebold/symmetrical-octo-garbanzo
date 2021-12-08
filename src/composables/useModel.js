import { api } from 'src/boot/axios'
import { ref, computed } from 'vue'

export default (Model) => {
  const id = ref()

  const entity = Model.entity

  async function create (data) {
    const response = await api.post(entity, data)
    Model.insert({ data: response.data.data })
    id.value = response.data.data.id
    return response
  }

  async function fetch () {
    const response = await api.get(`${entity}/${id.value}`)
    Model.insert({ data: response.data.data })
    return response
  }

  async function remove () {
    const response = await api.delete(`${entity}/${id.value}`)
    Model.delete(id.value)
    return response
  }

  async function update (data) {
    const response = await api.patch(`${entity}/${id.value}`, data)
    Model.insert({ data: response.data.data })
    return response
  }

  const model = computed(() => Model.find(id.value))

  return {
    id,
    model,
    create,
    remove,
    update,
    fetch
  }
}
