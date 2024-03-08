import Api from './Api'
const CATEGORY_ALL_END_POINT = 'category/all';
const CATEGORY_CREATE_END_POINT = 'category/create';
export default {
    all(params){
        return Api.get(CATEGORY_ALL_END_POINT, params,{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json', // adjust content type if needed
                'Accept': 'application/json' // adjust content type if needed
            }
        })
    },
    create(params){
        return Api.post(CATEGORY_CREATE_END_POINT, params,{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json', // adjust content type if needed
                'Accept': 'application/json' // adjust content type if needed
            }
        })
    },
}