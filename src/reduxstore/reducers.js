// reducers are nothing but just pure functions who are responsible for updating the store

export var AuthReducer = function (state = {
    isuserloggedin : localStorage.token?true:false,
    isloading : false
    }, action) {

    // state means here state of store i.e that object which contains data
    // action means what it has to do 

    switch (action.type) {
        case "LOGIN": {
            state = { ...state }
            state["isuserloggedin"] = true
            state["user"]= action.payload
            console.log(".............." , state)
            return state
        }
        
        default : return state
    }

}

export var CakeList = function (state = {
    isCakelistLoaded : true
} , action) {

    // state means here state of store i.e that object which contains data
    // action means what it has to do 

    switch (action.type) {
        case "GETCAKES": {
            state = { ...state }
            state["isCakelistLoaded"] = action.payload
            console.log(".............." , state)
            return state
        }
        
        default : return state
    }

}

export var CartReducer = function (state = {dell:10}, action) {

    switch (action.type) {
        case "CART_FETCHING": {
            state = { ...state }
            state["isloading"] = true
            return state
        }

        case "CART_FETCHED": {
            state = { ...state }
            state["isloading"] = false
            state["cartitems"] = action.payload
            return state
        }

        case "CART_FAILURE": {
            state = { ...state }
            state["isloading"] = false
            state["error"] = "Error Occured"
            return state
        }
        
        default : return state
    }

}

export var reducer = function (state = {dell:10}, action) {

    // state means here state of store i.e that object which contains data
    // action means what it has to do 

    switch (action.type) {
        case "SOMEACTION": {
            state = { ...state }
            //    do something to state
            return state
        }

        case "DELL_LAPTOP" :{
            state = {...state}
            state["dell"]-=1
            return state
        }

        default : return state
    }


}

export var reducer1  = function(state =  {
    attendees :0
} , action){
     switch(action.type){
        case "REGISTER" :{
            state= {...state}
            state["attendees"]+=1
            return state
        }
        case "DEREGISTER" :{
            state= {...state}
            state["attendees"]-=1
            return state
        }
        default : return state
     }
}