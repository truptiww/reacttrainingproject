import { Link, withRouter } from "react-router-dom";
import { useEffect, useState } from "react";

export function Navbar(props) {
  var [title, setTitle] = useState("Cake's Gallery")
  var [searchtext, setSearchText] = useState(undefined)

  // useEffect(()=>{
  //    alert("mounted")
  // },[]) 

  // function demo(event){
  //   event.preventDefault()
  //   var value = document.getElementById('searchinput').value
  //   setTitle(value +  " Cake's Gallery")
  // }

  function search(e) {
    e.preventDefault()

    if (searchtext) {
      var url = "/search?q=" + searchtext
      props.history.push(url)
    }
  }

  function getSearchText(event) {
    setSearchText(event.target.value)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">{title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/Form" class="nav-link">Product Form</Link>
          </li>
          <li className="nav-item">
            <Link to="/CakeList" class="nav-link">Cake Types</Link>
          </li>
        </ul>

        {props.isuserloggedin===false && <form class="form-inline my-2 my-lg-0 mr-4">
          <Link to="/login"> <button  class="btn btn-primary my-2 my-sm-0" type="submit">Login</button></Link>
        </form>}

        {props.isuserloggedin===true && <form class="form-inline my-2 my-lg-0">
          <button class="btn btn-success my-2 my-sm-0 mr-3" type="submit">Cart</button>
          <button class="btn btn-danger my-2 my-sm-0 mr-3" type="submit">Logout</button>
        </form>}

        <form className="form-inline my-2 my-lg-0">
          {/* <input onChange={demo} value={title} className="form-control mr-sm-2" id="searchinput" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}

          {/* <input className="form-control mr-sm-2" id="searchinput" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={demo} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}

          <input onChange={getSearchText} id="searchinput" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button onClick={search}  class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}

export default Navbar = withRouter(Navbar)

