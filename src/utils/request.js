import axios from 'axios'


const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,   //   /dev-api
  // baseURL:'^/dev-api',
  timeout:5000  //请求超时毫秒数
})

//第一个request是上面定义的对象,自定义拦截器
//请求拦截器
request.interceptors.request.use(config=>{
  //请求拦截
  const token = JSON.parse(sessionStorage.getItem("token"));
  console.log(token,"token")
  config.headers['token'] = token;
  return config
},error =>{
  //出现异常
  return Promise.reject(error)
})

//响应拦截器
request.interceptors.response.use(response => {
  //请求拦截
  return response
}, error => {
  //出现异常
  return Promise.reject(error)
})


export default request   //导出自定义的axios对象