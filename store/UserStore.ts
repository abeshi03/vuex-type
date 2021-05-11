import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
  name: "UserStore",
  namespaced: true,
  stateFactory: true
})
export default class UserStore extends VuexModule {
  private _user: string = "こうへい"

  get user(): string {
    return this._user
  }
}
