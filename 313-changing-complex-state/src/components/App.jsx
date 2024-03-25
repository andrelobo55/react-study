import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: '',
    lName: ''
  })

  function handleChange(event) {
    const {value, name} = event.target;

    setFullName(prevValue => {
      if (name === 'fName') {
        return {
          fName: value,
          lName: prevValue.lName
        };
      }

      else if(name === 'lName') {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
      
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello{', ' + fullName.fName + ' ' + fullName.lName} </h1>
      <form onSubmit={handleSubmit}>
        <input 
          name="fName"
          type="text" 
          placeholder="First Name"
          onChange={handleChange}
          value={fullName.fName} />

          <input 
          name="lName" 
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          value={fullName.lName} />
          
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;