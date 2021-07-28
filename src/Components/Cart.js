import axios from "axios"
import { useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import Cake from "./Cake"

function Cart(props){ 
    
    useEffect(() => {
    let apiurl = process.env.REACT_APP_BASE_API + "/cakecart"
    axios(
      {
        method: 'post',
        url: apiurl,
        request:{},
        headers:{
            authToken:localStorage.token
        }
      }
    ).then((request) => {
      console.log("response from show cart detail api", request.data)
    }, (error) => {
      console.log("error from show cart detail api", error)
    })

  }, [])


return(
    <div className="container mt-4">
        {/* <Cake/> */}
        test
    </div>
)
}

Cart = withRouter(Cart)
export default connect(function(state, props){
    return{
     name:state["AuthReducer"]["user"] && ["AuthReducer"]["name"]
    }
})(Cart)