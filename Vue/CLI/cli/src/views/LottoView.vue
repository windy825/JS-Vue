<template>
  <div>
    <h1>로또번호 추천</h1>
    <h2>{{ $route.params.lottoNum }}개의 번호를 추첨합니다.</h2>
    <button @click="getLotto" >Pick my lotto Numbers</button>
    <p>오늘의 추천 번호?</p>
    <p>{{ selectedNums }}</p>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
    name: 'LottoView',
    data: function () {
        return {
            selectedNums: [],
        }
    },
    methods: {
        getLotto: function () {
            const numbers = _.range(1, 46)
            this.selectedNums = _.sampleSize(numbers, this.$route.params.lottoNum)
        }
    }
}
</script>

<style>

</style>