import React, {useState} from "react";

// let time = new Date().toLocaleTimeString();
// console.log(time);

function App() {
  let [time, setTime] = useState("TIME")

  function changeTime() {
    let currentTime = new Date().toLocaleTimeString();
    time = currentTime;
    setTime(time);
    setInterval(changeTime, 1000);
  }

  return (

    <div className="container">
      <h1>{time} </h1>
      <button onClick={changeTime}>Get Time</button>
    </div>
  );
}

export default App;
