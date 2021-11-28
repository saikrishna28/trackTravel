import React from "react";
import "./App.scss";
import AddEntry from "./Components/AddEntry/AddEntry";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <AddEntry />
      </div>
    </div>
  );
}

export default App;
