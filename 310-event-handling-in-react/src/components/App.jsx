import React, {useState} from "react";

function App() {
  const [isMousedOver, setMouseOver] = useState(false);

  function handleMouseOver () {
    setMouseOver(true);
  }

  function handleMouseOut () {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{ backgroundColor: isMousedOver ? 'black' : 'white' }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
