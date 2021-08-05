import  {createStore, combineReducers, applyMiddleware} from "redux"
import { reducer, reducer1, AuthReducer, CakeList, CartReducer } from "./reducers"


import creatSaga from "redux-saga"
import RootSaga from "./Sagas"

var sagaMiddleware = creatSaga()

var reducers = combineReducers({reducer, reducer1, AuthReducer, CakeList, CartReducer})


var store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(RootSaga)

export default store

console.log("store " , store.getState())


// store.subscribe(()=>{
//     console.log("i will be called on any event on store" , store.getState())
// })

// var storedata =  store.getState()

// console.log("state of store is initially " , storedata)

// store.dispatch({
//     type:"DELL_LAPTOP"
// })

// var storedata =  store.getState()

// console.log("state of store is" , storedata)

// store.dispatch({
//     type:"DELL_LAPTOP1"
// })

// store.dispatch({
//     type:"DELL_LAPTOP2"
// })