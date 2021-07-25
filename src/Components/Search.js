import axios from "axios"
import queryString from "query-string"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Search(props) {
    console.log(">>>>>>>>>>>>>>>>>props", props)
    var [searchresult, setSearchresults] = useState([])
    var query = queryString.parse(props.location.search).q
    console.log("query object", query)

    useEffect(() => {
        let apiurl = process.env.REACT_APP_BASE_API + "/searchcakes?q=" + query
        axios(
            {
                method: 'get',
                url: apiurl
            }
        ).then((response) => {
            console.log("response from search results api", response.data)
            setSearchresults(response.data.data)
        }, (error) => {
            console.log("error from search results api", error)
        })
    }, [query])
    return (
        <div className="container mt-4">
            <h1>Search Cakes for  {query} </h1>

            <div className="row mt-4">
                {searchresult.map((each, index) => {
                    return (
                        <div className="col-md-4 mb-3">
                            <Link to={"/cake/" + each.cakeid}>
                                <div className="card">
                                    <img className="card-img-top" src={each.image} />
                                    <div className="card-body">
                                        <h5 className="card-title">{each.name}</h5>
                                        <p className="card-text">{'\u20B9'} {each.price}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Search