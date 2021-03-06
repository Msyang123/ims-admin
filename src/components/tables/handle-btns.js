const btns = {
  view: (h, params, vm) => {
    return h('Button', {
      props: {
        type: 'info',
        size: 'small'
      },
      style: {
        marginRight: '5px'
      },
      on: {
        click: () => {
          vm.$emit('on-view', params);
        }
      }
    }, [h('Icon', {
      props: {
        type: 'md-eye',
        size: 16,
        color: '#fff'
      }
    })]);
  },
  edit: (h, params, vm) => {
    return h('Button', {
      props: {
        type: 'warning',
        size: 'small'
      },
      style: {
        marginRight: '5px'
      },
      on: {
        click: () => {
          vm.$emit('on-edit', params);
        }
      }
    }, [h('Icon', {
      props: {
        type: 'md-create',
        size: 16,
        color: '#fff'
      }
    })]);
  },
  delete: (h, params, vm) => {
    return h('Poptip', {
      props: {
        confirm: true,
        title: '你确定要删除吗?'
      },
      style: {
        marginRight: '5px'
      },
      on: {
        'on-ok': () => {
          vm.$emit('on-delete', params);
          // 页面验证 删除成功则刷新表格内容
          // vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex));
        }
      }
    }, [
      h('Button', {
        props: {
          type: 'error',
          size: 'small'
        }
      }, [
        h('Icon', {
          props: {
            type: 'md-trash',
            size: 16,
            color: '#fff'
          }
        })
      ])
    ]);
  },
  relation: (h, params, vm) => {
    return h('Button', {
      props: {
        type: 'success',
        size: 'small'
      },
      style: {
        marginRight: '5px'
      },
      on: {
        click: () => {
          vm.$emit('on-relation', params);
        }
      }
    }, [h('Icon', {
      props: {
        type: 'md-unlock',
        size: 16,
        color: '#fff'
      }
    })]);
  },
  permission: (h, params, vm) => {
    const {
      row
    } = params;
    // 父级菜单不显示修改权限按钮
    if (row.type == 'PARENT') {
      return '';
    } else {
      return h('Button', {
        props: {
          type: 'success',
          size: 'small'
        },
        style: {
          marginRight: '5px'
        },
        on: {
          click: () => {
            vm.$emit('on-edit-permission', params);
          }
        }
      }, [h('Icon', {
        props: {
          type: 'md-lock',
          size: 16,
          color: '#fff'
        }
      })]);
    }
  },
  // 商品上下架操作
  onSale: (h, params, vm) => {
    const {
      row
    } = params;
    if (row.shelfStatus === 'ON') {
      return h('Poptip', {
        props: {
          confirm: true,
          title: '确认要下架该商品吗?'
        },
        style: {
          marginRight: '5px'
        },
        on: {
          'on-ok': () => {
            vm.$emit('on-sale', params);
          }
        }
      }, [
        h('Button', {
          props: {
            type: 'error',
            size: 'small'
          }
        }, [
          h('Icon', {
            props: {
              type: 'md-cloud-download',
              size: 16,
              color: '#fff'
            }
          })
        ])
      ]);
    } else {
      return h('Poptip', {
        props: {
          confirm: true,
          title: '确认要上架该商品吗?'
        },
        style: {
          marginRight: '5px'
        },
        on: {
          'on-ok': () => {
            vm.$emit('on-sale', params);
          }
        }
      }, [
        h('Button', {
          props: {
            type: 'success',
            size: 'small'
          }
        }, [
          h('Icon', {
            props: {
              type: 'md-cloud-upload',
              size: 16,
              color: '#green'
            }
          })
        ])
      ]);
    }
  },
  // 定制计划商品上下架操作
  customOnSale: (h, params, vm) => {
    const {
      row
    } = params;
    if (row.status === 'VALID') {
      return h('Poptip', {
        props: {
          confirm: true,
          title: '确认要下架该商品吗?'
        },
        style: {
          marginRight: '5px'
        },
        on: {
          'on-ok': () => {
            vm.$emit('custom-on-sale', params);
          }
        }
      }, [
        h('Button', {
          props: {
            type: 'error',
            size: 'small'
          }
        }, [
          h('Icon', {
            props: {
              type: 'md-cloud-download',
              size: 16,
              color: '#fff'
            }
          })
        ])
      ]);
    } else {
      return h('Poptip', {
        props: {
          confirm: true,
          title: '确认要上架该商品吗?'
        },
        style: {
          marginRight: '5px'
        },
        on: {
          'on-ok': () => {
            vm.$emit('custom-on-sale', params);
          }
        }
      }, [
        h('Button', {
          props: {
            type: 'success',
            size: 'small'
          }
        }, [
          h('Icon', {
            props: {
              type: 'md-cloud-upload',
              size: 16,
              color: '#green'
            }
          })
        ])
      ]);
    }
  },
  push: (h, params, vm) => {
    return h('Button', {
      props: {
        type: 'success',
        size: 'small'
      },
      style: {
        marginRight: '5px'
      },
      on: {
        click: () => {
          vm.$emit('on-push', params);
        }
      }
    }, [h('Icon', {
      props: {
        type: 'ios-fastforward-outline',
        size: 16,
        color: '#fff'
      }
    })]);
  },
  relevance: (h, params, vm) => {
    return h('Button', {
      props: {
        type: 'success',
        size: 'small'
      },
      style: {
        marginRight: '5px'
      },
      on: {
        click: () => {
          vm.$emit('on-relevance', params);
        }
      }
    }, [h('Icon', {
      props: {
        type: 'md-attach',
        size: 16,
        color: '#fff'
      }
    })]);
  },
  settings: (h, params, vm) => {
    return h('Button', {
      props: {
        type: 'success',
        size: 'small'
      },
      style: {
        marginRight: '5px'
      },
      on: {
        click: () => {
          vm.$emit('on-relevance', params);
        }
      }
    }, [h('Icon', {
      props: {
        type: 'md-settings',
        size: 16,
        color: '#fff'
      }
    })]);
  },
  // 邮费复制操作
  copy: (h, params, vm) => {
    return h('Button', {
      props: {
        type: 'success',
        size: 'small'
      },
      style: {
        marginRight: '5px'
      },
      on: {
        click: () => {
          vm.$emit('on-copy', params);
        }
      }
    }, [h('Icon', {
      props: {
        type: 'md-copy',
        size: 16,
        color: '#fff'
      }
    })]);
  },
  // 用户锁定状态按钮
  usable: (h, params, vm) => {
    const {
      row
    } = params;
    if (row.locked === 'LOCK') {
      return h('Poptip', {
        props: {
          confirm: true,
          title: '确认要解除该账号的禁用吗?'
        },
        style: {
          marginRight: '5px'
        },
        on: {
          'on-ok': () => {
            vm.$emit('on-usable', params);
          }
        }
      }, [
        h('Button', {
          props: {
            type: 'success',
            size: 'small'
          }
        }, [
          h('Icon', {
            props: {
              type: 'md-lock',
              size: 16,
              color: '#fff'
            }
          })
        ])
      ]);
    } else {
      return h('Poptip', {
        props: {
          confirm: true,
          title: '确认要禁用该账号吗?'
        },
        style: {
          marginRight: '5px'
        },
        on: {
          'on-ok': () => {
            vm.$emit('on-usable', params);
          }
        }
      }, [
        h('Button', {
          props: {
            type: 'error',
            size: 'small'
          }
        }, [
          h('Icon', {
            props: {
              type: 'md-unlock',
              size: 16,
              color: '#fff'
            }
          })
        ])
      ]);
    }
  },
  // 鲜果师审核<Icon custom="iconfont icon-bumenzhinenggongzuoshenhe"/>
  auditor: (h, params, vm) => {
    const {
      row
    } = params;
    if (row.auditStatus === 'UNAUDITED') {
      return h('Button', {
        props: {
          type: 'success',
          size: 'small'
        },
        style: {
          marginRight: '5px'
        },
        on: {
          click: () => {
            vm.$emit('on-auditor', params);
          }
        }
      }, [h('Icon', {
        props: {
          type: 'md-hammer', // iconfont icon-shenhe
          size: 16,
          color: '#fff'
        }
      })]);
    }
  },
  // articleStatus发布状态（PUBLISH-发布 UN_PUBLISH-未发布）
  onArticleStatus: (h, params, vm) => {
    const {
      row
    } = params;
    if (row.articleStatus === 'UN_PUBLISH') {
      return h('Poptip', {
        props: {
          confirm: true,
          title: '确认要把该文章改成发布吗?'
        },
        style: {
          marginRight: '5px'
        },
        on: {
          'on-ok': () => {
            vm.$emit('on-publish', params);
          }
        }
      }, [
        h('Button', {
          props: {
            type: 'error',
            size: 'small'
          }
        }, [
          h('Icon', {
            props: {
              type: 'md-cloud-download',
              size: 16,
              color: '#fff'
            }
          })
        ])
      ]);
    } else {
      return h('Poptip', {
        props: {
          confirm: true,
          title: '确认要把该文章改未发布吗?'
        },
        style: {
          marginRight: '5px'
        },
        on: {
          'on-ok': () => {
            vm.$emit('on-publish', params);
          }
        }
      }, [
        h('Button', {
          props: {
            type: 'success',
            size: 'small'
          }
        }, [
          h('Icon', {
            props: {
              type: 'md-cloud-upload',
              size: 16,
              color: '#green'
            }
          })
        ])
      ]);
    }
  },
  customPlanProduct: (h, params, vm) => {
    return h('Button', {
      props: {
        type: 'info',
        size: 'small'
      },
      style: {
        marginRight: '5px'
      },
      on: {
        click: () => {
          vm.$emit('on-custom-plan-product', params);
        }
      }
    }, [h('Icon', {
      props: {
        type: 'md-settings',
        size: 16,
        color: '#fff'
      }
    })]);
  },
  inlineEdit: (h, params, vm) => {
    const {
      row
    } = params;
    if (row.isEdit === false) {
      return h('Button', {
        props: {
          type: 'warning',
          size: 'small'
        },
        style: {
          marginRight: '5px'
        },
        on: {
          click: () => {
            vm.$emit('on-inline-edit', params);
          }
        }
      }, [h('Icon', {
        props: {
          type: 'md-create',
          size: 16,
          color: '#fff'
        }
      })]);
    } else {
      return h('Button', {
        props: {
          type: 'success',
          size: 'small'
        },
        style: {
          marginRight: '5px'
        },
        on: {
          click: () => {
            vm.$emit('on-inline-save', params);
          }
        }
      }, [h('Icon', {
        props: {
          type: 'md-checkmark',
          size: 16,
          color: '#green'
        }
      })]);
    }
  },
  settlementRefund: (h, params, vm) => {
    const { row } = params;
    // 薪资已过期显示退款按钮
    if (row.settlementStatus == 'EXPIRED') {
      return h('Poptip', {
        props: {
          confirm: true,
          title: '你确定要退款吗?'
        },
        style: {
          marginRight: '5px'
        },
        on: {
          'on-ok': () => {
            vm.$emit('on-refund', params);
            // 页面验证 删除成功则刷新表格内容
            // vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex));
          }
        }
      }, [
        h('Button', {
          props: {
            type: 'error',
            size: 'small'
          },
          style: {
            marginRight: '5px'
          }
        }, [h('Icon', {
          props: {
            type: 'md-log-out',
            size: 16,
            color: '#fff'
          }
        })
        ])
      ]);
    } else {
      return '';
    }
  },
  settlementEdit: (h, params, vm) => {
    const { row } = params;
    // 除了薪资未审核的其他不显示修改权限按钮
    if (row.settlementStatus == 'UNSETTLED') {
      return h('Button', {
        props: {
          type: 'warning',
          size: 'small'
        },
        style: {
          marginRight: '5px'
        },
        on: {
          click: () => {
            vm.$emit('on-edit', params);
          }
        }
      }, [h('Icon', {
        props: {
          type: 'md-create',
          size: 16,
          color: '#fff'
        }
      })]);
    } else {
      return '';
    }
  },
  feedback: (h, params, vm) => {
    const { row } = params;
    // 除了未回复的其他不显示修改按钮
    if (row.status == 'UNREPLY') {
      return h('Button', {
        props: {
          type: 'warning',
          size: 'small'
        },
        style: {
          marginRight: '5px'
        },
        on: {
          click: () => {
            vm.$emit('on-edit', params);
          }
        }
      }, [h('Icon', {
        props: {
          type: 'md-create',
          size: 16,
          color: '#fff'
        }
      })]);
    } else {
      return '';
    }
  },
  // 门店状态 ENABLED(营业),DISABLED(未营业);
  onStoreStatus: (h, params, vm) => {
    const {
      row
    } = params;
    if (row.status === 'DISABLED') {
      return h('Poptip', {
        props: {
          confirm: true,
          title: '确认要把该门店改为营业吗?'
        },
        style: {
          marginRight: '5px'
        },
        on: {
          'on-ok': () => {
            vm.$emit('on-storeStatus', params);
          }
        }
      }, [
        h('Button', {
          props: {
            type: 'success',
            size: 'small'
          }
        }, [
          h('Icon', {
            props: {
              type: 'md-cloud-upload',
              size: 16,
              color: '#green'
            }
          })
        ])
      ]);
    } else {
      return h('Poptip', {
        props: {
          confirm: true,
          title: '确认要把该门店改为未营业吗?'
        },
        style: {
          marginRight: '5px'
        },
        on: {
          'on-ok': () => {
            vm.$emit('on-storeStatus', params);
          }
        }
      }, [
        h('Button', {
          props: {
            type: 'error',
            size: 'small'
          }
        }, [
          h('Icon', {
            props: {
              type: 'md-cloud-download',
              size: 16,
              color: '#fff'
            }
          })
        ])
      ]);
    }
  }
};
export default btns;
