import Vue from 'vue';

/**
 * 根据父级菜单Id获取对应的子菜单列表
 * @param {*} pid
 */
export const getRouterById = (pid) => {
  return Vue.prototype.$http.request({
    url: '/ims-menu/list/pid', // get_route_list /ims-menu/list/pid
    params: {
      pid: pid
    },
    method: 'get'
  });
};

export const getSystemList = () => {
  return Vue.prototype.$http.request({
    url: '/ims-menu/list/systems', // get_system_list /ims-menu/list/systems
    method: 'get'
  });
};

export const getMenuList = () => {
  return Vue.prototype.$http.request({
    url: '/ims-menu/list/all', // get_menu_list /ims-menu/list/all
    method: 'get'
  });
};

export const getRelationMenu = (id) => {
  return Vue.prototype.$http.request({
    url: '/ims-role/relation/menus/' + id,
    method: 'post'
  });
};

export const getRoleData = ({ page, rows }) => {
  const data = {
    page,
    rows
  };

  // return Vue.prototype.$http.request({
  //   url: 'get_role_data',
  //   params: data,
  //   method: 'get'
  // });
  return Vue.prototype.$http.request({
    url: '/ims-role/pages',
    data: data,
    method: 'post'
  });
};

export const getRoleList = () => {
  return Vue.prototype.$http.request({
    url: '/ims-role/list/all',
    method: 'get'
  });
};

export const getRelationRoles = (id) => {
  return Vue.prototype.$http.request({
    url: '/admin/relation/roles/' + id,
    method: 'post'
  });
};

export const getUserData = ({ page, rows }) => {
  const data = {
    page,
    rows
  };

  // return Vue.prototype.$http.request({
  //   url: 'get_user_data',
  //   params: data,
  //   method: 'get'
  // });
  return Vue.prototype.$http.request({
    url: '/admin/pages',
    data: data,
    method: 'post'
  });
};

// 用户管理上传头像
export const uploadFile = (data) => {
  return Vue.prototype.$http.request({
    url: 'https://resource.food-see.com/v1/upload/product_image',
    data: data,
    method: 'post'
  });
};
