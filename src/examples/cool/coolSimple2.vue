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
        let a = JSON.parse('{"GNYK":[{"OBJECTID":1,"ZL":31134.47,"XZQJB":1,"XZQMC":"江西省","SJ":2014,"XZQDM":"360000","LX":"国内游客"},{"OBJECTID":3,"ZL":38392.18,"XZQJB":1,"XZQMC":"江西省","SJ":2015,"XZQDM":"360000","LX":"国内游客"},{"OBJECTID":97,"ZL":46913.39,"XZQJB":1,"XZQMC":"江西省","SJ":2016,"XZQDM":"360000","LX":"国内游客"},{"OBJECTID":85,"ZL":57064.59,"XZQJB":1,"XZQMC":"江西省","SJ":2017,"XZQDM":"360000","LX":"国内游客"},{"OBJECTID":73,"ZL":68344.05,"XZQJB":1,"XZQMC":"江西省","SJ":2018,"XZQDM":"360000","LX":"国内游客"},{"OBJECTID":2,"ZL":79275.45,"XZQJB":1,"XZQMC":"江西省","SJ":2019,"XZQDM":"360000","LX":"国内游客"},{"OBJECTID":4,"ZL":88645.01,"XZQJB":1,"XZQMC":"江西省","SJ":"2020\\n(预计)","XZQDM":"360000","LX":"国内游客"}],"LYSR":[{"OBJECTID":2,"ZL":2615.17,"XZQJB":1,"XZQMC":"江西省","SJ":2014,"XZQDM":"360000","LX":"国内旅游收入"},{"OBJECTID":4,"ZL":3600.45,"XZQJB":1,"XZQMC":"江西省","SJ":2015,"XZQDM":"360000","LX":"国内旅游收入"},{"OBJECTID":133,"ZL":4954.48,"XZQJB":1,"XZQMC":"江西省","SJ":2016,"XZQDM":"360000","LX":"国内旅游收入"},{"OBJECTID":121,"ZL":6392.56,"XZQJB":1,"XZQMC":"江西省","SJ":2017,"XZQDM":"360000","LX":"国内旅游收入"},{"OBJECTID":109,"ZL":8095.79,"XZQJB":1,"XZQMC":"江西省","SJ":2018,"XZQDM":"360000","LX":"国内旅游收入"},{"OBJECTID":2,"ZL":9656.38,"XZQJB":1,"XZQMC":"江西省","SJ":2019,"XZQDM":"360000","LX":"国内旅游收入"},{"OBJECTID":4,"ZL":11282.03,"XZQJB":1,"XZQMC":"江西省","SJ":"2020(预计)","XZQDM":"360000","LX":"国内旅游收入"}],"ZB":[{"OBJECTID":2,"ZL":42,"XZQJB":1,"XZQMC":"江西省","SJ":2020,"XZQDM":"360000","LX":"占比值"},{"OBJECTID":2,"ZL":37.04,"XZQJB":1,"XZQMC":"江西省","SJ":2018,"XZQDM":"360000","LX":"占比值"},{"OBJECTID":2,"ZL":32.17,"XZQJB":1,"XZQMC":"江西省","SJ":2017,"XZQDM":"360000","LX":"占比值"},{"OBJECTID":2,"ZL":27.15,"XZQJB":1,"XZQMC":"江西省","SJ":2016,"XZQDM":"360000","LX":"占比值"},{"OBJECTID":2,"ZL":21.68,"XZQJB":1,"XZQMC":"江西省","SJ":2015,"XZQDM":"360000","LX":"占比值"},{"OBJECTID":2,"ZL":16.81,"XZQJB":1,"XZQMC":"江西省","SJ":2014,"XZQDM":"360000","LX":"占比值"}],"DWNH":[{"OBJECTID":4,"ZL":0.4771,"XZQJB":1,"XZQMC":"江西省","SJ":2016,"XZQDM":"360000","LX":"单位GDP能耗"},{"OBJECTID":3,"ZL":0.4504,"XZQJB":1,"XZQMC":"江西省","SJ":2017,"XZQDM":"360000","LX":"单位GDP能耗"},{"OBJECTID":2,"ZL":0.4291,"XZQJB":1,"XZQMC":"江西省","SJ":2018,"XZQDM":"360000","LX":"单位GDP能耗"},{"OBJECTID":1,"ZL":0.4137,"XZQJB":1,"XZQMC":"江西省","SJ":2019,"XZQDM":"360000","LX":"单位GDP能耗"}],"XJZ":[{"OBJECTID":4,"ZL":4.96,"XZQJB":1,"XZQMC":"江西省","SJ":2016,"XZQDM":"360000","LX":"下降率"},{"OBJECTID":3,"ZL":5.59,"XZQJB":1,"XZQMC":"江西省","SJ":2017,"XZQDM":"360000","LX":"下降率"},{"OBJECTID":2,"ZL":4.74,"XZQJB":1,"XZQMC":"江西省","SJ":2018,"XZQDM":"360000","LX":"下降率"},{"OBJECTID":1,"ZL":3.59,"XZQJB":1,"XZQMC":"江西省","SJ":2019,"XZQDM":"360000","LX":"下降率"}]}')
        var t = [], e = [], o = [];
        for (let i = 0; i < a.DWNH.length; i++) t.push(a.DWNH[i].SJ), e.push(a.DWNH[i].ZL), o.push(a.XJZ[i].ZL);
        return {
          color: [{
            type: "linear",
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [{offset: 0, color: "rgba(79,216,255,0.6)"}, {offset: 1, color: "rgba(56,215,255,0.6)"}]
          }, {
            type: "line",
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [{offset: 0, color: "rgba(255,0,221,1)"}, {offset: 1, color: "rgba(255,0,221,1)"}]
          }],
          grid: {top: 60, left: 10, right: 10, bottom: 20, containLabel: !0},
          legend: {
            textStyle: {color: "rgba(255,255,255,1)", fontSize: 14},
            x: "center",
            itemWidth: 11,
            itemHeight: 2,
            data: [{name: "单位GDP能耗", icon: "rect"}, {name: "下降率", icon: "rect"}]
          },
          xAxis: [{
            type: "category",
            data: t,
            axisPointer: {type: "shadow"},
            axisLabel: {color: "#ffffff", fontSize: 14},
            axisTick: {show: !1}
          }],
          yAxis: [{
            type: "value",
            name: "单位：吨标准煤",
            nameTextStyle: {color: "rgba(167,167,167,1)", fontSize: 12, padding: [0, 0, 0, 20]},
            axisLine: {show: !1},
            axisLabel: {color: "rgba(255,255,255,1)", fontSize: 14},
            axisTick: {show: !1},
            splitLine: {show: !0, lineStyle: {color: "#ffffff3a"}}
          }, {
            type: "value",
            name: "单位：%",
            nameTextStyle: {color: "rgba(167,167,167,1)", fontSize: 12},
            axisLine: {show: !1},
            axisLabel: {color: "rgba(255,255,255,1)", fontSize: 14, formatter: "{value} "},
            axisTick: {show: !1},
            splitLine: {show: !1}
          }],
          series: [{name: "单位GDP能耗", type: "bar", barWidth: 20, data: e, z: 10}, {
            name: "下降率",
            type: "line",
            smooth: .6,
            yAxisIndex: 1,
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [{offset: 0, color: "rgba(255,0,221,0)"}, {
                  offset: 1,
                  color: "rgba(255,0,221,1)"
                }],
                global: !1
              }
            },
            label: {show: !0, position: "top", textStyle: {color: "#fff", fontSize: 16}},
            z: 13,
            data: o
          }]
        }

      },
    },
  }
</script>

<style scoped>

</style>
