<template>
  <div>
    <h1>{{ countNumber }}</h1>
    <button @click="countUp">カウントアップ</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import { countStore } from "~/utils/store-accessor"


@Component
export default class Index extends Vue {
  private get countNumber(): number {
    return countStore.count
  }

  private countUp(): void {
    countStore.increment(1)
  }
}
</script>

