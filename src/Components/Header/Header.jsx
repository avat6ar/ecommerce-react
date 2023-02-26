import React, { Fragment, useState } from "react";
import logo from "./logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { BsXLg } from "react-icons/bs";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, toggleNav, removeCart } from "../redux/CounterState";
import $ from "jquery";
import { Link } from "react-router-dom";

const Header = () => {
  const [header2, setHeader2] = useState(false);
  const [miniCart, setMiniCart] = useState(false);
  const [showDetails, setShowDetails] = useState(null);
  const [activeId, setActiveId] = useState(1);
  const [quantity, setQuantity] = useState("");
  const [editQuantity, setEditQuantity] = useState({
    id: "",
    status: false,
  });

  const { navSections } = useSelector((state) => state.data);
  const { addedItem } = useSelector((state) => state.data);
  const { totalPrice } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const addActive = (id) => setActiveId(id);
  const showOptions = (id) => {
    if (showDetails == id) {
      return setShowDetails(null);
    }
    setShowDetails(id);
  };
  const handleEditQuantity = (id) => {
    setEditQuantity({
      id,
      status: true,
    });
  };
  const handleUpdate = (id, size, color) => {
    if (quantity === "" || quantity === "0") {
      setQuantity(1);
    }
    dispatch(
      updateQuantity({ id, size, color, quantity: Math.floor(quantity) })
    );
  };
  $(window).scroll(() => {
    let windowScroll = $(window).scrollTop();
    if (windowScroll > 150) {
      setHeader2(true);
    } else {
      setHeader2(false);
    }
  });

  return (
    <Fragment>
      <header className={header2 ? "header2 page-header" : "page-header"}>
        <div className="header-main">
          <div className="header-row">
            <div className="header-left">
              <div className="logo">
                <img src={logo} alt="Magento Commerce" className="img-fluid" />
              </div>
              <div
                className={navSections ? "active nav-sections" : "nav-sections"}
              >
                <div className="nav-sections-items">
                  <div
                    className={
                      activeId == 1
                        ? "nav-sections-item-title active d-none"
                        : "nav-sections-item-title d-none"
                    }
                    onClick={() => addActive(1)}
                  >
                    <a className="nav-sections-item-switch">
                      <AiOutlineMenu />
                      Menu
                    </a>
                  </div>
                  <div
                    className={
                      activeId == 1
                        ? "nav-sections-item-content active"
                        : "nav-sections-item-content"
                    }
                  >
                    <nav className="navigation">
                      <ul>
                        <li className="ui-menu-item">
                          <Link to="/">
                            <span>Home</span>
                          </Link>
                        </li>
                        <li className="ui-menu-item">
                          <Link to="/categories">
                            <span>Categories</span>
                            <BsChevronDown />
                          </Link>
                        </li>
                        <li className="ui-menu-item">
                          <a href="/">
                            <span>Products</span>
                            <BsChevronDown />
                          </a>
                        </li>
                        <li className="ui-menu-item">
                          <a href="/">
                            <span>Pages</span>
                            <BsChevronDown />
                          </a>
                        </li>
                        <li className="ui-menu-item">
                          <a href="/">
                            <span>Features</span>
                            <BsChevronDown />
                          </a>
                        </li>
                        <li className="ui-menu-item">
                          <a href="/">
                            <span>Blog</span>
                          </a>
                        </li>
                        <li className="ui-menu-item">
                          <a href="/">
                            <span>Buy Porto!</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div
                    className={
                      activeId == 2
                        ? "nav-sections-item-title active d-none"
                        : "nav-sections-item-title d-none"
                    }
                    onClick={() => addActive(2)}
                  >
                    <a className="nav-sections-item-switch">Account</a>
                  </div>
                  <div
                    className={
                      activeId == 2
                        ? "nav-sections-item-content active"
                        : "nav-sections-item-content d-none"
                    }
                  >
                    <nav className="navigation">
                      <ul>
                        <li className="ui-menu-item">
                          <span>Default welcome msg!</span>
                        </li>
                        <li className="ui-menu-item">
                          <a href="/">
                            <span>Blog</span>
                          </a>
                        </li>
                        <li className="ui-menu-item">
                          <a href="/">
                            <span>Sign In</span>
                          </a>
                        </li>
                        <li className="ui-menu-item">
                          <a href="/">
                            <span>Contact Us</span>
                          </a>
                        </li>
                        <li className="ui-menu-item">
                          <a href="/">
                            <span>Create an Account</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div
                    className={
                      activeId == 3
                        ? "nav-sections-item-title active d-none"
                        : "nav-sections-item-title d-none"
                    }
                    onClick={() => addActive(3)}
                  >
                    <a className="nav-sections-item-switch">Settings</a>
                  </div>
                  <div
                    className={
                      activeId == 3
                        ? "nav-sections-item-content active"
                        : "nav-sections-item-content d-none"
                    }
                  >
                    <nav className="navigation">
                      <ul>
                        <li className="ui-menu-item">
                          <span>
                            USD
                            <BsChevronDown className="ms-2" />
                          </span>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-right">
              <span
                className="nav-toggle d-none"
                onClick={() => dispatch(toggleNav())}
              >
                <AiOutlineMenu />
              </span>
              <div className="search-area">
                <a href="" className="search-toggle-icon">
                  <AiOutlineSearch />
                </a>
              </div>
              <div className="header-contact">
                <a href="" className="my-account">
                  <AiOutlineUser />
                </a>
                <a href="" className="wishlist me-1">
                  <FiHeart />
                </a>
              </div>
              <div
                className={
                  miniCart ? "minicart-wrapper active" : "minicart-wrapper"
                }
              >
                <a
                  className="showcart"
                  onClick={() => {
                    miniCart ? setMiniCart(false) : setMiniCart(true);
                  }}
                >
                  <BiShoppingBag className="minicart-icon" />
                  <span className="counter qty empty">
                    <span className="counter-number">{addedItem.length}</span>
                  </span>
                  <BsChevronDown className="down" />
                </a>
                <div className="mage-dropdown-dialog">
                  <div className="block-minicart">
                    <div className="minicart-content-wrapper">
                      <div className="block-content">
                        <div className="total-count text-v-dark">
                          <div className="items-total">
                            <span className="count">{addedItem.length} </span>
                            <span className="counter-label">Item</span>
                          </div>
                          <div className="actions">
                            <div className="secondary">
                              <Link to="/carts" className="action viewcart">
                                <span>View Cart</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        {addedItem.length === 0 ? (
                          <strong className="subtitle empty">
                            You have no items in your shopping cart.
                          </strong>
                        ) : (
                          <Fragment>
                            <div
                              className="minicart-items-wrapper"
                              style={{ height: `${addedItem.length * 132}px` }}
                            >
                              <ol className="minicart-items">
                                {addedItem.map((product, index) => (
                                  <li className=" product-item" key={index}>
                                    <div className="product">
                                      <a href="" className="product-item-photo">
                                        <span
                                          className="product-image-container"
                                          style={{ width: "100px" }}
                                        >
                                          <span className="product-image-wrapper">
                                            <img
                                              src={product.img}
                                              alt=""
                                              className="product-image-photo"
                                              style={{
                                                width: "80px",
                                                height: "80px",
                                              }}
                                            />
                                          </span>
                                        </span>
                                      </a>
                                      <div className="product-item-details">
                                        <strong className="product-item-name">
                                          <a href="">{product.name}</a>
                                        </strong>
                                        {product.size != "" && (
                                          <div className="options product">
                                            <span
                                              className="toggle"
                                              onClick={() => showOptions(index)}
                                            >
                                              <span>See Details</span>
                                              <IoIosArrowDown />
                                            </span>
                                            <div
                                              className="content"
                                              style={
                                                showDetails == index
                                                  ? { display: "block" }
                                                  : { display: "none" }
                                              }
                                            >
                                              <dl className="product options list">
                                                <dt className="label">Size</dt>
                                                <dd className="values">
                                                  <span>{product.size}</span>
                                                </dd>
                                                <dt className="label">Color</dt>
                                                <dd className="values">
                                                  <span>
                                                    {product.nameColor}
                                                  </span>
                                                </dd>
                                              </dl>
                                            </div>
                                          </div>
                                        )}
                                        <div className="product-item-pricing">
                                          <div className="price-container">
                                            <span className="price-wrapper">
                                              <span className="price-excluding-tax">
                                                <span className="price">
                                                  ${product.price}.00
                                                </span>
                                              </span>
                                            </span>
                                          </div>
                                          <div className="details-qty qty">
                                            <label
                                              htmlFor="cart-item-qty"
                                              className="label"
                                            >
                                              Qty:
                                            </label>
                                            <input
                                              type="number"
                                              name=""
                                              id="cart-item-qty"
                                              value={
                                                editQuantity.status &&
                                                editQuantity.id === index
                                                  ? quantity
                                                  : product.qty
                                              }
                                              onChange={(e) =>
                                                setQuantity(e.target.value)
                                              }
                                              onClick={() =>
                                                handleEditQuantity(index)
                                              }
                                              onBlur={() => {
                                                quantity == "" &&
                                                  setQuantity(product.qty);
                                              }}
                                              onFocus={() => setQuantity("")}
                                              className="item-qty"
                                            />
                                            <button
                                              className="update-cart-item"
                                              onClick={() => {
                                                handleUpdate(
                                                  product.id,
                                                  product.size,
                                                  product.nameColor
                                                );
                                                editQuantity.status = false;
                                              }}
                                              style={{ display: "block" }}
                                            >
                                              <span>Update</span>
                                            </button>
                                          </div>
                                        </div>
                                        <div className="product actions">
                                          <div className="secondary">
                                            <a
                                              onClick={() => {
                                                dispatch(
                                                  removeCart({
                                                    id: product.id,
                                                    color: product.nameColor,
                                                    size: product.size,
                                                  })
                                                );
                                              }}
                                              className="action delete"
                                            >
                                              <BsXLg />
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ol>
                            </div>
                            <div className="subtotal">
                              <span className="label">Subtotal:</span>
                              <div className="amount price-container">
                                <span className="price-wrapper">
                                  <span className="price">
                                    ${totalPrice}.00
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="actions">
                              <div className="primary">
                                <button className="action primary checkout">
                                  Go to Checkout
                                </button>
                              </div>
                            </div>
                          </Fragment>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
