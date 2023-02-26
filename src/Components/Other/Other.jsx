import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper";
import { AiFillStar } from "react-icons/ai";
import "./Other.css";
import {
  detailsProduct,
  getNextProduct,
  getPrevProduct,
} from "../redux/CounterState";
import { Link } from "react-router-dom";

const Other = () => {
  const { otherProducts } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  return (
    <div className="other-products">
      <div className="container">
        <div className="block upsell porto-products title-border-bottom position-relative">
          <div className="section-title slider-title">
            <strong>We found other products you might like!</strong>
          </div>
          <div className="block-content content">
            <div className="products wrapper products-upsell">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                grabCursor={true}
                modules={[Pagination, ]}
                className="mySwiper"
                breakpoints={{
                  360: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 22,
                  },
                }}
              >
                {otherProducts.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="item product product-item">
                      <div className="product-item-info ">
                        <span
                          className="product photo product-item-photo"
                          onClick={() => {
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                            dispatch(detailsProduct(product.id));
                            dispatch(getNextProduct());
                            dispatch(getPrevProduct());
                          }}
                        >
                          <img
                            src={product.img}
                            className="product-image-photo default_image img-fluid"
                            alt=""
                          />
                        </span>
                        <div className="product details product-item-details">
                          <strong className="product name product-item-name">
                            <span className="product-item-link">
                              {product.name}
                            </span>
                          </strong>
                          <div className="product-reviews-summary short">
                            <div className="rating-summary">
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                            </div>
                          </div>
                          <div className="price-box price-final_price">
                            <span className="price-container price-final_price tax weee">
                              {product.discount ? (
                                <Fragment>
                                  <span className="old-price">
                                    <span className="price">
                                      ${product.price}.00
                                    </span>
                                  </span>
                                  <span className="special-price">
                                    <span className="price">
                                      $
                                      {product.discount
                                        ? product.price -
                                          (
                                            (product.discount / 100) *
                                            product.price
                                          ).toFixed(0)
                                        : product.price}
                                      .00
                                    </span>
                                  </span>
                                </Fragment>
                              ) : (
                                <span className="price">
                                  ${product.price}.00
                                </span>
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
