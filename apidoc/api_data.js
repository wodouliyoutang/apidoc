define({ "api": [
  {
    "type": "get",
    "url": "/token/auth_build",
    "title": "账户/代理商/管家授权",
    "version": "1.0.0",
    "name": "PostUser",
    "group": "授权",
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
    "description": "<p>各项目授权，需要先注册项目/公司，第三方授权成功后回跳转传入的 url 地址</p>",
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
    "filename": "src/file1.js",
    "groupTitle": "授权",
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"UserNameTooShort\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
