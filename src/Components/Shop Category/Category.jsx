import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Keyboard } from "swiper";
import "./Category.css";
import { useSelector } from "react-redux";

const Category = () => {
  const CategoryApi = useSelector((state) => state.data.categoryData);
  return (
    <div className="home-category">
      <div
        className="container"
        style={{ paddingTop: "65px", paddingBottom: "30px" }}
      >
        <div className="porto-products text-center">
          <h2 className="slider-title mb-4">
            <span>SHOP BY CATEGORY</span>
          </h2>
          <div className="slider-wrapper">
            <Swiper
              loop={true}
              freeMode={true}
              grabCursor={true}
              modules={[FreeMode, Navigation, Keyboard]}
              keyboard={true}
              navigation
              breakpoints={{
                600: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1280: {
                  slidesPerView: 6,
                  spaceBetween: 25,
                },
              }}
            >
              {CategoryApi.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="product-categor">
                    <span className="thumb-info">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="img-fluid"
                      />
                    </span>
                    <span className="thumb-info-title">
                      <h3 className="sub-title thumb-info-inner">
                        {product.name}
                      </h3>
                      <span className="thumb-info-type">
                        <mark className="count">{product.count} </mark>
                        Prodeucts
                      </span>
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
