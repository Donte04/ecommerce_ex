import { useState } from "react"

const Login = () => {
  const  [username, setUsername] = useState("");
  const  [passwordname, setPasswordname] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder="username" 
        onChange = {e=>setUsername(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="password" 
        type="password" 
        onChange = {e=>setPasswordrname(e.target.value)}
      />
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;