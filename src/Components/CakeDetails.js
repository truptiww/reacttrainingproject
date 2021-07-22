let CakeImage = "frosting-cake.webp"


export function CakeDetails() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-4">
          <img src={CakeImage} className="d-block w-100" alt="cake" />
          <h4 className="mt-4">Ingredients</h4>
          <ul>
            <li>Milk</li>
            <li>Egg</li>
            <li>Butter</li>
            <li>Frosting Cream</li>
          </ul>
        </div>
        <div className="col-8 pl-5">
          <h2 className="cake-title mb-4">Frosting Cake</h2>
          <div class="star-rating">
            <span class="fa fa-star-o" data-rating="1"></span>
            <span class="fa fa-star-o" data-rating="2"></span>
            <span class="fa fa-star-o" data-rating="3"></span>
            <span class="fa fa-star-o" data-rating="4"></span>
            <span class="fa fa-star-o" data-rating="5"></span>
          </div>
          <p><b>Rating:</b> 4.5</p>
          <p><b>Current Price:</b> {'\u20B9'} 315</p>
          <p><b>Weight:</b> 0.5Kg</p>
          <p><b>Flavour:</b> Fruit</p>
          <p><b>Occasion:</b> Party</p>
          <button className="btn btn-primary" type="button">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default CakeDetails