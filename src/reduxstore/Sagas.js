import { all,takeEvery, put } from "@redux-saga/core/effects"
import axios from "axios"

function *CartGenerator(){

    yield put({
        type: "CART_FETCHING"
    })

    var response = yield axios({
        method: "post",
        url: process.env.REACT_APP_BASE_API + "/cakecart",
        request: {},
        data: {},
        headers: {
            authToken: localStorage.token,
        },
    })

    console.log("data  from cart items " , response)

    if(response.data.data){
        yield put({
            type: "CART_SUCCESS",
            payload:response.data.data
        })
    }else{
        yield put({
            type: "CART_FAILURE"
        })
    }

}

function *Cartsaga(){
     yield takeEvery('Cart_Items' , CartGenerator)
}

export default function *RootSaga(){
  yield all([Cartsaga()])
}