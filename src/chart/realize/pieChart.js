/**
 * Created by fp on 2020/11/20.
 */
import BaseChart from './baseChart'

class PieChart extends BaseChart {
  constructor(series, options) {
    super(series, options)
  }

  getLegendOption() {
    let legend = {
      show: false,
      data: []
    }
    if (this.series.length > 0) {
      this.series[0].list.forEach(item => {
        legend.data.push(item.name)
      })
    }
    if (this.options.legend) {
      legend = {
        ...legend,
        ...this.options.legend
      }
    }
    return legend
  }

  getLabelLine(sery, unit) {
    const self = this
    if (sery.showLabelLine) {
      return {
        avoidLabelOverlap: true,
        label: {
          show: true,
          formatter: function (data) {
            return self.getItemLabel(data) + '\n'
          },
          lineHeight: 22,
          color: '#888',
          fontSize: 12,
          padding: [10, -95],
          align: 'left'
        },
        labelLine: {
          show: true,
          length: 10,
          length2: 90
        },
      }
    } else {
      return {
        label: {
          show: false
        },
        labelLine: {
          show: false,
        }
      }
    }
  }

  getItemLabel(data) {
    let unit = '天'
    if (this.options && this.options.unit) {
      unit = this.options.unit
    }
    if (unit === '%') {
      return data.name + '：' + data.value + unit
    } else {
      return data.name + '：' + data.value + unit + ' (' + this.getFixedData(data.percent) + '%)'
    }
  }

  getFixedData(percent) {
    if (this.options.fixedData === false) {
      return percent
    } else {
      return percent.toFixed(0)
    }
  }

  validTitle(title) {
    if (isNaN(parseFloat(title))) {
      return '-'
    } else {
      return title
    }
  }

  getTitle() {
    if (this.options.title) {
      let params = {
        left: '49%',
        top: '47%',
        textAlign: 'center',
        textVerticalAlign: 'center',
        textStyle: {
          fontSize: 12
        }
      }
      if (typeof this.options.title === 'object') {
        return {
          ...params,
          ...this.options.title,
          text: this.validTitle(this.options.title.text),
        }
      } else {
        return {
          text: this.validTitle(this.options.title),
          ...params,
        }
      }
    } else {
      return {}
    }
  }

  getChartOption() {
    const self = this
    let series = []
    let unit = '天'
    if (this.options && this.options.unit) {
      unit = this.options.unit
    }
    this.series.forEach(item => {
      let {name, list, ...option} = item
      let sery = {
        name: name,
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['35%', '60%'],
        ...option,
        data: [],
      }
      list.forEach(item => {
        sery.data.push(item)
      })
      let labelLineOption = this.getLabelLine(sery, unit)
      sery = {...sery, ...labelLineOption}
      series.push(sery)
    })
    let option = {
      grid: this.options.grid,
      legend: this.getLegendOption(),
      title: this.getTitle(),
      // 图表位置
      tooltip: {
        trigger: 'item',
        formatter: function (data) {
          return '<span style="display:inline-block;' +
            'margin-right:5px;border-radius:10px;width:9px;' +
            'height:9px;background-color:' + data.color + '"></span>'
            + data.seriesName + ' <br/> ' + self.getItemLabel(data)

        }
      },
      series: series
    }
    if (this.options && this.options.color) {
      option.color = this.options.color
    }
    return option
  }

  getDefaultOption() {
    return {
      grid: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
      }
    }
  }
}

export default PieChart
