import Vue from 'vue';
import { enums } from 'util/';

export const login = ({ account, password, ip }) => {
  const data = {
    account,
    password,
    ip
  };

  return Vue.prototype.$http.request({
    url: '/admin/sessions', // login /admin/sessions
    data,
    method: 'post'
  });
};

export const getUserInfo = (token) => {
  // return Vue.prototype.$http.request({
  //   url: 'get_info',
  //   params: {
  //     token
  //   },
  //   method: 'get'
  // });
  return Vue.prototype.$http.request({
      url: '/admin/sessions',
      method: 'get'
  });
};

export const logout = (token) => {
  // return Vue.prototype.$http.request({
  //   url: 'logout',
  //   method: 'post'
  // });
  return Vue.prototype.$http.request({
    url: '/admin/sessions',
    method: 'delete'
  });
};
