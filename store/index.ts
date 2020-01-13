import { getAccessorType } from 'typed-vuex'
import * as counter1 from '~/store/counter1'

export const accessorType = getAccessorType({
  modules: {
    counter1
  }
})
