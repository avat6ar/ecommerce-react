import React, { Fragment, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import "./Box.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  setQuantity,
  setColor,
  setSize,
  AddToCart,
  toggleBox,
} from "../redux/CounterState";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CgCheck } from "react-icons/cg";
import { Link } from "react-router-dom";

const Box = () => {
  const cartProduct = JSON.parse(localStorage.getItem("detailsProduct"));
  const dispatch = useDispatch();
  const { qty } = useSelector((state) => state.data.cartDetails);
  const { notSize } = useSelector((state) => state.data);
  const { notColor } = useSelector((state) => state.data);
  const { checkColorAndSize } = useSelector((state) => state.data);
  const [addedCart, setAddedCart] = useState(false);
  const price = cartProduct.discount
    ? cartProduct.price -
      ((cartProduct.discount / 100) * cartProduct.price).toFixed(0)
    : cartProduct.price;
  const { quantityError } = useSelector((state) => state.data);

  const loadComp = () => {
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
    const colorArr = document.querySelectorAll(
      ".swatch-attribute-options .color"
    );
    const textArr = document.querySelectorAll(
      ".swatch-attribute-options .text"
    );
    textArr.forEach((item) => {
      item.addEventListener("click", () => {
        textArr.forEach((item) => item.classList.remove("selected"));
        item.classList.add("selected");
      });
    });
    colorArr.forEach((item) => {
      item.addEventListener("click", () => {
        colorArr.forEach((item) => item.classList.remove("selected"));
        item.classList.add("selected");
      });
    });
  });
  return (
    <div className="box-cart">
      <div className="mfp-bg mfp-ready"></div>
      <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready">
        <div className="mfp-container mfp-s-ready mfp-iframe-holder">
          <div className="mfp-content">
            <div className="mfp-iframe-scaler">
              <div className="page-wrapper">
                <main className="page-main">
                  <div className="d-flex justify-content-between column main">
                    <div className="product media">
                      <div className="gallery-placeholder">
                        <div className="fotorama__stage">
                          <img src={cartProduct.img} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="product-info-main">
                      <Link
                        to="/"
                        className="mfp-close"
                        onClick={() => {
                          dispatch(toggleBox());
                        }}
                      >
                        <IoMdClose />
                      </Link>
                      <div className="page-title-wrapper">
                        <div className="page-title">
                          <h1 className="page-title">
                            <span>{cartProduct.name}</span>
                          </h1>
                        </div>
                      </div>
                      <div className="product-reviews-summary empty">
                        <div className="reviews-actions">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                      <div className="product-info-price">
                        {cartProduct.discount ? (
                          <div className="price-box price-final_price">
                            <del className="old-price">
                              ${cartProduct.price}.00
                            </del>
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
                            <span className="price">
                              ${cartProduct.price}.00
                            </span>
                          </span>
                        )}
                      </div>
                      <div className="product attribute overview">
                        <div className="value">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non. Duis aute irure
                          dolor in reprehenderit in voluptate velit esse cillum
                          dolore eu fugiat nulla pariatur.
                        </div>
                      </div>
                      <div className="product-info-stock-sku">
                        <div className="stock available" title="Availability">
                          <span className="label">Availability:</span>
                          <span>In stock</span>
                        </div>
                        <div className="product attribute sku">
                          <strong className="type">SKU</strong>
                          <div className="value">42346423</div>
                        </div>
                      </div>
                      <div className="product-add-form">
                        {cartProduct.size || cartProduct.color ? (
                          <div className="product-options-wrapper">
                            <div className="fieldset">
                              <div className="swatch-opt">
                                <div className="swatch-attribute size">
                                  <span className="swatch-attribute-label">
                                    Size:
                                  </span>
                                  <div className="swatch-attribute-options clearfix">
                                    {cartProduct.size &&
                                      cartProduct.size.map((size, ind) => (
                                        <div
                                          className="swatch-option text"
                                          key={ind}
                                          onClick={() =>
                                            dispatch(setSize(size))
                                          }
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
                                  <span className="swatch-attribute-label">
                                    Color:
                                  </span>
                                  <div className="swatch-attribute-options clearfix">
                                    {cartProduct.color &&
                                      cartProduct.color.map((color, ind) => (
                                        <div
                                          className="swatch-option color"
                                          key={ind}
                                          style={{
                                            background: `${color.color} no-repeat center`,
                                          }}
                                          onClick={() =>
                                            dispatch(setColor(color.name))
                                          }
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
                                  loadComp();
                                }}
                              >
                                <HiOutlineShoppingBag />
                                <span>
                                  {addedCart ? "ADDING..." : "Add to Cart"}
                                </span>
                              </button>
                            </div>
                            {quantityError && (
                              <div className="mage-error">
                                Please enter a quantity greater than 0.
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="box-gotoproduct">
                          <div className="fieldset">
                            <div className="actions">
                              <Link
                                to={`/product?name=${cartProduct.name}`}
                                title="Go To Product"
                                className="action primary"
                              >
                                <span>Go To Product</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
