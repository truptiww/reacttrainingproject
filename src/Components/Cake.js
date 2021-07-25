import {useContext} from "react"
import {MyContext} from "./Home"
import { withRouter } from "react-router"
import { Link } from "react-router-dom"
function Cake(props){
    const context1 = useContext(MyContext)
    console.log("...............", props, context1)
    function showDetails(event){
        props.history.push('/cake/'+ props.data.cakeid)
    }
    return (
        <div className="col-md-4 mb-3">
        <div onClick={showDetails}>
            <div className="card">
            <img className="card-img-top" src={props.data.image} />
            <div className="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">{'\u20B9'} {props.data.price}</p>
            </div>
           </div>
        </div>
        </div>
    )
}

export default withRouter(Cake)