define({ "api": [
  {
    "type": "post",
    "url": "/open_api/sync/data",
    "title": "头条 快手 脚本执行",
    "version": "1.0.0",
    "name": "datas",
    "group": "脚本",
    "sampleRequest": [
      {
        "url": "http://www.server1.com/open_api/sync/data"
      }
    ],
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mode",
            "description": "<p>类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "advertiser_id",
            "description": "<p>账户id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "data_date",
            "description": "<p>同步日期.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>扩展1.</p>"
          }
        ]
      }
    },
    "filename": "src/sync.js",
    "groupTitle": "脚本"
  },
  {
    "type": "post",
    "url": "/open_api/sync/import_excel",
    "title": "导入外部数据",
    "version": "1.0.0",
    "name": "import_excel",
    "group": "脚本",
    "sampleRequest": [
      {
        "url": "http://api.data.test.netjoy.com/open_api/sync/import_excel"
      }
    ],
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_owner",
            "description": "<p>操作人</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>表格文件.</p>"
          }
        ]
      }
    },
    "filename": "src/sync.js",
    "groupTitle": "脚本"
  },
  {
    "type": "get",
    "url": "/open_api/sync/import_excel_list",
    "title": "外部导入记录",
    "version": "1.0.0",
    "name": "import_excel_list",
    "group": "脚本",
    "sampleRequest": [
      {
        "url": "http://api.data.test.netjoy.com/open_api/sync/import_excel_list"
      }
    ],
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>记录id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_owner",
            "description": "<p>操作人</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>日期.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_size",
            "description": "<p>每页条数</p>"
          }
        ]
      }
    },
    "filename": "src/sync.js",
    "groupTitle": "脚本"
  },
  {
    "type": "post",
    "url": "/open_api/sync/tencent_data",
    "title": "广点通 微信 脚本执行",
    "version": "1.0.0",
    "name": "tencent_datas",
    "group": "脚本",
    "sampleRequest": [
      {
        "url": "http://www.server1.com/open_api/sync/tencent_data"
      }
    ],
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mode",
            "description": "<p>类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "advertiser_id",
            "description": "<p>账户id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "enum",
            "description": "<p>流水类型.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "data_date",
            "description": "<p>同步日期.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>扩展1.</p>"
          }
        ]
      }
    },
    "filename": "src/sync.js",
    "groupTitle": "脚本"
  },
  {
    "type": "get",
    "url": "/token/auth_build",
    "title": "账户/代理商/管家 授权",
    "version": "1.0.0",
    "name": "auth_builds",
    "group": "账户",
    "sampleRequest": [
      {
        "url": "http://www.server1.com/token/auth_build"
      }
    ],
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>项目授权，需要先注册项目/公司，第三方授权成功后回跳转传入的 url 地址</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>等级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signal",
            "description": "<p>授权标识.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company_id",
            "description": "<p>公司id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idPlatform",
            "defaultValue": "100",
            "description": "<p>平台id 100 200 400 401.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>授权回调.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "child_agent",
            "description": "<p>深度同步</p>"
          }
        ],
        "Session": [
          {
            "group": "Session",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>调用凭证.</p>"
          }
        ]
      }
    },
    "filename": "src/advertiser.js",
    "groupTitle": "账户"
  },
  {
    "type": "get",
    "url": "/open_api/advertiser/fund_daily",
    "title": "获取账户流水",
    "version": "1.0.0",
    "name": "fund_dailys",
    "group": "账户",
    "sampleRequest": [
      {
        "url": "http://www.server1.com/open_api/advertiser/fund_daily"
      }
    ],
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>项目授权，需要先注册项目/公司，第三方授权成功后回跳转传入的 url 地址</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>等级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signal",
            "description": "<p>授权标识.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company_id",
            "description": "<p>公司id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idPlatform",
            "defaultValue": "100",
            "description": "<p>平台id 100 200 400 401.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>授权回调.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "child_agent",
            "description": "<p>深度同步</p>"
          }
        ],
        "Session": [
          {
            "group": "Session",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>调用凭证.</p>"
          }
        ]
      }
    },
    "filename": "src/advertiser.js",
    "groupTitle": "账户"
  }
] });
