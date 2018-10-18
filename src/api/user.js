import Vue from 'vue';
import { enums } from 'util/';

export const login = ({ account, password }) => {
  const data = {
    account,
    password
  };
  return Vue.prototype.$http.request({
    url: 'login',
    data,
    method: 'post'
  });
  // return Vue.prototype.$imsService.request({
  //   url: '/admin/sessions',
  //   data,
  //   method: 'post'
  // });
};

export const getUserInfo = (token) => {
  return Vue.prototype.$http.request({
    url: 'get_info',
    params: {
      token
    },
    method: 'get'
  });
  // return Vue.prototype.$imsService.request({
  //     url: '/admin/sessions',
  //     method: 'get'
  // });
};

export const logout = (token) => {
  return Vue.prototype.$http.request({
    url: 'logout',
    method: 'post'
  });
  // return Vue.prototype.$imsService.request({
  //   url: '/admin/sessions',
  //   method: 'delete'
  // });
};
