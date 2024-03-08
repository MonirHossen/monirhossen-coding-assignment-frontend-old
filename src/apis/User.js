import Api from './Api'
const END_POINT = '?results=5000';
const LOGIN_END_POINT = 'login';
export default {
    all(){
        return Api.get(END_POINT)
    },
    login(params){
        return Api.post(LOGIN_END_POINT, params)
    },
}