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
 * 
 * @apiParam {Number} level  	等级
 * @apiParam {String} signal       授权标识.
 * @apiParam {String} company_id          公司id.
 * @apiParam {String} idPlatform="100"      平台id 100 200 400 401.
 * @apiParam {String} url      			授权回调.
 * @apiParam {Number} child_agent  	深度同步
 * @apiParam (Session) {String} token      调用凭证.
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
 * @apiParam {Number} level  	等级
 * @apiParam {String} signal       授权标识.
 * @apiParam {String} company_id          公司id.
 * @apiParam {String} idPlatform="100"      平台id 100 200 400 401.
 * @apiParam {String} url      			授权回调.
 * @apiParam {Number} child_agent  	深度同步
 * @apiParam (Session) {String} token      调用凭证.
 *
 * @apiUse CreateUserError
 */