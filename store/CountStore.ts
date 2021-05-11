import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: "CountStore",
  namespaced: true,
  stateFactory: true
})
export default class CountStore extends VuexModule {
  // 基本的にstateには直接アクセスしない方が良いのでこちらはprivateにしています
  private _count: number = 1

  // こちらがgettersの役割、stateからではなくgettersでアクセスしましょう
  public get count(): number {
    return this._count
  }

  @Mutation
  increment(sumCount: number): void {
    this._count += sumCount
  }
}
