<template>
  <div>
    <p>物件情報一覧</p>
    <h1>物件情報詳細</h1>
    <ul>
      <li v-for="item in houses" :key="item.name">物件名: {{ item.name }}</li>
      <li v-for="item in houses" :key="item.housenum">
        部屋番号: {{ item.housenum }}
      </li>
      <li v-for="item in houses" :key="item.about">
        物件概要: {{ item.about }}
      </li>
      <li v-for="item in houses" :key="item.adressnum">
        郵便番号: {{ item.adressnum }}
      </li>
      <li v-for="item in houses" :key="item.adress">住所: {{ item.adress }}</li>
      <li v-for="item in houses" :key="item.fee">月額家賃: {{ item.fee }}</li>
      <li v-for="item in houses" :key="item.rule">
        ハウスルール: {{ item.rule }}
      </li>
    </ul>
    <nuxt-link to="houses/new">新規物件登録</nuxt-link>
    <nuxt-link to="houses/:id">物件情報詳細</nuxt-link>
    <nuxt-link to="houses/edit">物件情報変更</nuxt-link>
  </div>
</template>

<b-table :data="data" :columns="columns"></b-table>

<script>
export default {
  name: 'HousesList',
  asyncData({ store }) {
    const houses = store.state.houses
    return houses
  }
}
export { HousesList }
function HousesList() {
  return {
    data: [
      {
        id: 1,
        first_name: 'Jesse',
        last_name: 'Simmons',
        date: '2016-10-15 13:43:27',
        gender: 'Male'
      },
      {
        id: 2,
        first_name: 'John',
        last_name: 'Jacobs',
        date: '2016-12-15 06:00:53',
        gender: 'Male'
      },
      {
        id: 3,
        first_name: 'Tina',
        last_name: 'Gilbert',
        date: '2016-04-26 06:26:28',
        gender: 'Female'
      },
      {
        id: 4,
        first_name: 'Clarence',
        last_name: 'Flores',
        date: '2016-04-10 10:28:46',
        gender: 'Male'
      },
      {
        id: 5,
        first_name: 'Anne',
        last_name: 'Lee',
        date: '2016-12-06 14:38:38',
        gender: 'Female'
      }
    ],
    columns: [
      {
        field: { name },
        label: 'ID',
        width: '40',
        numeric: true
      },
      {
        field: 'first_name',
        label: 'First Name'
      },
      {
        field: 'last_name',
        label: 'Last Name'
      },
      {
        field: 'date',
        label: 'Date',
        centered: true
      },
      {
        field: 'gender',
        label: 'Gender'
      }
    ]
  }
}
</script>
