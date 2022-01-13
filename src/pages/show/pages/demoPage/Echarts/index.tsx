import { useEffect, useState } from 'react';
import * as echarts from 'echarts';

import { View } from '@tarojs/components';

const TARO_ENV = process.env.TARO_ENV;

function Page() {
  useEffect(() => {
    if (TARO_ENV === 'weapp') return;

    var chartDom = document.getElementById('main1');
    var myChart = echarts.init(chartDom);

    var option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
        },
      ],
    };

    option && myChart.setOption(option);
  }, []);

  return (
    <>
      {TARO_ENV === 'weapp' ? (
        <echarts-demo1 />
      ) : (
        <View id='main1' style={{ width: '100vw', height: '266px' }}></View>
      )}
    </>
  );
}

export default Page;
