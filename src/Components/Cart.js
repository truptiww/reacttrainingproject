import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

function Cart(props) {
  var [cartItems, setCartItems] = useState([]);
  useEffect(() => {
  //     props.dispatch({
  //       type:"Cart_Items"
  //   })
  // })
    let apiurl = process.env.REACT_APP_BASE_API + "/cakecart";
    axios({
      method: "post",
      url: apiurl,
      request: {},
      data: {},
      headers: {
        authToken: localStorage.token,
      },
    }).then(
      (response) => {
        console.log("response from show cart detail api", response.data);
        setCartItems(response.data.data);
      },
      (error) => {
        console.log("error from show cart detail api", error);
      }
    );

  }, []);

  return (
    <div className="container mt-4">
      <h2>Cart</h2>
      {cartItems === 0 &&
               <h2 className="text-center mt-5">Cart is Empty</h2>
      }

      <table className="table table-hover">
        <thead>
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Name</th>
            <th>Weight</th>
            <th>quantity</th>
            <th>price</th>
            <th>total price</th>
          </tr>
        </thead>
        <tbody> 
        {cartItems.map((each, index) => {
            return (
              <tr>  
                <td>{index + 1}</td>
                <td className="cakeImage">
                  <img src={cartItems[index].image} alt="" />
                </td>
                <td>{cartItems[index].name}</td>
                <td>{cartItems[index].weight}</td>
                <td>{cartItems[index].quantity}</td>
                <td>{cartItems[index].price}</td>
                <td>{cartItems[index].price * cartItems[index].quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

Cart = withRouter(Cart)
export default connect(function (state, props) {
  return {
    name: state["AuthReducer"]["user"] && ["AuthReducer"]["name"],
    cartitems: state["CartReducer"]["cartitems"]
  };
})(Cart)
