<template>
  <div>/物件情報変更/{{ id }}</div>
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
