// import logo from './logo.svg';
import './App.css';
import {Navbar} from "./Components/Navbar"
import { Carousel } from './Components/Carousel';
import { Form } from './Components/Form';
import Loader from "react-loader-spinner";

function App() {
  return (
        <div className="App">
           <Loader
            type="ThreeDots"
            color="#000"
            height={50}
            width={50}
            timeout={5000} //5 secs
          />
         <Navbar ></Navbar>
         <Carousel></Carousel>
         <Form></Form>
        </div>
  );
}

export default App;
