<template>
  <div>
    <h1>物件情報詳細</h1>
    <p>{{ id }}</p>
    <nuxt-link to=":id/edit">物件情報変更</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  }
}
</script>
