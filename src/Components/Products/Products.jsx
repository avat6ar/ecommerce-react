import React, { Fragment, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiFillSignal } from "react-icons/ai";
import { SlHeart } from "react-icons/sl";
import { BiShoppingBag } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import "./Products.css";
import { Link } from "react-router-dom";
import {
  detailsProduct,
  getNextProduct,
  getPrevProduct,
  setLoading,
  toggleBox,
} from "../redux/CounterState";

const Products = () => {
  const { products } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="home-products">
        <div className="container" style={{ paddingTop: "65px" }}>
          <div className="porto-products text-center">
            <h2 className="slider-title mb-4">
              <span>POPULAR PRODUCTS</span>
            </h2>
          </div>
          <div className="porto-products">
            <div className="row products">
              {products.map((product) => (
                <div className="col-xl-2 col-lg-3 col-md-4" key={product.id}>
                  <div className="product product-item-info">
                    <div className="product-item-photo">
                      <Link
                        to={`/product?name=${product.name}`}
                        onClick={() => {
                          dispatch(detailsProduct(product.id));
                          dispatch(getNextProduct());
                          dispatch(getPrevProduct());
                        }}
                      >
                        <img
                          src={product.img}
                          alt=""
                          className="product-image-photo img-fluid w-100"
                        />
                      </Link>
                      {product.discount != null ? (
                        <div className="product-labels">
                          -{product.discount}%
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="product-item-inner">
                        <a href="" className="towishlist">
                          <SlHeart />
                        </a>
                        <a href="" className="tocompare actions-secondary">
                          <AiFillSignal />
                        </a>
                        <Link
                          to={`/product?name=${product.name}`}
                          className="tocart btn actions-secondary"
                          onClick={() => {
                            dispatch(detailsProduct(product.id));
                            dispatch(getNextProduct());
                            dispatch(getPrevProduct());
                          }}
                        >
                          <BiShoppingBag />
                        </Link>
                      </div>
                      <Link
                        to={`?product%name=${product.name}`}
                        onClick={() => {
                          dispatch(setLoading(true));
                          setTimeout(() => {
                            dispatch(setLoading(false));
                            dispatch(detailsProduct(product.id));
                            dispatch(toggleBox());
                          }, 2000);
                        }}
                        className="btn weltpixel-quickview"
                      >
                        <span>Quickview</span>
                      </Link>
                    </div>
                    <div className="product-item-details">
                      <strong className="product-item-name">
                        <Link
                          to={`/product?name=${product.name}`}
                          onClick={() => {
                            dispatch(detailsProduct(product.id));
                            dispatch(getNextProduct());
                            dispatch(getPrevProduct());
                          }}
                          className="product-item-link"
                        >
                          {product.name}
                        </Link>
                      </strong>
                      <div className="product-reviews-summary">
                        <div className="rating-summary">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                      <div className="product-item-price">
                        {product.discount == null ? (
                          <span className="product-price">
                            ${product.price}.00
                          </span>
                        ) : (
                          <Fragment>
                            <del className="old-price">${product.price}.00</del>
                            <span className="product-price" key={product.id}>
                              $
                              {product.price -
                                (
                                  (product.discount / 100) *
                                  product.price
                                ).toFixed(0)}
                              .00
                            </span>
                          </Fragment>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="porto-separato" style={{ margin: "44px 0 66px" }}>
            <hr
              style={{
                backgroundColor: "#e7e7e7",
                height: "1px",
                margin: "0 auto",
              }}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
