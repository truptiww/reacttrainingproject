import { Link, withRouter } from "react-router-dom";
import { Component, PureComponent } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import { connect } from "react-redux";


class Login extends PureComponent {
    constructor() {
        super()
         // initialize the state
        this.state = {
            name: "Trupti",
            loading: "false"
        }
    }

    notifysuccess = () => toast.success('Login Sucessfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    notifyalert = () => toast.error('Invalid Credentials', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    hideLoader = () => {
        this.setState({ loading: false });
    }
    showLoader = () => {
        this.setState({ loading: true });
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
        let apiurl = process.env.REACT_APP_BASE_API + "/login"
        // this.showLoader()
        axios({
            method:"post",
            url:apiurl,
            data:this.user  // we requrie structure like {email,password}
        }).then((response)=>{
            console.log("response from login api",response)
            if(response.data.token){
                this.props.dispatch({
                    type:"LOGIN",
                    payload:response.data
                })
                localStorage.token = response.data.token
                this.notifysuccess()
                this.showLoader()
                this.props.history.push("/")
            }
            else{
                // alert("Invalid Credentials")
                this.notifyalert()
                this.hideLoader()
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
                {/* {this.state.loading} */}
                {this.state.loading && <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={100}
                    width={100} //3 secs
                />}
                <h2 className="text-center">Login Form</h2>
                <form style={{ maxWidth: '60%', margin: '2rem auto 0' }}>
                    <div class="form-group">
                        <label for="emailaddress">Email address</label>
                        <input onChange={this.handleEmail} type="email" class="form-control" id="login" name="login" placeholder="Email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="mb-1">
                        <label for="password">password</label>
                        <input onChange={this.handlePassword} type="password" class="form-control" id="password" name="login" placeholder="password" />
                    </div>
                    <label className="errormessage">{this.state.errorMessage}</label>
                    <div className="form-group">
                       <Link to="/recoverpassword">Forgot your password?</Link>
                    </div>
                    <button onClick={this.login} type="submit" className="btn btn-primary mb-3">Log In</button>
                    <div class="form-group">
                        <Link to="/signup">New User? Signup here</Link>
                    </div>
                </form>
            </div>
        )
    }
}

Login = withRouter(Login)

export default connect()(Login)
// withRouter is adding props to Login Component same props which adds Router 
