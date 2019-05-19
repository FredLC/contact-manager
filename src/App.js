import React from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Contact name="John Doe" email="johndoe@gmail.com" phone="555-555-5555" />
    </div>
  );
}

export default App;
