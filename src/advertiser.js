/**
 * @apiDefine CreateUserError
 * @apiVersion 1.0.0
 *
 */

 
/**
 * @api {get} /token/auth_build  账户/代理商/管家 授权
 * @apiVersion 1.0.0
 * @apiName auth_builds
 * @apiGroup 账户
 * @apiSampleRequest http://www.server1.com/token/auth_build
 * @apiPermission none
 *
 * @apiDescription 项目授权，需要先注册项目/公司，第三方授权成功后回跳转传入的 url 地址
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
 * @api {get} /open_api/advertiser/fund_daily 获取账户流水
 * @apiVersion 1.0.0
 * @apiName fund_dailys
 * @apiGroup 账户
 * @apiSampleRequest http://www.server1.com/open_api/advertiser/fund_daily
 * @apiPermission none
 *
 * @apiDescription 项目授权，需要先注册项目/公司，第三方授权成功后回跳转传入的 url 地址
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