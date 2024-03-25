import React from "react";
import Contact from "./Contact";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
        <Contact name='Beyonce' img='https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg' phone='+123 456 789' email='b@beyonce.com' />
        <Contact name= {contacts[1].name} img= {contacts[1].imgURL} phone= {contacts[1].phone} email= {contacts[1].email} />
        <Contact name= {contacts[2].name} img= {contacts[2].imgURL} phone= {contacts[2].phone} email= {contacts[2].email} />
    </div>
  );
}

export default App;
