import Api from './Api'
const PRODUCTS_ALL_END_POINT = 'product/all';
const PRODUCT_CREATE_END_POINT = 'product/create';
export default {
    all(params){
        return Api.get(PRODUCTS_ALL_END_POINT, params)
    },
    create(params){
        return Api.post(PRODUCT_CREATE_END_POINT, params,{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json', // adjust content type if needed
                'Accept': 'application/json' // adjust content type if needed
            }
        })
    },
}