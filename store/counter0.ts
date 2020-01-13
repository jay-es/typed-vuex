/**
 * Vanilla Vuex
 */

import { GetterTree, MutationTree } from 'vuex'

export const state = () => ({
  count: 0
})

export type CounterState = ReturnType<typeof state>

export const getters: GetterTree<CounterState, CounterState> = {
  negative: (state) => -state.count
}

export const mutations: MutationTree<CounterState> = {
  INCREMENT: (state) => (state.count += 1),
  DECREMENT: (state) => (state.count -= 1)
}
