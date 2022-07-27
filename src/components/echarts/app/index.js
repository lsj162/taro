import * as echarts from '@/components/ec-canvas/echarts';

let chart = null;

function initChart(canvas, width, height, dpr) {

  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });

  canvas.setChart(chart);

  this.onLoad();

  return chart;
}

Component({
  // onShareAppMessage: function (res) {
  //   return {
  //     title: 'ECharts 可以在微信小程序中使用啦！',
  //     path: '/pages/index/index',
  //     success: function () { },
  //     fail: function () { }
  //   }
  // },

  data: {
    ec: {
      onInit: initChart,
      onLoad() {
        setTimeout(() => {
          const option = {
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
              }
            ]
          };

          setTimeout(() => {
            chart.setOption(option);
          }, 400)

        }, 400)
      }
    }
  },


  onReady() {

  }
});
