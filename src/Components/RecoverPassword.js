import axios from "axios";
import { PureComponent } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

class RecoverPassword extends PureComponent {
    constructor(props) {
        super(props)
         // initialize the state
        this.state = {
            error: "Invalid Credentials"
        }
    }

    
    notifysuccess = () => toast.success('please check email we have sent you a password', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    notifyalert = () => toast.error('Please Enter Credentials', {
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

    recoverpassword = (event)=>{
        event.preventDefault();

        let apiurl = process.env.REACT_APP_BASE_API + "/recoverpassword"

        axios({
            method:"post",
            url:apiurl,
            data:this.user  // we required structure like {email}
        }).then((response)=>{
            console.log("response from recoverpassword api",response)
            if (response.data.data) {
                this.notifysuccess()
                this.props.history.push('/login')
              } else {
                this.notifyalert()
                this.setState({
                    errorMessage: "You have entered invalid credentials"
                })
              }
        },(error)=>{
         console.log("error from recoverpassword api",error)
         this.notifyalert()
         this.setState({
            errorMessage: "Please Enter credentials tst"
         })
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
                        <label className="errormessage">{this.state.errorMessage}</label>
                    </div>
                    <button onClick={this.recoverpassword} type="submit" className="btn btn-primary">submit</button>
                </form>
            </div>
        )
    }

}


export default RecoverPassword