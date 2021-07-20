import { Link } from "react-router-dom";

export function Login() {
    return (
        <div className="container mt-4">
            <h2 className="text-center">Login Form</h2>
            <form style={{maxWidth:'60%', margin:'2rem auto 0'}}>
                <div class="form-group">
                    <label for="emailaddress">Email address</label>
                    <input type="email" class="form-control" id="login" name="login" placeholder="login" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="password">password</label>
                    <input type="password"class="form-control" id="password" name="login" placeholder="password" />
                </div>
                <div class="form-group">
                    <Link to="/signup">New User? Signup here</Link>
                </div>
                <input type="submit" value="Log In" />
            </form>
        </div>
    )
}

export default Login;