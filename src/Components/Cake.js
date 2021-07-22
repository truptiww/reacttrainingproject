export function Cake(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.data.image} />
            <div class="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">{'\u20B9'} {props.data.price}</p>
                <a href="#" className="btn btn-primary">Order Now</a>
            </div>
        </div>
    )
}
export default Cake