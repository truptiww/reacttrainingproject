// reducers are nothing but just pure functions who are responsible for updating the store

export var AuthReducer = function (state = {
    isuserloggedin : localStorage.token?true:false}, action) {

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

export var AuthCakelist = function (state = {
    isCakelistLoaded : true }, action) {

    // state means here state of store i.e that object which contains data
    // action means what it has to do 

    switch (action.type) {
        case "CakelistLoaded": {
            state = { ...state }
            state["isCakelistLoaded"] = false
            console.log(".............." , state)
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