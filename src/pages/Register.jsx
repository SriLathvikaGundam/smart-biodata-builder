import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth-container">
      <h2>Create Account</h2>

      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button>Create Account</button>

      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Register;