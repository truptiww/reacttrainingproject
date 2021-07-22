export function Form() {
    return (
        <div className="container mt-4">
            <h2 className="text-center">Product Details</h2>
            <form className="mt-5">
                <div className="row">
                    <div className="form-group col-12">
                        <label for="exampleFormControlFile1">Product Image :</label>
                        <input type="file" className="form-control-file" id="productImage" />
                    </div>
                    <div className="form-group col-12">
                        <label for="name">Product Name :</label>
                        <input type="text" className="form-control" id="productName" placeholder="Enter Product Name" />
                    </div>
                    <div className="form-group col">
                        <label for="name">Price in {'\u20B9'} :</label>
                        <input type="text" className="form-control" id="productPrice" placeholder="Enter your Product Price" />
                    </div>
                    <div className="form-group col">
                        <label for="name">Weight in Kg :</label>
                        <input type="number" className="form-control" id="productWeight" placeholder="Enter your Product Weight" />
                    </div>
                    <div className="form-group col-12">
                        <label for="name">Enter Product Description :</label>
                        <input type="text" className="form-control" id="productDesc" placeholder="Enter Product Description" />
                    </div>
                    <div className="form-group col">
                        <div className="row" style={{alignItems:"center"}}>
                            <label for="ProductType" className="col-sm-2 mb-0">Type: </label>
                            <select className="form-control col-sm-10" id="productType">
                                <option value="Select Cake Type" selected="selected">Select Product Type</option>
                                <option>Type 2</option>
                                <option>Type 3</option>
                                <option>Type 5</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group col">
                        <div className="form-check row">
                        <label className="form-check-label col-md-4" for="category">Category1: </label>
                            <input class="form-check-input" type="checkbox" value="" id="category" />
                        </div>
                    </div>
                    <div className="form-group col-12">
                        <label for="name">Brand Name :</label>
                        <input type="text" className="form-control" id="productBrand" placeholder="Enter Brand Name" />
                    </div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Form;