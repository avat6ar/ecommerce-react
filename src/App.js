import React, { Fragment, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home";
import Cart from "./Components/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Components/Footer/Footer";
import { IoIosArrowUp } from "react-icons/io";
import $ from "jquery";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { HashLoader } from "react-spinners";
import Categories from "./Components/Categories/Categories";
import { setLoading, toggleNav } from "./Components/redux/CounterState";
import Box from "./Components/Box Cart/Box";
import Carts from "./Components/Carts/Carts";

const App = () => {
  const { navSections } = useSelector((state) => state.data);
  const { loading } = useSelector((state) => state.data);
  const { box } = useSelector((state) => state.data);
  const [totop, setTotop] = useState(false);
  const dispatch = useDispatch();
  $(window).scroll(() => {
    let windowScroll = $(window).scrollTop();
    if (windowScroll > 150) {
      setTotop(true);
    } else {
      setTotop(false);
    }
  });
  $("#totop").click(function () {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  return (
    <BrowserRouter>
      <div className={navSections ? "open_nav app" : "app"}>
        {loading && (
          <div className="loading">
            <HashLoader color="#ffff" />
          </div>
        )}
        <Header />
        {box && <Box />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Cart />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/carts" element={<Carts />} />
        </Routes>
        <Footer />
        <a href="#" id="totop" className={totop ? "active" : ""}>
          <IoIosArrowUp />
        </a>
        {navSections && (
          <div
            className="navOpened d-none"
            onClick={() => {
              dispatch(toggleNav());
            }}
          ></div>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
