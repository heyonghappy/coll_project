import createAPI from '../../api'

export default {
    namespaced: true,
    state: {
        all_person_list:[]
        
    },
    mutations: {
        SET_VALUE(state, payload) {
            state.all_person_list = payload
        }

    },
    actions: {
        GET_ALL_PERSON_LIST(context) {
            console.log(createAPI)
            createAPI('/getAllPerson', 'get',{})
                .then((result) => {
                    if (res.status === 200) {
                        context.commit('SET_VALUE',result.data)
                    }
                  
                }).catch((error) => {
                    console.log('GET_ALL_PERSON_LIST===',error)

                })
        }

    }
}