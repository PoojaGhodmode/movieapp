import React from "react";
import Header from "./components/Header";
//styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <div className="app">
      <Header/>
      <GlobalStyle />
    </div>
  )
}

export default App;
