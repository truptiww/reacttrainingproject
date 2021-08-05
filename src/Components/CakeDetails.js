import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify";
// import Cake from "./Cake"

// let CakeImage = "frosting-cake.webp"


function CakeDetails(props) {
  var [cakedetails, setCakeDetails] = useState({})

  const notify = () => toast.warn('Please Login or Register to view cart', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  // function showCart(event) {
  //   event.preventDefault();
  //   if (!localStorage.token) {
  //     notify()
  //     props.history.push('/login')
  //   } else {
  //     props.history.push('/cart')
  //   }
  // }

  useEffect(() => {
    let apiurl = process.env.REACT_APP_BASE_API + "/cake/" + props.match.params.cakeid
    axios(
      {
        method: 'get',
        url: apiurl
      }
    ).then((response) => {
      console.log("response from cake details api", response.data)
      setCakeDetails(response.data.data)
      console.log("cakedetails object", cakedetails)
    }, (error) => {
      console.log("error from cake details api", error)
    })

  }, [])

  let addToCart =(event, token) => {
    let apiurl = process.env.REACT_APP_BASE_API + "/addcaketocart"
    axios(
      {
        method: 'post',
        url: apiurl,
        data: {cakeid: cakedetails.cakeid, image: cakedetails.image, name: cakedetails.name, price: cakedetails.price, weight: cakedetails.weight},
        headers: {authtoken: localStorage.token},

      } 
    ).then((response) => {
      console.log("response from add to cart api", response.data)
      if (!localStorage.token) {
            notify()
            props.history.push('/login')
          } else {
            alert("added to cart")
            props.history.push('/cart')
          }
    }, (error) => {
      alert("unable to add in cart")
      console.log("error from add to cart api", error)
    })
  }

  return (
    <div className="container mt-4">
      {/* Cake Details Page  for this cake {props.match.params.cakeid} */}
      <div className="row">
        <div className="col-4">
          <img src={cakedetails.image} className="d-block w-100" alt="cake" />
          {cakedetails.ingredients && <div className="ingredients">
            <h4 className="mt-4">Ingredients</h4>
            <ul>
              {cakedetails.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>}
        </div>
        <div className="col-8 pl-5">
          <h2 className="cake-title mb-4">{cakedetails.name}</h2>
          <div class="star-rating mb-3">
            <span class="fa fa-star-o" data-rating="1"></span>
            <span class="fa fa-star-o" data-rating="2"></span>
            <span class="fa fa-star-o" data-rating="3"></span>
            <span class="fa fa-star-o" data-rating="4"></span>
            <span class="fa fa-star-o" data-rating="5"></span>
          </div>
          <p><b>Rating :</b> {cakedetails.ratings}</p>
          <p><b>Reviews :</b> {cakedetails.reviews} Reviews</p>
          <p><b>Likes :</b> {cakedetails.likes} Likes</p>
          <p><b>Description:</b> {cakedetails.description}</p>
          <p><b>Current Price :</b> {'\u20B9'} {cakedetails.price}</p>
          <p><b>Weight :</b>  {cakedetails.weight}kg</p>
          <p><b>Cake Type(Eggless) :</b>  {cakedetails.eggless ? 'yes' : 'no'}</p>
          <p><b>Flavour :</b> {cakedetails.flavour}</p>
          <p><b>Occasion :</b> {cakedetails.type}</p>
          <div className="cart-button mt-5">
            <button onClick={addToCart} className="btn btn-primary" type="button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CakeDetails