import Taro from '@tarojs/taro';
import Cookies from 'js-cookie';

const { api_host } = UMI_ENV;

export const post = async (url, params, config?) => {
  const data = await Taro.request({
    method: 'POST',
    url: api_host + url,
    header: {
      'content-type': `${
        config?.headers?.['Content-Type'] || 'application/json'
      }`, // 默认值
    },
    data: params,
  }).catch((err) => {
    console.error('->: 🚀 ', err);
  });

  if (data?.data?.code === 401) {
    return data?.data || {};
  } else if (data?.data?.code === 400) {
    return data?.data;
  } else if (data?.data?.code === 200) {
    return data?.data;
  } else {
    return data?.data;
  }
};

export const get = async (url) => {
  const data = await Taro.request({
    method: 'GET',
    mode: 'cors',
    url: api_host + url,
    header: {},
  }).catch((err) => {
    console.error('->: 🚀 ', err);
  });

  if (data?.data?.code === 401) {
    return data?.data || {};
  } else if (data?.data?.code === 400) {
    return data?.data || {};
  } else if (data?.data?.code === 200) {
    return data?.data;
  } else {
    return data?.data;
  }
};
