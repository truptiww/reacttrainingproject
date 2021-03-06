import axios from "axios"
import { Component, PureComponent } from "react"
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


class Signup extends PureComponent {
    constructor() {
        super()
        // initialising the state
        this.state = {
            name: "Trupti",
            loading: 0
        }
        // alert("In constructor")
    }

    componentDidMount() {
        // alert("In didmount")
    }

    componentDidUpdate() {
        // alert("In didupdate")
    }

    notifysuccess = () => toast.success('Loggedin Sucessful!', {
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

        notifyerror = () => toast.error('Please Enter Credentials', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    user = {}

    handleEmail = (event) => {
        this.user.email = event.target.value
    }
    handlePassword = (event) => {
        this.user.password = event.target.value
    }
    handleName = (event) => {
        this.user.name = event.target.value
    }
    signup = (event) => {
        // update the state
        // this.setState({
        //     loading: 10
        // })

        // setTimeout(()=>{
        //     this.setState({
        //         loading:false,
        //         errorMessage: "Invalid Credentials"
        //     })
        // },5000)

        let apiurl = process.env.REACT_APP_BASE_API + "/register"
        axios({
            method:"post",
            url:apiurl,
            data:this.user  // we required structure like {email,name,password}
        }).then((response)=>{
            console.log("response from signup api",response)
            if(response.data.token){
                localStorage.token = response.data.token
                this.notifysuccess()
                this.setState({
                    errorMessage: "Signup Suceesful!"
                })
                this.props.history.push("/")
            }
            else{
                // alert("Invalid Credentials")
                this.notifyalert()
                this.setState({
                    errorMessage: "You have entered invalid credentials"
                })
            }
        },(error)=>{
         console.log("error from signup api",error)
         this.notifyerror()
         this.setState({
            errorMessage: "Please Enter credentials"
         })
        })
        event.preventDefault()
    }

    render() {

        // var loader
        // if(this.state.loading){
        //    loader = <Loader
        //     type="ThreeDots"
        //     color="#000"
        //     height={50}
        //     width={50}
        //     timeout={5000} //5 secs
        //   /> 
        // }
        // else{
        //     loader = null
        // }

        // alert("In render")

        return (

            <div className="container mt-4">
                {/* {this.state.loading}
                {this.state.loading && <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={100}
                    width={100} //3 secs
                />} */}
                <h2 className="text-center">Signup Here</h2>
                <form style={{ maxWidth: '60%', margin: '2rem auto 0' }}>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input onChange={this.handleName} type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input onChange={this.handleEmail} type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group mb-1">
                        <label for="password">Password</label>
                        <input onChange={this.handlePassword} type="password" class="form-control" placeholder="Password" />
                    </div>
                    <label className="errormessage mb-4">{this.state.errorMessage}</label>
                    <div className="form-group">
                        <button onClick={this.signup} type="submit" className="btn btn-primary">Signup</button>
                    </div>
                    <div class="form-group">
                        <Link to="/login">Exisiting User? Login here </Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup