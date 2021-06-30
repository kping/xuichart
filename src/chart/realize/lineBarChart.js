/**
 * Created by fp on 2020/11/20.
 */
import BaseChart from './baseChart'

class LineBarChart extends BaseChart {
  constructor(series, options) {
    super(series, options)
  }

  isNotNumber(value) {
    if (isNaN(value) || value === null
      || value === '' || value === undefined) {
      return true
    } else {
      return false
    }
  }

  getStackToolTipName(name, params) {
    if (this.series.length > 0 && this.series[0].stack) {
      let total = 0
      params.forEach(function (item) {
        total += item.value
      })
      let tName = `${name} : ${total}`
      if (this.options.unit) {
        tName += this.options.unit
      }
      return tName
    } else {
      return name
    }
  }

  getToolTipOption() {
    let self = this
    return {
      trigger: 'axis',
      formatter: function (params) {
        let dataArray = []
        if (params.length === 0) {
          return '<div></div>'
        }
        let tooltipName = self.getStackToolTipName(params[0].name, params)
        dataArray.push('<div>' + tooltipName)
        params.forEach(function (item) {
          let str = '<br><span style="display:inline-block;' +
            'margin-right:5px;border-radius:10px;width:9px;' +
            'height:9px;background-color:' + item.color + '"></span>' + item.seriesName + ' : ' +
            (self.isNotNumber(item.value) ? '-' : item.value)
          if (!self.isNotNumber(item.value)) {
            let unit = self.getUnit(item.seriesName)
            str += unit
          }
          dataArray.push(str)
        })
        return dataArray.join('')
      }
    }
  }

  getSeriesOption() {
    let series = []
    this.series.forEach(item => {
      let {data, ...otherParams} = item
      let sery = {
        data: [],
        symbolSize: 10,
        symbol: 'circle',
        ...otherParams,
      }
      data.forEach(subItem => {
        if (typeof subItem.value === 'object') {//有更多的配置项
          let {value, ...otherParams} = subItem.value
          sery.data.push({
            value,
            itemStyle: otherParams
          })
        } else {
          sery.data.push({
            value: subItem.value
          })
        }
      })
      if (item.markLine) {//如果markline存在，
        sery.markLine = {
          data: this.getMarkLineOption(item.markLine),
          ...item.markLineOption
        }
      }
      series.push(sery)
    })
    return series
  }

  getMarkLineOption(markLine) {
    let markLineStyle = {
      lineStyle: {
        color: '#f56c6c'
      }
    }
    let data = []
    if (typeof markLine === 'object' && !Array.isArray(markLine)) {//有更多的配置项
      data.push({
        yAxis: markLine.value,
        ...markLineStyle,
        ...markLine,
      })
    } else if (Array.isArray(markLine)) {
      markLine.forEach(item => {
        if (typeof item === 'object') {//有更多的配置项
          data.push({
            yAxis: item.value,
            ...markLineStyle,
            ...item
          })
        } else {
          data.push({
            yAxis: item,
            ...markLineStyle,
          })
        }
      })
    } else {
      data.push({
        yAxis: markLine,
        ...markLineStyle,
      })
    }
    return data
  }

  //如果series中有markline,需要动态设置yAxis的值
  setMarkLineYAxis(yAxis) {
    //判断series有没有markLine属性
    let markLineMax = 0, hasMarkLine = false
    this.series.forEach(item => {
      if (item.markLine) {
        hasMarkLine = true
        if (typeof item.markLine === 'object' && !Array.isArray(item.markLine)) {
          if (markLineMax < item.markLine.value) {
            markLineMax = item.markLine.value
          }
        } else if (Array.isArray(item.markLine)) {
          item.markLine.forEach(subItem => {
            if (typeof subItem === 'object') {//有更多的配置项
              if (markLineMax < subItem.value) {
                markLineMax = subItem.value
              }
            } else {
              if (markLineMax < subItem) {
                markLineMax = subItem
              }
            }
          })
        } else {
          if (markLineMax < item.markLine) {
            markLineMax = item.markLine
          }
        }
      }
    })
    if (hasMarkLine) {//说明设置了markLineMax
      //动态设置yAxis的max值
      yAxis.max = function (value) {
        if (value.max > markLineMax) {
          return Math.ceil(value.max)
        } else {
          return Math.ceil(markLineMax * 5 / 4)
        }
      }
    }
  }

  getYAxisOption() {
    let yAxis = {
      type: 'value',
    }
    this.setMarkLineYAxis(yAxis)
    if (this.options.unit === '%') {
      yAxis.axisLabel = {
        formatter: '{value}%'
      }
    } else if (this.options.unit) {
      yAxis.name = this.options.unit
    }
    //如果this.options.yAxis中有name属性，已name属性中优先级中等
    if (this.options.yAxis) {
      yAxis = {
        ...yAxis,
        ...this.options.yAxis
      }
    }
    //以yAxisName优先级最高
    if (this.options.yAxisName) {
      yAxis.name = this.options.yAxisName
    }
    return yAxis
  }

  getGridOption() {
    let grid = this.getDefaultOption().grid
    if (this.options.grid) {
      return {
        ...grid,
        ...this.options.grid
      }
    } else {
      return grid
    }
  }

  getChartOption() {
    let tooltip = this.getToolTipOption()
    let legend = this.getLegendOption()
    let xAxis = this.getXAxisOption()
    let series = this.getSeriesOption()
    let yAxis = this.getYAxisOption()
    let grid = this.getGridOption()
    const options = {
      tooltip,
      xAxis,
      legend,
      yAxis,
      series,
      grid
    }
    if (this.options.colors) {
      options.color = this.options.colors
    }
    if (this.options.color) {
      options.color = this.options.color
    }
    return options
  }

  getDefaultOption() {
    return {
      grid: {
        'left': 30,
        'right': 20,
        'top': 40,
        'bottom': 20,
        'containLabel': true
      }
    }
  }
}

export default LineBarChart
