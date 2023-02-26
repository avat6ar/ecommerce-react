import React, { Fragment } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectFade } from "swiper/core";
import { useDispatch } from "react-redux";
import "./HomeSlider.css";

SwiperCore.use([Navigation, EffectFade]);
const HomeSlider = () => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className="home-slider">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop
          navigation
          effect="fade"
        >
          <SwiperSlide>
            <div className="bac-img_1">
              <div className="container h-100">
                <div className="position-relative h-100">
                  <div className="porto-ibanner-desc">
                    <div className="porto-ibanner-layer_1">
                      <h2 style={{ fontSize: "2.5em" }}>
                        Winter Fashion Trends
                      </h2>
                      <h3
                        style={{ fontSize: "2.5em" }}
                        className="text-uppercase"
                      >
                        get up to 30% off
                      </h3>
                      <h3 className="mb-4" style={{ fontSize: "5.625em" }}>
                        on Jackets
                      </h3>
                      <h5
                        style={{ fontSize: "1.125em" }}
                        className="me-3 float-start text-uppercase"
                      >
                        Starting At
                      </h5>
                      <h5
                        style={{ fontSize: "2.25em" }}
                        className="mb-4 coupon-sale-text"
                      >
                        <sup>$</sup>199<sup>99</sup>
                      </h5>
                      <div className="btn-container mb-0 mt-2 text-left">
                        <button className="btn btn-modern">Shop Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bac-img_2">
              <div className="container h-100">
                <div className="position-relative h-100">
                  <div className="porto-ibanner-desc">
                    <div className="porto-ibanner-layer_2">
                      <h2
                        className=""
                        style={{ fontSize: "3.4375em", lineHeight: 1 }}
                      >
                        New Season Hats
                      </h2>
                      <h3
                        className="text-uppercase mb-0 vertical-font"
                        style={{ fontSize: "7em", lineHeight: 1 }}
                      >
                        <small>UP TO</small>
                        20% OFF
                      </h3>
                      <div className="porto-separator">
                        <div className="divider"></div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="vc_column-inner">
                            <h5
                              style={{ fontSize: "1.25em" }}
                              className="d-inline-block me-5"
                            >
                              Starting At $<em>19</em>
                              99
                            </h5>
                            <div className="btn-container d-inline-block">
                              <div className="btn btn-modern">
                                Shop Now
                                <HiOutlineArrowNarrowRight />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Fragment>
  );
};

export default HomeSlider;
