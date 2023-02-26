import React, { Fragment, useEffect, useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import $ from "jquery";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillSignal } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { SlHeart } from "react-icons/sl";
import { CgCheck } from "react-icons/cg";
import { BsCheckCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  setQuantity,
  setColor,
  setSize,
  AddToCart,
  getNextProduct,
  getPrevProduct,
  detailsProduct,
} from "../redux/CounterState";
import Other from "../Other/Other";

const Cart = () => {
  const cartProduct = JSON.parse(localStorage.getItem("detailsProduct"));
  const dispatch = useDispatch();
  const { qty } = useSelector((state) => state.data.cartDetails);
  const { notSize } = useSelector((state) => state.data);
  const { notColor } = useSelector((state) => state.data);
  const { checkColorAndSize } = useSelector((state) => state.data);
  const { nextProduct } = useSelector((state) => state.data);
  const { prevProduct } = useSelector((state) => state.data);
  const { quantityError } = useSelector((state) => state.data);
  const [addedCart, setAddedCart] = useState(false);
  const [activeId, setActiveId] = useState(1);
  const price = cartProduct.discount
    ? cartProduct.price -
      ((cartProduct.discount / 100) * cartProduct.price).toFixed(0)
    : cartProduct.price;
  const addActive = (id) => setActiveId(id);
  const addToCart = () => {
    setAddedCart(true);
    setTimeout(() => {
      const colorArr = document.querySelectorAll(
        ".swatch-attribute-options .color"
      );
      const textArr = document.querySelectorAll(
        ".swatch-attribute-options .text"
      );
      colorArr.forEach((item) => item.classList.remove("selected"));
      textArr.forEach((item) => item.classList.remove("selected"));
      dispatch(
        AddToCart({
          id: cartProduct.id,
          price: price,
          img: cartProduct.img,
          name: cartProduct.name,
        })
      );
      setAddedCart(false);
    }, 2000);
  };
  useEffect(() => {
    $(".app").addClass("header3");
  });
  useEffect(() => {
    dispatch(getNextProduct());
    dispatch(getPrevProduct());
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const removeActiveColor = () => {
    const reamoveSelected = document.querySelectorAll(
      ".swatch-attribute-options .color"
    );
    reamoveSelected.forEach((item) => item.classList.remove("selected"));
  };
  const removeActiveSize = () => {
    const reamoveSelected = document.querySelectorAll(
      ".swatch-attribute-options .text"
    );
    reamoveSelected.forEach((item) => item.classList.remove("selected"));
  };
  return (
    <Fragment>
      <div className="cart-product">
        <div className="breadcrumbs">
          <ul className="items">
            <li className="item home">
              <Link to="/" title="Go to Home Page">
                Home
              </Link>
              <MdKeyboardArrowRight />
            </li>
            <li>
              <strong>{cartProduct.name}</strong>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="d-flex column">
            <div className="product media">
              <div className="gallery-placeholder">
                <div className="fotorama__stage">
                  <img
                    src={cartProduct.img}
                    alt=""
                    className="fotorama__img img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="product-info-main">
              <div className="prev-next-products">
                <div
                  className={
                    prevProduct === false
                      ? "product-nav product-prev none"
                      : "product-nav product-prev "
                  }
                >
                  <span
                    onClick={() => {
                      cartProduct.id != 1 &&
                        dispatch(detailsProduct(cartProduct.id - 1));
                      dispatch(getNextProduct(cartProduct.id));
                      dispatch(getPrevProduct(cartProduct.id));
                    }}
                  >
                    <MdKeyboardArrowLeft />
                  </span>
                  {prevProduct.name && (
                    <div className="product-pop">
                      <img
                        src={prevProduct.img}
                        className="product-image"
                        alt=""
                      />
                      <h3 className="product-name">{prevProduct.name}</h3>
                    </div>
                  )}
                </div>
                <div
                  className={
                    nextProduct === false
                      ? "product-nav product-next none"
                      : "product-nav product-next"
                  }
                >
                  <span
                    onClick={() => {
                      cartProduct.id != 20 &&
                        dispatch(detailsProduct(cartProduct.id + 1));
                      dispatch(getNextProduct(cartProduct.id));
                      dispatch(getPrevProduct(cartProduct.id));
                    }}
                  >
                    <MdKeyboardArrowRight />
                  </span>
                  {nextProduct.name && (
                    <div className="product-pop">
                      <img
                        src={nextProduct.img}
                        className="product-image"
                        alt=""
                      />
                      <h3 className="product-name">{nextProduct.name}</h3>
                    </div>
                  )}
                </div>
              </div>
              <div className="page-title-wrapper">
                <h1 className="page-title">
                  <span>{cartProduct.name}</span>
                </h1>
              </div>
              <div className="product-reviews-summary empty">
                <div className="reviews-actions">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <a href="" className="action add">
                    Be the first to review this product
                  </a>
                </div>
              </div>
              <div className="product-info-price">
                {cartProduct.discount ? (
                  <div className="price-box price-final_price">
                    <del className="old-price">${cartProduct.price}.00</del>
                    <span className="special-price">
                      $
                      {cartProduct.price -
                        (
                          (cartProduct.discount / 100) *
                          cartProduct.price
                        ).toFixed(0)}
                      .00
                    </span>
                  </div>
                ) : (
                  <span className="normal-price">
                    <span className="price">${cartProduct.price}.00</span>
                  </span>
                )}
              </div>
              <div className="attribute overview">
                <div className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium at sed accusantium temporibus porro quasi culpa
                  obcaecati vero corrupti tempore, aliquid neque laborum quidem
                  cumque, ipsum delectus, deleniti nesciunt amet.
                </div>
              </div>
              <div className="product-info-stock-sku">
                <div className="stock available" title="Availability">
                  <span className="label">Availability: </span>
                  <span>In stock</span>
                </div>
                <div className="attribute sku">
                  <strong className="type">SKU:</strong>
                  <div className="value">456556456</div>
                </div>
              </div>
              <div className="product-add-form">
                {cartProduct.size || cartProduct.color ? (
                  <div className="product-options-wrapper">
                    <div className="fieldset">
                      <div className="swatch-opt">
                        <div className="swatch-attribute size">
                          <span className="swatch-attribute-label">Size:</span>
                          <div className="swatch-attribute-options clearfix">
                            {cartProduct.size &&
                              cartProduct.size.map((size, ind) => (
                                <div
                                  className="swatch-option text"
                                  key={ind}
                                  onClick={(e) => {
                                    removeActiveSize();
                                    e.target.classList.toggle("selected");
                                    dispatch(setSize(size));
                                  }}
                                >
                                  {size}
                                </div>
                              ))}
                          </div>
                          {checkColorAndSize &&
                            (notSize ? (
                              ""
                            ) : (
                              <div className="mage-error">
                                This is a required field.
                              </div>
                            ))}
                        </div>
                        <div className="swatch-attribute color">
                          <span className="swatch-attribute-label">Color:</span>
                          <div className="swatch-attribute-options clearfix">
                            {cartProduct.color &&
                              cartProduct.color.map((color, ind) => (
                                <div
                                  className="swatch-option color"
                                  key={ind}
                                  style={{
                                    background: `${color.color} no-repeat center`,
                                  }}
                                  onClick={(e) => {
                                    removeActiveColor();
                                    e.target.classList.toggle("selected");
                                    dispatch(setColor(color.name));
                                  }}
                                >
                                  <CgCheck className="d-none" />
                                </div>
                              ))}
                          </div>
                          {checkColorAndSize &&
                            (notColor ? (
                              ""
                            ) : (
                              <div className="mage-error">
                                This is a required field.
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="box-tocart">
                  <div className="fieldset">
                    <div className="field qty">
                      <div className="control">
                        <input
                          type="number"
                          name="qty"
                          id="qty"
                          value={qty}
                          className="input-text qty"
                          onChange={(e) => {
                            dispatch(setQuantity(e.target.value));
                          }}
                        />
                        <div className="qty-changer">
                          <a
                            className="qty-dec"
                            onClick={() => dispatch(decrement())}
                          >
                            <AiOutlineMinus />
                          </a>
                          <a
                            className="qty-inc"
                            onClick={() => dispatch(increment())}
                          >
                            <AiOutlinePlus />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="actions">
                      <button
                        className="action tocart"
                        title="Add to Cart"
                        style={
                          addedCart
                            ? { backgroundColor: "#A7A7A7" }
                            : { backgroundColor: "#222529" }
                        }
                        onClick={() => {
                          addToCart();
                        }}
                      >
                        <HiOutlineShoppingBag />
                        <span>{addedCart ? "ADDING..." : "Add to Cart"}</span>
                      </button>
                    </div>
                    <div className="moved-add-to-links">
                      <div className="product-addto-links">
                        <a href="/" className="action towishlist">
                          <SlHeart />
                        </a>
                        <a href="/" className="action tocompare">
                          <AiFillSignal />
                        </a>
                      </div>
                    </div>
                    {quantityError && (
                      <div className="mage-error">
                        Please enter a quantity greater than 0.
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="product-social-links">
                <div className="product-share">
                  <div className="share-links">
                    <a
                      href="#"
                      className="share-facebook"
                      target="_blank"
                      title="Facebook"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="share-twitter"
                      target="_blank"
                      title="Twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                    <a
                      href="#"
                      className="share-linkedin"
                      target="_blank"
                      title="LinkedIn"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="#"
                      className="share-googleplus"
                      target="_blank"
                      title="Google +"
                    >
                      <FaGooglePlusG />
                    </a>
                    <a
                      href="#"
                      className="share-email"
                      target="_blank"
                      title="Email"
                    >
                      <AiOutlineMail />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product info detailed w-100">
              <div className="product data items">
                <div
                  className={
                    activeId === 1
                      ? "data item title active"
                      : "data item title"
                  }
                  onClick={() => addActive(1)}
                >
                  <span className="data switch">
                    <span>Details</span>
                  </span>
                </div>
                <div
                  className={
                    activeId === 2
                      ? "data item title active"
                      : "data item title"
                  }
                  onClick={() => addActive(2)}
                >
                  <span className="data switch">
                    <span>Reviews</span>
                  </span>
                </div>
                <div
                  className={
                    activeId === 3
                      ? "data item title active"
                      : "data item title"
                  }
                  onClick={() => addActive(3)}
                >
                  <span className="data switch">
                    <span>Custom Tab</span>
                  </span>
                </div>
                <div
                  className="data item content"
                  style={
                    activeId === 1 ? { display: "block" } : { display: "none" }
                  }
                >
                  <div className="product attribute description">
                    <div className="value">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat.
                      </p>
                      <ul>
                        <li>
                          <BsCheckCircleFill />
                          Any Product types that You want - Simple, Configurable
                        </li>
                        <li>
                          <BsCheckCircleFill />
                          Downloadable/Digital Products, Virtual Products
                        </li>
                        <li>
                          <BsCheckCircleFill />
                          Inventory Management with Backordered items
                        </li>
                      </ul>
                      <p>
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="data item content"
                  style={
                    activeId === 2 ? { display: "block" } : { display: "none" }
                  }
                >
                  <div className="block review-add">
                    <div className="block-content">
                      <form className="review-form">
                        <fieldset className="fieldset review-fieldset">
                          <legend className="legend review-legend">
                            <span>You're reviewing:</span>
                            <strong>{cartProduct.name}</strong>
                          </legend>
                          <fieldset className="field required review-field-ratings">
                            <legend className="label">
                              <span>Your Rating</span>
                            </legend>
                            <div className="control">
                              <div className="nested">
                                <div className="field choice review-field-rating">
                                  <label htmlFor="" className="label">
                                    <span>
                                      <span>Rating</span>
                                    </span>
                                  </label>
                                  <div className="control review-control-vote">
                                    <input
                                      type="radio"
                                      name="Rating_1"
                                      id="Rating_1"
                                      className="radio"
                                    />
                                    <label
                                      htmlFor="Rating_1"
                                      title="1 star"
                                      className="rating-1"
                                    >
                                      <AiOutlineStar />
                                    </label>
                                    <input
                                      type="radio"
                                      name="Rating_2"
                                      id="Rating_2"
                                      className="radio"
                                    />
                                    <label
                                      htmlFor="Rating_2"
                                      title="2 star"
                                      className="rating-2"
                                    >
                                      <AiOutlineStar />
                                    </label>
                                    <input
                                      type="radio"
                                      name="Rating_3"
                                      id="Rating_3"
                                      className="radio"
                                    />
                                    <label
                                      htmlFor="Rating_3"
                                      title="3 star"
                                      className="rating-3"
                                    >
                                      <AiOutlineStar />
                                    </label>
                                    <input
                                      type="radio"
                                      name="Rating_4"
                                      id="Rating_4"
                                      className="radio"
                                    />
                                    <label
                                      htmlFor="Rating_4"
                                      title="4 star"
                                      className="rating-4"
                                    >
                                      <AiOutlineStar />
                                    </label>
                                    <input
                                      type="radio"
                                      name="Rating_5"
                                      id="Rating_5"
                                      className="radio"
                                    />
                                    <label
                                      htmlFor="Rating_5"
                                      title="5 star"
                                      className="rating-5"
                                    >
                                      <AiOutlineStar />
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                          <div className="field review-field-nickname required">
                            <label htmlFor="nickname_field" className="label">
                              <span>Nickname</span>
                            </label>
                            <div className="control">
                              <input
                                type="text"
                                name="nickname"
                                className="input-text"
                                id="nickname_field"
                              />
                            </div>
                          </div>
                          <div className="field review-field-summary required">
                            <label htmlFor="summary_field" className="label">
                              <span>Summary</span>
                            </label>
                            <div className="control">
                              <input
                                type="text"
                                name="title"
                                className="input-text"
                                id="summary_field"
                              />
                            </div>
                          </div>
                          <div className="field review-field-text required">
                            <label htmlFor="review_field" className="label">
                              <span>Review</span>
                            </label>
                            <div className="control">
                              <textarea
                                type="text"
                                name="detail"
                                className="input-text"
                                id="review_field"
                                rows="3"
                                cols="5"
                              ></textarea>
                            </div>
                          </div>
                        </fieldset>
                        <div className="actions-toolbar review-form-actions">
                          <div className="primary actions-primary">
                            <button
                              type="submit"
                              className="action submit primary"
                            >
                              <span>Submit Review</span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div
                  className="data item content"
                  style={
                    activeId === 3 ? { display: "block" } : { display: "none" }
                  }
                >
                  <table className="table-sizing-guide">
                    <thead>
                      <tr>
                        <th colSpan="6">
                          <b>Clothing - Single Size Conversion (Continued)</b>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>UK</td>
                        <td>18</td>
                        <td>20</td>
                        <td>22</td>
                        <td>24</td>
                        <td>26</td>
                      </tr>
                      <tr>
                        <td>European</td>
                        <td>46</td>
                        <td>48</td>
                        <td>50</td>
                        <td>52</td>
                        <td>54</td>
                      </tr>
                      <tr>
                        <td>US</td>
                        <td>14</td>
                        <td>16</td>
                        <td>18</td>
                        <td>20</td>
                        <td>22</td>
                      </tr>
                      <tr>
                        <td>Australia</td>
                        <td>8</td>
                        <td>10</td>
                        <td>12</td>
                        <td>14</td>
                        <td>16</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Other />
    </Fragment>
  );
};

export default Cart;
