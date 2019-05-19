import React from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Contact
          name="John Doe"
          email="johndoe@gmail.com"
          phone="555-555-5555"
        />
      </div>
    </div>
  );
}

export default App;
