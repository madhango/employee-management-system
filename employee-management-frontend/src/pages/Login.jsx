import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  
  const navigate=useNavigate();  
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const login = async () => {

    const res = await API.post("/auth/login",{
      email,
      password
    });

    localStorage.setItem("token",res.data.token);

    alert("Login successful");
    navigate("/dashboard");
  };

  return (
    <div>

      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={login}>
        Login
      </button>

    </div>
  );
}

export default Login;