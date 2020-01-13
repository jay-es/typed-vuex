/**
 * Nuxt Typed Vuex
 */

import { getterTree, mutationTree } from 'typed-vuex'

export const state = () => ({
  count: 0
})

export const getters = getterTree(state, {
  negative: (state) => -state.count
})

export const mutations = mutationTree(state, {
  INCREMENT: (state) => (state.count += 1),
  DECREMENT: (state) => (state.count -= 1)
})
