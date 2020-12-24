/**
 * @apiDefine CreateUserError
 * @apiVersion 1.0.0
 *
 */

 
/**
 * @api {post} /open_api/sync/data  头条 快手 脚本执行
 * @apiVersion 1.0.0
 * @apiName datas
 * @apiGroup 脚本
 * @apiSampleRequest http://www.server1.com/open_api/sync/data
 * @apiPermission none
 *
 * @apiParam {Number} mode  	类型
 * @apiParam {String[]} advertiser_id          账户id.
 * @apiParam {Date} data_date      同步日期.
 * @apiParam {String} type          扩展1.
 *
 * @apiUse CreateUserError
 */


 /**
 * @api {post} /open_api/sync/tencent_data  广点通 微信 脚本执行
 * @apiVersion 1.0.0
 * @apiName tencent_datas
 * @apiGroup 脚本
 * @apiSampleRequest http://www.server1.com/open_api/sync/tencent_data
 * @apiPermission none
 *
 * 
 * @apiParam {Number} mode  	类型
 * @apiParam {String[]} advertiser_id          账户id.
 * @apiParam {String[]} enum          流水类型.
 * @apiParam {Date} data_date      同步日期.
 * @apiParam {String} type          扩展1.
 *
 * @apiUse CreateUserError
 */

/**
 * @api {post} /open_api/sync/import_excel  导入外部数据
 * @apiVersion 1.0.0
 * @apiName import_excel
 * @apiGroup 脚本
 * @apiSampleRequest http://api.data.test.netjoy.com/open_api/sync/import_excel
 * @apiPermission none
 * 
 * @apiParam {Number} id_owner  	操作人
 * @apiParam {File} file          表格文件.
 *
 * @apiUse CreateUserError
 */

/**
 * @api {get} /open_api/sync/import_excel_list  外部导入记录
 * @apiVersion 1.0.0
 * @apiName import_excel_list
 * @apiGroup 脚本
 * @apiSampleRequest http://api.data.test.netjoy.com/open_api/sync/import_excel_list
 * @apiPermission none
 *
 * @apiParam {Number} id  	记录id
 * @apiParam {Number} id_owner  	操作人
 * @apiParam {Number} status  	状态
 * @apiParam {Date} date          日期.
 * @apiParam {Number} page_size  	每页条数
 *
 * @apiUse CreateUserError
 */