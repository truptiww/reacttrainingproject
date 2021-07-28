import React from "react"
import CakeList from "./CakeList";
import Carousel from "./Carousel";
export const MyContext = React.createContext({id:10})


function Home(props) {
    console.log("........", props)
    return (
        <div>
            <Carousel />
            <h1 className="mb-4 text-center">Home Page</h1>
            <MyContext.Provider>
            <CakeList history={props.history}/>
            </MyContext.Provider>
        </div>
    )
}

export default Home