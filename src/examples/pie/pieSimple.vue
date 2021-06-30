<template>
  <div style="width:100%;height: 400px" ref="chartRef"></div>
</template>

<script>
  import xuichart from '../../chart/xuichart'

  export default {
    name: 'pieSimple',
    mounted() {
      this.showChart()
    },
    methods: {
      showChart() {
        let data = [{
          name: 'pm25',
          value: 10,
        }, {
          name: 'pm10',
          value: 30,
        }]
        let series = {
          name: '空气质量分析',
          data,
        }
        let echarts = this.$echarts.init(this.$refs.chartRef, 'normal')
        let options = xuichart.getPieChart([series], {
          showLabelLine: true,
        })
        echarts.setOption(options)
      },
    },
  }
</script>

<style scoped>

</style>
