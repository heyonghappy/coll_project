 
import axios from 'axios';
import setting from '../../setting.js'

var axiosInstance = axios.create({
    baseURL: `http://${setting.host}:${setting.server_port}`,
    timeout: 4000
    //    headers: {'X-Custom-Header': 'foobar'}
})

 


export {
    axiosInstance
}