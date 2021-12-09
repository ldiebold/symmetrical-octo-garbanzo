import { api } from 'src/boot/axios'
import { ref, computed } from 'vue'

export default (Model) => {
  const id = ref()

  const entity = Model.entity
  const creating = ref(false)
  const fetching = ref(false)
  const removing = ref(false)
  const updating = ref(false)

  async function create (data) {
    creating.value = true
    const response = await api.post(entity, data)
    Model.insert({ data: response.data.data })
    id.value = response.data.data.id
    creating.value = false
    return response
  }

  async function fetch () {
    fetching.value = true
    const response = await api.get(`${entity}/${id.value}`)
    Model.insert({ data: response.data.data })
    fetching.value = false
    return response
  }

  async function remove () {
    removing.value = true
    const response = await api.delete(`${entity}/${id.value}`)
    Model.delete(id.value)
    removing.value = false
    return response
  }

  async function update (data) {
    updating.value = true
    const response = await api.patch(`${entity}/${id.value}`, data)
    Model.insert({ data: response.data.data })
    updating.value = false
    return response
  }

  const model = computed(() => Model.find(id.value))

  return {
    id,
    model,
    create,
    remove,
    update,
    fetch,
    creating,
    fetching,
    removing,
    updating
  }
}
