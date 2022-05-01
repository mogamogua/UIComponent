import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Slider from "./components/slider";
import Main from "./pages/Main";
import UserInput from "./pages/UserInput";
import Button from "./pages/Button";
import MenuList from "./pages/MenuList";
import TheOhters from "./pages/TheOthers";
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
          <Route path="/user_input" element={<UserInput />} />
          <Route path="/button" element={<Button />} />
          <Route path="/menu_list" element={<MenuList />} />
          <Route path="/the_others" element={<TheOhters />} />
        </Routes>
      </BrowserRouter>
    </div>

    //router처리해야함
  );
}

export default App;
