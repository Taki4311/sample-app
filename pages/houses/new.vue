<template>
  <section>
    <b-field label="物件名称">
      <b-input v-model="name" placeholder="物件名" type="text"></b-input>
    </b-field>

    <b-field label="号室">
      <b-input
        v-model="housenum"
        placeholder="階層・号室"
        type="number"
      ></b-input>
    </b-field>

    <b-field label="物件概要">
      <b-input
        v-model="about"
        type="textarea"
        minlength="10"
        maxlength="100"
        placeholder="物件概要ー間取り、設備、周辺駅、周辺施設etc"
      >
      </b-input>
    </b-field>

    <b-field label="郵便番号">
      <b-input
        v-model="adressnum"
        type="number"
        minlength="6"
        maxlength="7"
        placeholder="郵便番号（ハイフンなし）"
      >
      </b-input>
    </b-field>

    <b-field label="物件所在地">
      <b-input v-model="adress" placeholder="表示住所" type="text"></b-input>
    </b-field>

    <b-field label="家賃(円)">
      <b-input v-model="fee" placeholder="月額家賃" type="number"></b-input>
    </b-field>

    <b-field label="ハウスルール">
      <b-input
        v-model="rule"
        type="textarea"
        minlength="10"
        maxlength="100"
        placeholder="ハウスルールー契約特約に係る内容やゴミ出し、駐輪などのルール"
      >
      </b-input>
    </b-field>
    <b-button @click="onClickButton">登録</b-button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      housenum: '',
      about: '',
      adressnum: '',
      adress: '',
      fee: '',
      rule: ''
    }
  },
  methods: {
    onClickButton() {
      this.$store.commit('houses/setHouses', {
        name: this.name,
        housenum: this.housenum,
        about: this.about,
        adressnum: this.adressnum,
        adress: this.adress,
        fee: this.fee,
        rule: this.rule
      })
      this.$router.push('/houses')
    }
  }
}
</script>
