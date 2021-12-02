import { ref, computed } from 'vue'

export default () => {
  const myNumber = ref(5)

  function increment () {
    myNumber.value += 1
  }

  const doubled = computed(() => {
    return myNumber.value * 2
  })

  return {
    doubled,
    increment,
    myNumber
  }
}
