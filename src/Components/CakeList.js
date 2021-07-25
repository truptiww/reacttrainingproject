import axios from "axios";
import { useEffect, useState } from "react";
import Cake from "./Cake";

function Cakelist(props) {
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
            setCakes(response.data.data)
        }, (error) => {
            console.log("error from all cakes api", error)
        })

    }, [])
    return (
        <div className="container mt-4">
            <div className="row">
                {cakes.map((each, index) => {
                    console.log("picking cakes one by one", index, each)
                    return <Cake key={index} data={each} />
                })}
            </div>
        </div>
    )
}

export default Cakelist