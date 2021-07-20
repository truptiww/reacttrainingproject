import { Link } from "react-router-dom";

var logoName = "Logo"

export function Navbar(){
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link to="/" class="navbar-brand">{logoName}</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <Link to="/Form" class="nav-link">Product Form</Link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <Link to="/Login"><button class="btn btn-primary my-2 my-sm-0 mr-4" type="button">Login</button></Link>
      </form>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  )
}

export default Navbar;

