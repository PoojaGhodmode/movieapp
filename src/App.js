import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
//styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Home/>
      <GlobalStyle />
    </div>
  )
}

export default App;
