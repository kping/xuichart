<template>
  <div ref="chartRef" style="width: 100%; height: 400px;">
  </div>
</template>

<script>
  import xuichart from '../../chart/xuichart'

  export default {
    name: 'barSimple',
    mounted() {
      this.showChart()
    },
    methods: {
      showChart() {
        let echarts = this.$echarts.init(this.$refs.chartRef, 'normal')
        let data = [{
          name: '2021-01',
          value: 1,
        }, {
          name: '2021-02',
          value: 2,
        }, {
          name: '2021-03',
          value: 2,
        }, {
          name: '2021-04',
          value: 2,
        }, {
          name: '2021-05',
          value: 2,
        }, {
          name: '2021-06',
          value: 2,
        }]

        let data2 = [{
          name: '2021-01',
          value: 8,
        }, {
          name: '2021-02',
          value: 4,
        }, {
          name: '2021-03',
          value: 4,
        }, {
          name: '2021-04',
          value: 5,
        }, {
          name: '2021-05',
          value: 6,
        }, {
          name: '2021-06',
          value: 4,
        }]
        let series = {
          name: '2020',
          data: data,
          markLine: 10
        }

        let series2 = {
          name: '2021',
          data: data2,
        }
        let options = xuichart.getBarChart([series, series2], {
          color: ['red', 'green'],
          unit: 'kg',
          showLegend: true,
          yAxis: {
            minInterval: 1,
          },
          grid: {
            top: 100,
            right: 80
          },
          legend: {
            top: 20,
          },
          xAxis: {
            axisLabel: {
              rotate: 30,
            },
          },
        })
        console.log(JSON.stringify(options))
        echarts.setOption(options)
      },
    },
  }
</script>

<style scoped>

</style>
