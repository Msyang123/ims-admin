import Mock from 'mockjs';
import { login, logout, getUserInfo } from './login';
import {
  getTableData,
  getDragList,
  getMenuData,
  getRoleData,
  getUserData,
  getOperateData,
  getMasterApplication,
  getMasterManagerData,
  getMasterSalary
} from './data';
import { getRouteListById, getMenuList } from './system';
import { getFruitMastGoodsCategoryData, getOnSaleData } from './fruit_master_data';

// 登录相关和获取用户信息
Mock.mock(/\/login/, login);
Mock.mock(/\/get_info/, getUserInfo);
Mock.mock(/\/logout/, logout);
Mock.mock(/\/get_table_data/, getTableData);
Mock.mock(/\/get_drag_list/, getDragList);
// Mock.mock(/\/get_system_list/, getSystemList);
Mock.mock(/\/get_route_list/, getRouteListById);
Mock.mock(/\/get_menu_list/, getMenuList);
Mock.mock(/\/get_menu_data/, getMenuData);
Mock.mock(/\/get_role_data/, getRoleData);
Mock.mock(/\/get_user_data/, getUserData);
Mock.mock(/\/get_operate_data/, getOperateData);
Mock.mock(/\/admin_fruit_master_application/, getMasterApplication);
Mock.mock(/\/admin_fruit_master_manager/, getMasterManagerData);
Mock.mock(/\/admin_fruit_master_salary/, getMasterSalary);
// Mock.mock(/\/get_fruit_master_user_data/, getFruitMasterUserData);
Mock.mock(/\/get_fruit_master_goods_category_data/, getFruitMastGoodsCategoryData);
Mock.mock(/\/get_on_sale_data/, getOnSaleData);
export default Mock;
