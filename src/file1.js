// ------------------------------------------------------------------------------------------
// General apiDoc documentation blocks and old history blocks.
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Current Success.
// ------------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------------
// Current Errors.
// ------------------------------------------------------------------------------------------
/**
 * @apiDefine CreateUserError
 * @apiVersion 1.0.0
 *
 * @apiErrorExample  Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "UserNameTooShort"
 *     }
 */


// ------------------------------------------------------------------------------------------
// Current Permissions.
// ------------------------------------------------------------------------------------------
/**
 * @apiDefine admin Admin access rights needed.
 * Optionally you can write here further Informations about the permission.
 *
 * An "apiDefine"-block can have an "apiVersion", so you can attach the block to a specific version.
 *
 * @apiVersion 1.0.0
 */


/**
 * @api {post} /user/:id 新建一个用户
 * @apiVersion 1.0.0
 * @apiName GetUser
 * @apiGroup User
 * @apiPermission admin
 * @apiSampleRequest http://www.server1.com/open_api/advertiser/fund_daily
 * @apiDescription Here you can describe the function.
 * Multilines are possible.
 *
 * @apiParam {String} id The Users-ID.
 *
 * @apiSuccess {String} id         The Users-ID.
 * @apiSuccess {Date}   name       Fullname of the User.
 *
 * @apiError UserNotFound   The error description text in version 0.1.0.
 */


 
/**
 * @api {get} /user 读取一个用户
 * @apiVersion 1.0.0
 * @apiName PostUser
 * @apiGroup User
 * @apiSampleRequest http://www.server1.com/open_api/advertiser/fund_daily
 * @apiPermission none
 *
 * @apiDescription In this case "apiUse" is defined and used.
 * Define blocks with params that will be used in several functions, so you dont have to rewrite them.
 * 
 * @apiParam {Number} page_size=3 分页数. 12
 * @apiParam {Date} begin_time=2020-11-30 开始时间.
 * @apiParam {Date} end_time=2020-10-01 Name of the User.
 * @apiParam {String} [firstname]       Optional Firstname of the User.
 * @apiParam {String} lastname          Mandatory Lastname.
 * @apiParam {String} country="DE"      Mandatory with default value "DE".
 * @apiParam {Number} [age=18]          Optional Age with default 18.
 * @apiParam (Login) {String} pass      Only logged in users can post this.
 *                                      In generated documentation a separate
 *                                      "Login" Block will be generated.
 *
 * @apiParam {Object} [address]         nestedField nested address object.
 *
 * @apiUse CreateUserError
 */