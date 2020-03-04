<template>
  <div>
    <h1>契約</h1>
    <p>{{ id }}</p>
    <nuxt-link to="bookingsID/edit">契約詳細</nuxt-link>
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
