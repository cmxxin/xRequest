import XRequest from '../fetch'

const createXRequest = () => {

	// 错误处理，自动提示
	const handleError = (err, reqConfig) => {
		// 如果单次请求时指写autoTips为false则不进行提示，否则默认提示错误
		const autoTips = reqConfig?.autoTips ?? true
		if (err.status === 401) {
      console.log('用户权限已变更或授权码已过期')
		} else if (err.status === 408) {
      console.log('请求超时')
		} else {
			!!autoTips && console.log(err.msg)
		}
	}
	
	// 获取token
	const getToken = () => {
		const token = localStorage.getItem('token')
		return `Bearer ${token}`
	}
	
	// 实例化请求
	try {
		return new XRequest({
			authorization_name: 'Authorization',
			request_timeout: 10, // 超时时间(秒)
			base_url: 'https://www.baidu.com', // 请求公用前缀('http://www.baidu.com/api')
			getToken,
			onError: handleError // 错误处理
		})
	} catch (e) {
		console.log(e, 'new request error')
	}
}

export default createXRequest()
