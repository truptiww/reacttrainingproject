import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Cake from "./Cake";

function CakeList(props) {
    var [cakes, setCakes] = useState([])
    useEffect(() => {
        let apiurl = process.env.REACT_APP_BASE_API + "/allcakes"
        axios(
            {
                method: 'get',
                url: apiurl
            }
        ).then((response) => {
            console.log("response from all cakes api", response.data)
            props.dispatch({
                type: "GETCAKES",
                payload: response.data
            })
            setCakes(response.data.data)
        }, (error) => {
            console.log("error from all cakes api", error)
        })

    }, [])
    return (
        <div className="container mt-4">
            <div className="row">
                {cakes.map((each, index) => {
                    // console.log("picking cakes one by one", index, each)
                    return <Cake key={index} data={each} />
                })}
            </div>
        </div>
    )
}

CakeList = withRouter(CakeList)
export default connect(function (state, props) {
    return {
        name: state["CakeList"]["isCakelistLoaded"]
    }

})(CakeList)