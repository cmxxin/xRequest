## 使用方法
request.\[get | post\](url, options, config)   
url: String  
options: Object  
config: Object  

### GET

```javascript
  import request from 'request/index'
  // 1 普通方法
  const res = await request.get('/userInfo')
  // 2 带参数方法
  const res = await request.get('/userInfo?id=1')
  // 等同于上面的方法
  const res = await request.get('/userInfo', { id: 1 })
```

### POST

```javascript
  import request from 'request/index'
  // 1 普通方法
  const res = await request.post('/addUser', { username: 'cmax', password: '*****' })
  // 2 带参数方法
  const res = await request.post('/editUser?id=1', { username: 'cmax', password: '*****' })
  // 等同于上面的方法
  const res = await request.post('/addUser', { body: { username: 'cmax', password: '*****' }, params: { id: 1 } })
```

## 配置（初始化）
```javascript
new XRequest({
  authorization_name: 'Authorization', // 请求头中的名字
  getToken: function () { }, // 获取token的方法（store或者localStorage)
  request_timeout: 10, // 超时时间(秒)
  base_url: baseUrl, // 请求公用前缀('http://www.cmax.com/api')
  onError: function (err, config) {} // 自定义错误处理
})
```

## options
|参数|说明|类型|默认值|
|----|----|----|----|
|{}|get默认为params,post默认为body| object|-|
|body|post提交的内容|object|-|
|params|post或get的参数|object|-|

## config
|参数|说明|类型|默认值|
|----|----|----|----|
|headers|自定义header参数|object|-|
|isFormData|是否表单提交|boolean|false|

## onError
callback(err, config)  
err = { status: number, msg: string }  
config = 用户自定义的配置  
status为后端返回的错误码或自定义的错误码  

自定义status
|状态码|说明|类型|默认值|
|----|----|----|----|
|408|超时|number|-|
|-10086|请求报错|number|-|

