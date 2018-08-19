import { axiosInstance } from '../../api'


export default {
    namespaced: true,
    state: {
        project_types: []

    },
    mutations: {
        set_project_types_value(state, payload) {
            state.project_types = payload
        }
    },
    actions: {
        GET_PROJECT_TYPES(context) {
            axiosInstance({
                url: '/project/getprojecttypes',
                method: 'get'
            }).then(result => {
                if (result.status == 200) {
                    console.log(result.data)
                    context.commit('set_project_types_value', result.data.data)
                }

            }).catch(error => {
                console.log(error)
            })
        }
    }
}

 