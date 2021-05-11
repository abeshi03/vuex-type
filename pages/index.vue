<template>
  <div>
    <h1>テスト{{userName}}</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import { userStore } from "~/utils/store-accessor"


@Component
export default class Index extends Vue {
  get userName() {
    return userStore.user
  }
}
</script>

