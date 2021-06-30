<template>
  <div style="width: 600px;height: 600px;" ref="chartRef">

  </div>
</template>

<script>
  export default {
    name: 'coolSimple',
    mounted() {
      this.showChart()
    },
    methods: {
      showChart() {
        let options = this.getOptions()
        let echarts = this.$echarts.init(this.$refs.chartRef, 'normal')
        echarts.setOption(options)
      },
      getOptions() {
        const r = function ({type: t, x: e, y: o, x2: a, y2: i, start: r, end: n}) {
          return {
            type: t || "line",
            x: e || 0,
            y: o || 1,
            x2: a || 0,
            y2: i || 0,
            colorStops: [{offset: 0, color: r}, {offset: 1, color: n}],
            global: !1
          }
        }
        let t = ["2016", "2017", "2018", "2019", "2020"];
        const e =  [650, 5264, 6830, 7706, 8000];
        var o = e, a = [r({start: "rgba(94,150,225,1)", end: "rgba(121,178,238,1)"}), r({
          start: "rgba(40,162,132,1)",
          end: "rgba(105,243,129,1)"
        }), r({start: "rgba(90,63,189,0.8)", end: "rgba(123,126,249,1)"}), r({
          start: "rgba(218,48,93,1)",
          end: "rgba(248,188,92,1)"
        }), r({start: "rgba(52,154,167,1)", end: "rgba(233,244,111,1)"})];
        return {
          tooltip: {
            textStyle: {fontSize: 50}, trigger: "", padding: 1, formatter: function (t) {
            }
          },
          grid: {left: "10px", right: "10px", top: "40px", bottom: "10px", containLabel: !0},
          legend: {
            show: !1,
            icon: "circle",
            orient: "horizontal",
            top: "90.5%",
            right: "center",
            itemWidth: 16.5,
            itemHeight: 6,
            textStyle: {color: "#C9C8CD", fontSize: 14}
          },
          xAxis: [{
            data: t,
            axisLabel: {show: !0, textStyle: {color: "#fff", fontSize: 12}, margin: 30},
            axisLine: {show: !1},
            axisTick: {show: !1},
            boundaryGap: !0,
            splitLine: {show: !1, width: .08, lineStyle: {type: "solid", color: "#03202E"}}
          }],
          yAxis: [{
            name: "单位：万平方米",
            nameTextStyle: {color: "rgba(167,167,167,1)", fontSize: 12, padding: [0, 0, 0, 20]},
            axisLine: {show: !1},
            axisLabel: {color: "rgba(255,255,255,1)", fontSize: 14},
            axisTick: {show: !1},
            splitLine: {show: !0, lineStyle: {color: "#ffffff3a"}}
          }],
          series: [{
            name: "",
            type: "pictorialBar",
            symbolSize: [40, 22],
            symbolOffset: [0, 10],
            z: 12,
            itemStyle: {
              normal: {
                color: function (t) {
                  return a[t.dataIndex]
                }, opacity: .9
              }
            },
            data: o
          }, {
            name: "",
            type: "bar",
            barWidth: 40,
            barGap: "0%",
            label: {show: !0, position: [0, -30], textStyle: {color: "#fff", fontSize: 16}},
            itemStyle: {
              normal: {
                color: function (t) {
                  return a[t.dataIndex]
                }, opacity: .9
              }
            },
            data: o
          }, {
            name: "",
            type: "pictorialBar",
            symbolSize: [40, 22],
            symbolOffset: [0, -10],
            z: 12,
            symbolPosition: "end",
            itemStyle: {
              normal: {
                color: function (t) {
                  return a[t.dataIndex]
                }, opacity: .9
              }
            },
            data: o
          }]
        }
      },
    },
  }
</script>

<style scoped>

</style>
