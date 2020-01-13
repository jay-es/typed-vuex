/**
 * Vuex Class Component
 */

import { createModule, mutation, extractVuexModule } from 'vuex-class-component'

const VuexModule = createModule({
  namespaced: 'counter3',
  strict: false,
  target: 'nuxt'
})

export class Counter3 extends VuexModule {
  count = 0

  get negative() {
    return -this.count
  }

  // FIXME: do not mutate vuex store state outside mutation handlers
  @mutation
  INCREMENT() {
    this.count += 1
  }

  @mutation
  DECREMENT() {
    this.count -= 1
  }
}

export default extractVuexModule(Counter3).counter3
