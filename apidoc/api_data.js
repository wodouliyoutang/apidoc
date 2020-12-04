define({ "api": [
  {
    "type": "post",
    "url": "/user/:id",
    "title": "新建一个用户",
    "version": "1.0.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>Optionally you can write here further Informations about the permission.</p> <p>An &quot;apiDefine&quot;-block can have an &quot;apiVersion&quot;, so you can attach the block to a specific version.</p>"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://www.server1.com/open_api/advertiser/fund_daily"
      }
    ],
    "description": "<p>Here you can describe the function. Multilines are possible.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The error description text in version 0.1.0.</p>"
          }
        ]
      }
    },
    "filename": "src/file1.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "读取一个用户",
    "version": "1.0.0",
    "name": "PostUser",
    "group": "User",
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
    "description": "<p>In this case &quot;apiUse&quot; is defined and used. Define blocks with params that will be used in several functions, so you dont have to rewrite them.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page_size",
            "defaultValue": "3",
            "description": "<p>分页数. 12</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "begin_time",
            "defaultValue": "2020-11-30",
            "description": "<p>开始时间.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_time",
            "defaultValue": "2020-10-01",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstname",
            "description": "<p>Optional Firstname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Mandatory Lastname.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "defaultValue": "DE",
            "description": "<p>Mandatory with default value &quot;DE&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "age",
            "defaultValue": "18",
            "description": "<p>Optional Age with default 18.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "address",
            "description": "<p>nestedField nested address object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address[street]",
            "description": "<p>Optional street and number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address[zip]",
            "description": "<p>Optional zip code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address[city]",
            "description": "<p>Optional city.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged in users can post this. In generated documentation a separate &quot;Login&quot; Block will be generated.</p>"
          }
        ]
      }
    },
    "filename": "src/file1.js",
    "groupTitle": "User",
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
