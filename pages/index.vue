<template>
  <div>
    <h1>{{countNumber}}</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import { countStore } from "~/utils/store-accessor"


@Component
export default class Index extends Vue {
  get countNumber() {
    return countStore.count
  }
}
</script>

