import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import CountStore from '~/store/CountStore'

let countStore: CountStore

function initialiseStores(store: Store<any>): void {
  countStore = getModule(CountStore, store)
}

export { initialiseStores, countStore }
