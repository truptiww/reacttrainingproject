import React from "react"
import CakeList from "./CakeList";
import Carousel from "./Carousel";
export const MyContext = React.createContext({id:10})


function Home(props) {
    console.log("........", props)
    return (
        <div>
            <Carousel />
            <h2 className="mt-4 text-center">Cakes</h2>
            <MyContext.Provider>
            <CakeList history={props.history}/>
            </MyContext.Provider>
        </div>
    )
}

export default Home