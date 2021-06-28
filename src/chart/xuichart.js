/**
 * Created by fp on 2020/11/20.
 */
import chartUtil from './realize/chartUtil'
import LineBarChart from './realize/lineBarChart'
import PieChart from './realize/pieChart'
import ScatterChart from './realize/scatterChart'
import normal from './theme/normal'

export default {
  themes:{
    normal
  },
  /**
   * 通用的调用，默认类型是line
   * @param series
   * @param options
   * @returns {*}
   */
  getCommonChart: function(series, options) {
    const newSeries = chartUtil.turnObjToArray(series)
    chartUtil.addTypeToSeries(newSeries, 'line')
    let commonChart = new LineBarChart(newSeries, options)
    return commonChart.getChartOption()
  },

  getLineChart: function(series, options) {
    const newSeries = chartUtil.turnObjToArray(series)
    chartUtil.addTypeToSeries(newSeries, 'line')
    let commonChart = new LineBarChart(newSeries, options)
    return commonChart.getChartOption()
  },

  getAreaChart: function(series, options) {

  },

  getBarChart: function(series, options) {
    const newSeries = chartUtil.turnObjToArray(series)
    chartUtil.addTypeToSeries(newSeries, 'bar')
    let commonChart = new LineBarChart(newSeries, options)
    return commonChart.getChartOption()
  },

  getStackChart: function(series, options) {

  },

  getPieChart: function(series, options) {
    const newSeries = chartUtil.turnObjToArray(series)
    chartUtil.addTypeToSeries(newSeries, 'pie')
    let hbPieChart = new PieChart(newSeries, options)
    return hbPieChart.getChartOption()
  },

  getScatterChart: function(series, options) {
    const newSeries = chartUtil.turnObjToArray(series)
    chartUtil.addTypeToSeries(newSeries, 'scatter')
    let hbScatterChart = new ScatterChart(newSeries, options)
    return hbScatterChart.getChartOption()
  },
}
