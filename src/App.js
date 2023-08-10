import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import s from "./App.module.scss"
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";




const App = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
    </div>



  );
}

export default App;
