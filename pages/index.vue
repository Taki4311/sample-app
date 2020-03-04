<template>
  <section class="main">
    <div>
      <nuxt-link to="profiles">オーナー情報管理</nuxt-link>
      <nuxt-link to="bookings">契約情報一覧</nuxt-link>
      <nuxt-link to="houses">物件情報管理</nuxt-link>
      <nuxt-link to="houses/new">新規物件登録</nuxt-link>
      <nuxt-link to="notifications">お知らせ</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>
