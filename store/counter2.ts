/**
 * vuex-module-decorators
 */

import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'counter2',
  stateFactory: true,
  namespaced: true
})
export default class Counter2 extends VuexModule {
  count = 0

  get negative() {
    return -this.count
  }

  @Mutation
  INCREMENT() {
    this.count += 1
  }

  @Mutation
  DECREMENT() {
    this.count -= 1
  }
}
