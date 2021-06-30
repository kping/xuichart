<template>
<div style="width: 600px;height: 600px;" ref="chartRef">

</div>
</template>

<script>
  export default {
    name: 'coolSimple',
    mounted() {
      this.showChart();
    },
    methods:{
      showChart(){
        let options = this.getOptions();
        let echarts = this.$echarts.init(this.$refs.chartRef, 'normal')
        echarts.setOption(options)
      },
      getOptions(){
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
        const e = [1688, 2368, 2555, 3009, 3482], o = e.map(t => t + .5);
        var a = [{
          border: "rgba(255, 255, 255, 1)",
          start: "rgba(25,101,178,1)",
          end: "rgba(74,172,234,1)"
        }, {
          border: "rgba(255, 255, 255, 1)",
          start: "rgba(11,125,75,1)",
          end: "rgba(22,189,107,1)"
        }, {
          border: "rgba(255, 255, 255, 1)",
          start: "rgba(184,89,39,1)",
          end: "rgba(255,138,79,1)"
        }, {
          border: "rgba(255, 255, 255, 1)",
          start: "rgba(32,10,84,1)",
          end: "rgba(104,48,206,1)"
        }, {border: "rgba(255, 255, 255, 1)", start: "rgba(245,59,101,1)", end: "rgba(243,70,110,1)"}];
        return {
          title: {
            text: '"两品一标"农产品数量',
            left: "120",
            backgroundColor: r({start: "rgba(16,74,85,0.1)", end: "rgba(16,74,85,0.33)"}),
            borderRadius: 4,
            padding: [5, 20],
            textStyle: {color: "#fff"}
          },
          grid: {left: 10, top: 70, bottom: 40, right: 10, containLabel: !0},
          tooltip: {trigger: "axis", formatter: "{b} : {c}", axisPointer: {type: "shadow"}},
          xAxis: {
            data: ["2016", "2017", "2018", "2019", "2020(预计)"],
            axisLine: {show: !1, lineStyle: {color: "#3eb2e8"}},
            axisTick: {show: !1},
            axisLabel: {interval: 0, textStyle: {color: "#fff"}},
            offset: 10
          },
          yAxis: {
            name: "单位：个",
            nameTextStyle: {color: "rgba(167,167,167,1)", fontSize: 12},
            axisLine: {show: !1},
            axisTick: {show: !1},
            axisLabel: {color: "rgba(255,255,255,1)", fontSize: 14},
            splitLine: {show: !0, lineStyle: {color: "#ffffff3a"}}
          },
          series: [{
            name: "a",
            tooltip: {show: !1},
            type: "bar",
            barWidth: 16,
            itemStyle: {
              normal: {
                borderWidth: 1, borderColor: "rgba(255,255,255, 0.1)", color: function (t) {
                  var e = a[t.dataIndex].start, o = a[t.dataIndex].end;
                  return r({x1: 1, start: e, end: o})
                }
              }
            },
            data: e,
            barGap: 0
          }, {
            type: "bar",
            barWidth: 8,
            itemStyle: {
              normal: {
                borderWidth: 1, borderColor: "rgba(255,255,255, 0.1)", color: function (t) {
                  var e = a[t.dataIndex].start, o = a[t.dataIndex].end;
                  return r({start: e, end: o})
                }
              }
            },
            barGap: 0,
            z: 1,
            data: o
          }, {
            name: "b",
            tooltip: {show: !1},
            type: "pictorialBar",
            itemStyle: {
              borderWidth: 1, borderColor: "rgba(255,255,255,0.1)", color: function (t) {
                var e = a[t.dataIndex].start, o = a[t.dataIndex].end;
                return r({start: e, end: o})
              }
            },
            symbol: "path://M 0,0 l 120,0 l -30,60 l -120,0 z",
            symbolSize: ["24", "6"],
            symbolOffset: ["-1", "-3"],
            symbolPosition: "end",
            data: e,
            z: 3
          }, {
            name: "topval",
            tooltip: {show: !1},
            type: "pictorialBar",
            itemStyle: {
              normal: {
                color: function (t) {
                  var e = a[t.dataIndex].start, o = a[t.dataIndex].end;
                  return r({start: e, end: o})
                },
                opacity: .6,
                label: {show: !0, fontSize: 14, position: "top", formatter: "{c}", color: "#fff"}
              }
            },
            symbol: "path://M 9 18  L 0 0  L 41 0  L 31.9072681704239 18  L 9 18  Z",
            symbolSize: ["22", "14"],
            symbolOffset: ["0", "-16"],
            symbolPosition: "end",
            data: e,
            z: 3
          }, {
            name: "b",
            tooltip: {show: !1},
            type: "pictorialBar",
            itemStyle: {
              normal: {
                color: function (t) {
                  return {
                    type: "radial",
                    x: .5,
                    y: .5,
                    r: 1,
                    colorStops: [{offset: 0, color: "transparent"}, {
                      offset: .5,
                      color: a[t.dataIndex].start
                    }, {offset: .8, color: a[t.dataIndex].end}]
                  }
                }
              }
            },
            symbol: "path://M 0,0 l 120,0 l -30,60 l -120,0 z",
            symbolSize: ["38", "10"],
            symbolOffset: ["0", "4"],
            data: e,
            z: 2
          }, {
            name: "b",
            tooltip: {show: !1},
            type: "pictorialBar",
            itemStyle: {
              normal: {
                color: function (t) {
                  return {
                    type: "radial",
                    x: .5,
                    y: .5,
                    r: 1,
                    colorStops: [{offset: 0, color: "transparent"}, {
                      offset: .7,
                      color: a[t.dataIndex].start
                    }, {offset: 1, color: a[t.dataIndex].end}]
                  }
                }
              }
            },
            symbol: "path://M 0,0 l 120,0 l -30,60 l -120,0 z",
            symbolSize: ["50", "10"],
            symbolOffset: ["0", "8"],
            data: e,
            z: 2
          }]
        }
      }
    }
  }
</script>

<style scoped>

</style>
