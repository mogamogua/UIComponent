import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Slider from "./components/slider";
import Main from "./pages/Main";
import {GlobalStyle} from "./styles/globalStyles";
import "./fonts/font.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/slider" element={<Slider />} />
        </Routes>
      </BrowserRouter>
    </div>

    //router처리해야함
  );
}

export default App;
