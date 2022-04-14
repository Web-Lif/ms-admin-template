import axios from 'axios'

const request = axios.create({
    /** 设置超时时间, 单位毫秒 */
    timeout: 5000
})

export default request