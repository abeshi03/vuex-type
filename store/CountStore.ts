import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
  name: "CountStore",
  namespaced: true,
  stateFactory: true
})
export default class CountStore extends VuexModule {
  private _count: number = 1

  get count(): number {
    return this._count
  }
}
