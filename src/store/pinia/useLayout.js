import { defineStore } from 'pinia'

export const useLayout = defineStore('layout', {
  state () {
    return {
      leftDrawerOpen: true
    }
  },

  actions: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
})
