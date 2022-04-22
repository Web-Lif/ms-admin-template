import { notification } from '@weblif/fast-ui'
import axios from 'axios'

const request = axios.create({
    /** 设置超时时间, 单位毫秒 */
    timeout: 5000
})

request.interceptors.response.use(
    (res) => res,
    (error) => {
        if (error.response.status === 401) {
            notification.warning({
                message: '系统消息',
                description: 'Token 已过期, 请重新登入。'
            })
            window.location.href = '/User/Login'
        }
        return Promise.reject(error)
    }
)

export default request