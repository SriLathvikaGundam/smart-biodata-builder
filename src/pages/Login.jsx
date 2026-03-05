import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-container">
      <h2>ShaadiBio Login</h2>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button>Login</button>

      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;