<template>
  <div style="background: #080d05;" class="coolChartWrapper">
    <cool-simple></cool-simple>
    <cool-simple2></cool-simple2>
    <cool-simple3></cool-simple3>
    <cool-simple4></cool-simple4>
    <cool-simple5></cool-simple5>
    <cool-simple6></cool-simple6>
  </div>
</template>

<script>
  import coolSimple from './coolSimple'
  import coolSimple2 from './coolSimple2'
  import coolSimple3 from './coolSimple3'
  import coolSimple4 from './coolSimple4'
  import coolSimple5 from './coolSimple5'
  import coolSimple6 from './coolSimple6'

  export default {
    name: 'cool',
    components: { coolSimple, coolSimple2, coolSimple3, coolSimple4, coolSimple5, coolSimple6 },
  }
</script>

<style scoped lang="scss">
  .coolChartWrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;;
  }

</style>
