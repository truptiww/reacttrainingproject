import axios from "axios";
import { PureComponent } from "react";
import { Link } from "react-router-dom";

class RecoverPassword extends PureComponent {
    constructor(props) {
        super(props)
         // initialize the state
        this.state = {
            error: "Invalid Credentials"
        }
    }


    user = {}

    handleEmail = (event) => {
        this.user.email = event.target.value
    }

    recoverpassword = (event)=>{
        event.preventDefault();

        let apiurl = process.env.REACT_APP_BASE_API + "/recoverpassword"

        axios({
            method:"post",
            url:apiurl,
            data:this.user  // we required structure like {email}
        }).then((response)=>{
            console.log("response from recoverpassword api",response)
        },(error)=>{
         console.log("error from recoverpassword api",error)
        })
    }

    render() {
        return (
            <div className="container mt-4">
                <h2 className="text-center">Recover Password</h2>
                <form style={{ maxWidth: '60%', margin: '2rem auto 0' }}>
                    <Link to="/login" className="mb-3 d-block">Return to login</Link>
                    <div class="form-group">
                        <label for="emailaddress">Email address</label>
                        <input onChange={this.handleEmail} type="email" class="form-control" name="email" placeholder="Email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <button onClick={this.recoverpassword} type="submit" className="btn btn-primary">submit</button>
                </form>
            </div>
        )
    }

}


export default RecoverPassword