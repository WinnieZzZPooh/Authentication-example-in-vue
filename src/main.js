import Vue from 'vue'
import App from './App'
import axios from 'axios'

import router from './router'
import store from './store'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://auth-vue-de92c.firebaseio.com/'
axios.defaults.headers.common['Authorization'] = 'lol'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
    console.log('Request Interceptor', config)
    return config
})
const resInterceptor = axios.interceptors.response.use(res => {
    console.log('Response Interceptor', res)
    return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
