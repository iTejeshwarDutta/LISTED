import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

const Login = () => {
  return (
    
    <div className="cont">
       <div className="text">
        <h3>Board.</h3>
      </div>
    
      <div className="details">
        <div className="form-details">
          <h2>Sign In</h2>
          <span className="heading">Sign in to your account</span>

        
          
          
          <form>
            <div className="input">
              <label>Email address</label>
              <input type="email" name="" />
            </div>
            <div className="input fill">
              <label>Password</label>
              <input type="password" name="" />
            </div>
            <div className="forgot fill">
              <p>Forgot password?</p>
            </div>
            <div className="input fill">
              <input type="submit" value="Sign In" name="" id="signin" />
            </div>
          </form>

      <div className="qck">
            <button className="login">
              <FcGoogle /> Sign in with Google
            </button>
            <button className="login">
              <AiFillApple /> Sign in with Apple
            </button>
          </div>

          <div className="acc">
            <p>
              Don’t have an account? <span>Register here</span>
            </p>
          </div>
        </div>
      </div>
       </div>
    
  );
};

export default Login;
