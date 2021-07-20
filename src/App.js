// import logo from './logo.svg';
import './App.css';
import {Navbar} from "./Components/Navbar"
import { Login } from './Components/Login';
import { Form } from './Components/Form';
// import Loader from "react-loader-spinner";
import {Home} from './Components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './Components/Signup';
import Pagenotfound from './Components/Pagenotfound';

function App() {
  return (
        <div>
          <BrowserRouter>
           {/* <Loader
            type="ThreeDots"
            color="#000"
            height={50}
            width={50}
            timeout={5000} //5 secs
          /> */}
         <Navbar/>
         <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="**" component={Pagenotfound} />
         </Switch>
         </BrowserRouter>
        </div>
  );
}

export default App;
