/**
 * Created by fp on 2020/11/20.
 * chart的抽象类
 */
class BaseChart {
    constructor(series, options) {
        this.series = series;
        this.options = options ? {...this.getDefaultOption(), ...options} : this.getDefaultOption();
    }

    getUnit(seriesName) {
        let unit = '';
        this.series.some(item => {
            if (item.name === seriesName) {
                if (item.unit) {
                    unit = item.unit;
                }
                return true;
            } else {
                return false;
            }
        });
        if (!unit && this.options.unit) {
            unit = this.options.unit;
        }
        return unit;
    }

    getLegendOption() {
        let legend = {
            show: false,
            data: []
        };
        if (this.series.length > 1 || this.options.showLegend) {
            legend.show = true;
        }
        this.series.forEach(item => {
            legend.data.push(item.name);
        });
        if (this.options.legend) {
            legend = {
                ...legend,
                ...this.options.legend
            }
        }
        return legend;
    }

    getXAxisOption() {
        let xAxis = {
            type: 'category',
            data: [],
        };
        this.series[0].list.forEach(item => {
            xAxis.data.push(item.time);
        });
        if (this.options.xAxis) {
            xAxis = {
                ...xAxis,
                ...this.options.xAxis
            }
        }
        return xAxis;
    }

    getDefaultOption() {
        return {}
    }
}

export default BaseChart;
