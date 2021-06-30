import BaseChart from './baseChart'

class ScatterChart extends BaseChart {
  constructor(series, options) {
    super(series, options)
  }

  getXAxisOption() {
    return {
      name: this.options.xAxisName
    }
  }

  getYAxisOption() {
    return {
      name: this.options.yAxisName
    }
  }

  getChartOption() {
    // let tooltip = this.getToolTipOption()
    let legend = this.getLegendOption()
    let xAxis = this.getXAxisOption()
    let series = this.getSeriesOption()
    let yAxis = this.getYAxisOption()
    const options = {
      tooltip: {
        formatter: this.options.formatter
      },
      grid: this.options.grid,
      xAxis,
      legend,
      yAxis,
      series,
    }
    if (this.options.colors) {
      options.color = this.options.colors
    }
    if (this.options.color) {
      options.color = this.options.color
    }
    return options
  }

  getSeriesOption() {
    let series = []
    this.series.forEach(item => {
      let {data, ...otherParams} = item
      let sery = {
        data: [],
        ...otherParams,
      }
      data.forEach(subItem => {
        if (subItem.value instanceof Array) {//如果是数组
          sery.data.push({
            value: subItem.value
          })
        }
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
      series.push(sery)
    })
    return series
  }

  getDefaultOption() {
    return {
      grid: {
        'left': 40,
        'right': 60,
        'top': 40,
        'bottom': 20,
        'containLabel': true
      },
      formatter: '{a}: ({c})'
    }
  }
}

export default ScatterChart
