import React from "react";
import Login from "./Login";

var isLogged = false;

{/* <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form> */}

function App() {
  return (
    <div className="container">
      {
        isLogged ? <h1>Hello</h1> : <Login />
      }
    </div>
  );
}

export default App;