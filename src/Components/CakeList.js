import Cake from "./Cake";

export function CakeList() {

    let cake = {
        name: 'Red Velevet Cake',
        price: 600,
        image: 'red-velvet-cake.jpg'
    }

    let cake2 = {
        name: 'Frosting Cake',
        price: 600,
        image: 'frosting-cake.webp'
    }

    let cake3 = {
        name: 'Chocoate Truffle Cake',
        price: 700,
        image: 'choco-truffle-cake.jpg'
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <Cake data={cake} />
                </div>
                <div className="col-md-4">
                    <Cake data={cake2} />
                </div>
                <div className="col-md-4">
                    <Cake data={cake3} />
                </div>
            </div>
        </div>
    )
}

export default CakeList