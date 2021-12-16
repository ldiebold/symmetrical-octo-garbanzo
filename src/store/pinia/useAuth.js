import { defineStore } from 'pinia'

export const useAuth = defineStore('auth', {
  state () {
    return {
      user: {
        firstName: 'Luke',
        lastName: 'Diebold'
      }
    }
  },

  getters: {
    fullName () {
      return `${this.user.firstName} ${this.user.lastName}`
    }
  }
})

// users
