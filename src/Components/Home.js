import CakeList from "./CakeList";
import Carousel from "./Carousel";

export function Home(props) {
    console.log("........", props)
    return (
        <div>
            <Carousel />
            <h1 className="mb-4 text-center">Home Page</h1>
            <CakeList/>
        </div>
    )
}

export default Home