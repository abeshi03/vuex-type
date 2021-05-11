import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

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

  // Mutaionデコレーターを定義
  @Mutation
  increment(sumCount: number): void {
    this._count += sumCount
  }

  // 非同期処理を定義
  @Action
  countAction() {
    setTimeout((): void => {
      this.increment(1)
    }, 3000)
  }
}
