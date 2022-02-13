import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function loginuser(e) {
    e.preventDefault();
    const response = await fetch(
      "https://stormy-ravine-08359.herokuapp.com/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();
    console.log(data);

    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Logged in Successfully");
      navigate("/dashboard");
    } else {
      alert("Please Check your Email & Password");
    }
  }

  return (
    <div>
      <h1>MERN AUTH</h1>
      <form onSubmit={loginuser}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
