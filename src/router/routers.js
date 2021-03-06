import Main from '@/components/main'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */
export const constantRouterMap = [
  {
    path: '/redirect',
    name: 'redirect',
    component: Main,
    meta: {
      hideInMenu: true
    },
    children: [{
      path: '/redirect/:path*',
      component: () => import('@/view/redirect/index.vue')
    }]
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [{
      path: '/home',
      name: 'home',
      meta: {
        hideInMenu: true,
        title: '首页',
        notCache: true
      },
      component: () => import('@/view/single-page/home')
    }]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/404',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '/excel',
    name: 'excel',
    meta: {
      icon: 'ios-stats',
      title: 'EXCEL导入导出'
    },
    component: Main,
    children: [
      {
        path: 'upload-excel',
        name: 'upload-excel',
        meta: {
          icon: 'md-add',
          title: '导入EXCEL'
        },
        component: () => import('@/view/excel/upload-excel.vue')
      },
      {
        path: 'export-excel',
        name: 'export-excel',
        meta: {
          icon: 'md-download',
          title: '导出EXCEL'
        },
        component: () => import('@/view/excel/export-excel.vue')
      }
    ]
  },
  {
    path: '/fruit-master-goods-manager-goods-standard',
    name: 'fruit-master-goods-manager-goods-standard',
    meta: {
      icon: 'md-menu',
      title: '商品规格管理'
    },
    component: Main,
    children: [
      {
        path: 'goods-standard',
        name: 'goods-standard',
        meta: {
          icon: 'md-menu',
          title: '商品规格管理'
        },
        component: () => import('@/view/fruit-master-manager/goods/goods-standard.vue')
      }
    ]
  },
  {
    path: '/fruit-master-goods-manager-goods-detail',
    name: 'fruit-master-goods-manager-goods-detail',
    meta: {
      icon: 'md-menu',
      title: '商品规格管理'
    },
    component: Main,
    children: [
      {
        path: 'goods-detail',
        name: 'goods-detail',
        meta: {
          icon: 'md-menu',
          title: '详情组合图片'
        },
        component: () => import('@/view/fruit-master-manager/goods/goods-detail.vue')
      }
    ]
  },
  {
    path: '/fruit-master-content-article-edit',
    name: 'fruit-master-content-article-edit',
    meta: {
      icon: 'md-menu',
      title: '文章新增/编辑'
    },
    component: Main,
    children: [      
      {
        path: 'article-edit',
        name: 'article-edit',
        meta: {
          icon: 'ios-list-box',
          title: '文章新增/编辑'
        },
        component: () => import('@/view/fruit-master-manager/content/edit-article.vue')
      }
    ]
  },
];

export const asyncRouterMap = [
  {
    path: '/components',
    name: 'components',
    meta: {
      icon: 'logo-buffer',
      title: '组件'
    },
    component: Main,
    children: [{
      path: 'count_to_page',
      name: 'count_to_page',
      meta: {
        icon: 'md-trending-up',
        title: '数字渐变'
      },
      component: () => import('@/view/components/count-to/count-to.vue')
    },
      {
        path: 'drag_list_page',
        name: 'drag_list_page',
        meta: {
          icon: 'ios-infinite',
          title: '拖拽列表'
        },
        component: () => import('@/view/components/drag-list/drag-list.vue')
      },
      {
        path: 'tables_page',
        name: 'tables_page',
        meta: {
          icon: 'md-grid',
          title: '多功能表格'
        },
        component: () => import('@/view/components/tables/tables.vue')
      },
      {
        path: 'split_pane_page',
        name: 'split_pane_page',
        meta: {
          icon: 'md-pause',
          title: '分割窗口'
        },
        component: () => import('@/view/components/split-pane/split-pane.vue')
      },
      {
        path: 'markdown_page',
        name: 'markdown_page',
        meta: {
          icon: 'logo-markdown',
          title: 'Markdown编辑器'
        },
        component: () => import('@/view/components/markdown/markdown.vue')
      },
      {
        path: 'editor_page',
        name: 'editor_page',
        meta: {
          icon: 'ios-create',
          title: '富文本编辑器'
        },
        component: () => import('@/view/components/editor/editor.vue')
      },
      {
        path: 'tinymce_editor_page',
        name: 'tinymce_editor_page',
        meta: {
          icon: 'ios-create',
          title: 'Tinymce编辑器'
        },
        component: () => import('@/view/components/tinymce-editor/tinymce-editor.vue')
      },
      {
        path: 'icons_page',
        name: 'icons_page',
        meta: {
          icon: '_bear',
          title: '自定义图标'
        },
        component: () =>
          import('@/view/components/icons/icons.vue')
      }
    ]
  },
  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [{
      path: 'params/:id',
      name: 'params',
      meta: {
        icon: 'md-flower',
        title: route => `动态路由-${route.params.id}`,
        notCache: true,
        beforeCloseName: 'before_close_normal'
      },
      component: () =>
        import('@/view/argu-page/params.vue')
    },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: route => `带参路由-${route.query.id}`,
          notCache: true
        },
        component: () =>
          import('@/view/argu-page/query.vue')
      }
    ]
  },
  {
    path: '',
    name: 'doc',
    meta: {
      title: '文档',
      href: 'https://lison16.github.io/iview-admin-doc/#/',
      icon: 'ios-book'
    }
  },
  {
    path: '/excel',
    name: 'excel',
    meta: {
      icon: 'ios-stats',
      title: 'EXCEL导入导出'
    },
    component: Main,
    children: [
      {
        path: 'upload-excel',
        name: 'upload-excel',
        meta: {
          icon: 'md-add',
          title: '导入EXCEL'
        },
        component: () => import('@/view/excel/upload-excel.vue')
      },
      {
        path: 'export-excel',
        name: 'export-excel',
        meta: {
          icon: 'md-download',
          title: '导出EXCEL'
        },
        component: () => import('@/view/excel/export-excel.vue')
      }
    ]
  },
  {
    path: '/system',
    name: 'system',
    meta: {
      icon: 'ios-settings',
      title: '系统管理'
    },
    component: Main,
    children: [
      {
        path: 'menu',
        name: 'menu',
        meta: {
          icon: 'md-menu',
          title: '菜单管理'
        },
        component: () => import('@/view/system/menu/menu.vue')
      },
      // {
      //   path: 'config',
      //   name: 'config',
      //   meta: {
      //     icon: 'md-barcode',
      //     title: '参数管理'
      //   },
      //   component: () => import('@/view/system/config/config.vue')
      // },
      // {
      //   path: 'permission',
      //   name: 'permission',
      //   meta: {
      //     icon: 'md-build',
      //     title: '权限管理'
      //   },
      //   component: () => import('@/view/system/permission/permission.vue')
      // },
      {
        path: 'role',
        name: 'role',
        meta: {
          icon: 'md-people',
          title: '角色管理'
        },
        component: () => import('@/view/system/role/role.vue')
      },
      {
        path: 'user',
        name: 'user',
        meta: {
          icon: 'md-person',
          title: '用户管理'
        },
        component: () => import('@/view/system/user/user.vue')
      },
    ]
  },
  {
    path: '/fruit-master-manager-user',
    name: 'fruit-master-manager-user',
    meta: {
      icon: 'md-contacts',
      title: '用户管理'
    },
    component: Main,
    children: [
      {
        path: 'fruit-master-user',
        name: 'fruit-master-user',
        meta: {
          icon: 'md-person',
          title: '用户管理'
        },
        component: () => import('@/view/fruit-master-manager/user/user.vue')
      },
    ]
  },
  {
    path: '/fruit-master-manager',
    name: 'fruit-master-manager',
    meta: {
      icon: 'ios-contacts', 
      title: '鲜果师管理'
    },
    component: Main,
    children: [
      {
        path: 'application',
        name: 'application',
        meta: {
          icon: 'md-clipboard',
          title: '鲜果师申请'
        },
        component: () => import('@/view/fruit-master-manager/master/application.vue')
      },
      {
        path: 'salary',
        name: 'salary',
        meta: {
          icon: 'logo-yen',
          title: '薪资管理'
        },
        component: () => import('@/view/fruit-master-manager/master/salary.vue')
      },
      {
        path: 'fruit-manager',
        name: 'fruit-manager',
        meta: {
          icon: 'ios-contacts',
          title: '鲜果师管理'
        },
        component: () => import('@/view/fruit-master-manager/master/manager.vue')
      }
    ]
  },
  {
    path: '/fruit-master-manager-goods',
    name: 'fruit-master-manager-goods',
    meta: {
      icon: 'md-nutrition',
      title: '商品管理'
    },
    component: Main,
    children: [
      {
        path: '/fruit-master-goods-category',
        name: 'fruit-master-goods-category',
        meta: {
          icon: 'md-pricetag',
          title: '商品分类管理'
        },
        component: () => import('@/view/fruit-master-manager/goods/goods-category.vue')
      },
      {
        path: '/fruit-master-goods-message',
        name: 'fruit-master-goods-message',
        meta: {
          icon: 'md-menu',
          title: '商品信息管理'
        },
        component: () => import('@/view/fruit-master-manager/goods/goods-message.vue')
      },
      {
        path: '/fruit-master-goods-on-sale',
        name: 'fruit-master-goods-on-sale',
        meta: {
          icon: 'ios-share',
          title: '商品上架管理'
        },
        component: () => import('@/view/fruit-master-manager/goods/goods-on-sale.vue')
      }
    ]
  },
  {
    path: '/fruit-master-manager-content',
    name: 'fruit-master-manager-content',
    meta: {
      icon: 'ios-create',
      title: '内容管理'
    },
    component: Main,
    children: [
      {
        path: '/fruit-master-content-article',
        name: 'fruit-master-content-article',
        meta: {
          icon: 'ios-list-box',
          title: '文章管理'
        },
        component: () => import('@/view/fruit-master-manager/content/article.vue')
      },
      {
        path: '/fruit-master-content-feedback',
        name: 'fruit-master-content-feedback',
        meta: {
          icon: 'md-paper',
          title: '用户反馈'
        },
        component: () => import('@/view/fruit-master-manager/content/feedback.vue')
      }
    ]
  },
  {
    path: '/fruit-master-manager-page',
    name: 'fruit-master-manager-page',
    meta: {
      icon: 'md-grid',
      title: '页面板块管理' 
    },
    component: Main,
    children: [
      {
        path: '/fruit-master-page-module-position',
        name: 'fruit-master-page-module-position',
        meta: {
          icon: 'md-flag',
          title: '板块位置管理'
        },
        component: () => import('@/view/fruit-master-manager/page/module-position.vue')
      },
      {
        path: '/fruit-master-page-advertisement',
        name: 'fruit-master-page-advertisement',
        meta: {
          icon: 'ios-megaphone',
          title: '广告管理'
        },
        component: () => import('@/view/fruit-master-manager/page/advertisement.vue')
      },
      {
        path: '/fruit-master-page-goods-module',
        name: 'fruit-master-page-goods-module',
        meta: {
          icon: 'ios-basket',
          title: '商品板块管理'
        },
        component: () => import('@/view/fruit-master-manager/page/goods-module.vue')
      },
      {
        path: '/fruit-master-page-articles-module',
        name: 'fruit-master-page-articles-module',
        meta: {
          icon: 'md-bookmarks',
          title: '文章板块管理'
        },
        component: () => import('@/view/fruit-master-manager/page/articles-module.vue')
      },
      {
        path: '/fruit-master-page-custom-module',
        name: 'fruit-master-page-custom-module',
        meta: {
          icon: 'md-basket',
          title: '定制板块管理'
        },
        component: () => import('@/view/fruit-master-manager/page/custom-module.vue')
      }
    ]
  },
  {
    path: '/fruit-master-manager-custom',
    name: 'fruit-master-manager-custom',
    meta: {
      icon: 'md-basket',
      title: '定制管理'
    },
    component: Main,
    children: [
      {
        path: '/fruit-master-custom-plan',
        name: 'fruit-master-custom-plan',
        meta: {
          icon: 'md-albums',
          title: '定制计划管理'
        },
        component: () => import('@/view/fruit-master-manager/custom/custom-plan.vue')
      },
      {
        path: '/custom_plan_specification_standard',
        name: 'custom_plan_specification_standard',
        meta: {
          icon: 'md-albums',
          title: '定制套餐配图管理'
        },
        component: () => import('@/view/fruit-master-manager/custom/specification-standard.vue')
      }
    ]
  },
  {
    path: '/fruit-master-manager-order',
    name: 'fruit-master-manager-order',
    meta: {
      icon: 'md-cart',
      title: '订单管理'
    },
    component: Main,
    children: [
      {
        path: 'fruit-master-normal-order',
        name: 'fruit-master-normal-order',
        meta: {
          icon: 'ios-cart',
          title: '普通订单管理'
        },
        component: () => import('@/view/fruit-master-manager/order/normal-order.vue')
      },
      {
        path: 'fruit-master-custom-order',
        name: 'fruit-master-custom-order',
        meta: {
          icon: 'ios-cart-outline',
          title: '定制订单管理'
        },
        component: () => import('@/view/fruit-master-manager/order/custom-order.vue')
      },
      {
        path: 'fruit-master-return-order',
        name: 'fruit-master-return-order',
        meta: {
          icon: 'ios-cart-outline',
          title: '退货订单管理'
        },
        component: () => import('@/view/fruit-master-manager/order/return-order.vue')
      }
    ]
  },
  {
    path: '/fruit-master-manager-rule-parameters',
    name: 'fruit-master-manager-rule-parameters',
    meta: {
      icon: 'md-nuclear',
      title: '规则参数管理'
    },
    component: Main,
    children: [
      {
        path: '/fruit-master-postage-rule-settings',
        name: 'fruit-master-postage-rule-settings',
        meta: {
          icon: 'md-bicycle',
          title: '邮费规则配置'
        },
        component: () => import('@/view/fruit-master-manager/rule-parameters/postage-rule-settings.vue')
      }
    ]
  },
  {
    path: '/fruit-master-manager-activity',
    name: 'fruit-master-manager-activity',
    meta: {
      icon: 'ios-analytics',
      title: '活动管理'
    },
    component: Main,
    children: [
      {
        path: '/fruit-master-new-try-activity',
        name: 'fruit-master-new-try-activity',
        meta: {
          icon: 'md-beer',
          title: '新品尝鲜活动'
        },
        component: () => import('@/view/fruit-master-manager/activity/new-try-activity.vue')
      }
    ]
  },
  {
    path: '/fruit-master-manager-store',
    name: 'fruit-master-manager-store',
    meta: {
      icon: 'ios-analytics',
      title: '门店管理'
    },
    component: Main,
    children: [
      {
        path: '/fruit-master-store-message',
        name: 'fruit-master-store-message',
        meta: {
          icon: 'md-beer',
          title: '门店信息管理'
        },
        component: () => import('@/view/fruit-master-manager/store/store-message.vue')
      }
    ]
  },
  {
    path: '/dictionary-manager',
    name: 'dictionary-manager',
    meta: {
      icon: 'md-bookmarks',
      title: '数据字典管理'
    },
    component: Main,
    children: [
      {
        path: '/dictionary',
        name: 'dictionary',
        meta: {
          icon: 'ios-book',
          title: '数据字典'
        },
        component: () => import('@/view/basic-manager/dictionary/dictionary.vue')
      }
    ]
  },
  {
    path: '/'
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
];

export default [
  ...constantRouterMap,
  ...asyncRouterMap
]
