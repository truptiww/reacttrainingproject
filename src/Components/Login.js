import { Link, withRouter } from "react-router-dom";
import { Component } from "react";
import axios from "axios";

class Login extends Component {
    constructor() {
        super()
         // initialize the state
        this.state = {
            name: "Trupti"
        }
    }

    user = {}

    handleEmail = (event) => {
        this.user.email = event.target.value
    }

    handlePassword = (event) => {
        this.user.password = event.target.value
    }

    login = (event) => {
        event.preventDefault();

        // update the state
        // this.setState({
        //     name: "Trupti Rane",
        //     errorMessage: "Invalid Credentials"
        // })

        // if(this.user.email==="trupti.rane@neosoftmail.com" && this.user.password==="test"){
        //       this.props.history.push("/")
        // }
        let apiurl = "https://apifromashu.herokuapp.com/api/login"
        axios({
            method:"post",
            url:apiurl,
            data:this.user  // we requrie structure like {email,password}
        }).then((response)=>{
            console.log("response from login api",response)
            if(response.data.token){
                this.props.loggedin()
                localStorage.token = response.data.token
                this.props.history.push("/")
            }
            else{
                alert("Invalid Credentials")
            }
        },(error)=>{
         console.log("error from login api",error)
        })
        console.log(",,,,,,,,,,,", this.user)   
    }

    render() {
        return (
            <div className="container mt-4">
                {/* <h1>{this.state.name}</h1> */}
                <h2 className="text-center">Login Form</h2>
                <form style={{ maxWidth: '60%', margin: '2rem auto 0' }}>
                    <div class="form-group">
                        <label for="emailaddress">Email address</label>
                        <input onChange={this.handleEmail} type="email" class="form-control" id="login" name="login" placeholder="Email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="password">password</label>
                        <input onChange={this.handlePassword} type="password" class="form-control" id="password" name="login" placeholder="password" />
                    </div>
                    <label className="errormessage">{this.state.errorMessage}</label>
                    <div class="form-group">
                        <Link to="/signup">New User? Signup here</Link>
                    </div>
                    <button onClick={this.login} type="submit" className="btn btn-primary">Log In</button>
                </form>
            </div>
        )
    }
}


export default withRouter(Login)
// withRouter is adding props to Login Component same props which adds Router 
