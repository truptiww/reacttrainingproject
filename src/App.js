// import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import Login from './Components/Login';
import  Form  from './Components/Form';
// import Loader from "react-loader-spinner";
import Home from './Components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './Components/Signup';
import Pagenotfound from './Components/Pagenotfound';
import CakeDetails from './Components/CakeDetails';
import Search from './Components/Search';
import CakeList from './Components/CakeList';
import { useState } from 'react';
import RecoverPassword from './Components/RecoverPassword';
import PrivateRoute from './PrivateRoute'
import { ToastContainer, toast } from 'react-toastify';



function App() {
  var [isuserloggedin,setUserlogin] = useState(localStorage.token?true:false)
  function loggedin(){
     setUserlogin(true)
  }

  function loggedOut() {
    setUserlogin(false);
  }

  return (
        <div>
          <ToastContainer/>
          <BrowserRouter>
           {/* <Loader
            type="ThreeDots"
            color="#000"
            height={50}
            width={50}
            timeout={5000} //5 secs
          /> */}
         <Navbar isuserloggedin={isuserloggedin} loggedOut={loggedOut} />
         <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/login"><Login loggedin={loggedin}/></Route> 
          <Route exact path="/recoverpassword"><RecoverPassword/></Route>
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute path="/cake/:cakeid" component={CakeDetails}  />
          <Route exact path="/search" component={Search} />
          <PrivateRoute path="/cakelist" component={CakeList} />
          <Route exact path="**" component={Pagenotfound} />
         </Switch>
         </BrowserRouter>
        </div>
  );
}

export default App;
