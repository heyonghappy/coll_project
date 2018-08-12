
import axios from 'axios';
import setting from '../../setting.js'
import Cookies from 'universal-cookie'
import iView from 'iview'
import conf from 'config'

const cookies = new Cookies();
var router;

const initAPI = _router => (router = _router)

var axiosInstance = axios.create({
    baseURL: `http://${setting.host}:${setting.server_port}`,
    timeout: 4000
    //    headers: {'X-Custom-Header': 'foobar'}
})

var loading = {
    count: 0,
    isLoading: false,
    start() {
        this.count += 1;
        if (!this.isLoading) {
            setTimeout(() => {
                if (!this.isLoading && this.count > 0) {
                    this.isLoading = true;
                    this.checkLoading();
                }
            }, 1000)
        }

    },
    cancel() {
        this.count -= 1;
        if (this.count <= 0) {
            this.done()
        }

    },
    done() {
        this.count = 0;
        this.isLoading = false;
        iView.LoadingBar.finish()
    },
    checkLoading() {
        const el = document.querySelector('.ivu-loading-bar')
        if (this.isLoading && !el) {
            iView.LoadingBar.start()
        }

    }
}

axiosInstance.interceptors.request.use(config => {
    let token;
    loading.start()
    token = cookies.get(conf.cookie_namespace)
    config.headers.Authoriation = `Bearer ${token}`;
    return config

}, error => {
    Promise.reject(error)
})

axiosInstance.interceptors.response.use(res => {
    const messageUnless = res.config.messageUnless || []
    const body = res.data;
    if (body.success == false) {
        if (body.code === 10001) {
            // body.data.forEach(data => {
            iView.Notice.error({
                title: 'Error',
                desc: body.data
            })
            // })
        } else if (messageUnless.indexOf(body.message) === -1) {
            iView.Notice.error({
                title: 'Error',
                desc: body.message
            })
        }
        loading.cancel()
        return Promise.reject(res)
    }
    loading.cancel()
    return res
}, error => {
    loading.cancel()
    const res = error.response
    if (res) {
        if (res.status == 401 && /authentication/i.test(res.data.error)) {
            router.push('/logout')
        } else if (res.data && res.data.error) {
            iView.Notice.error({
                title: 'Error',
                desc: res.data.error
            })
        }
    }

    return Promise.reject(error)
})


export {
    axiosInstance,
    initAPI
}