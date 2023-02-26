import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiSlider } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { AiFillSignal } from "react-icons/ai";
import { SlHeart } from "react-icons/sl";
import { CgCheck } from "react-icons/cg";
import { BiShoppingBag } from "react-icons/bi";
import $ from "jquery";
import "./Categories.css";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import {
  valueSorting,
  filterByPrice,
  setDirectioneSort,
  sortingBySelect,
  filterBySize,
  detailsProduct,
  getNextProduct,
  getPrevProduct,
  AddToCart,
  filterByColor,
  setColor,
  setSize,
  filterClear,
  setLoading,
  toggleBox,
} from "../redux/CounterState";

const Categories = () => {
  const { categories } = useSelector((state) => state.data);
  const { featured } = useSelector((state) => state.data);
  const { sortDirectione } = useSelector((state) => state.data);
  const { arrShopping } = useSelector((state) => state.data);
  const { valuePrice } = useSelector((state) => state.data);
  const { valueSize } = useSelector((state) => state.data);
  const { valueColor } = useSelector((state) => state.data);
  const { box } = useSelector((state) => state.data);
  const featured1 = featured.filter((item) => item.id < 18);
  const featured2 = featured.filter((item) => item.id > 17);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [sortName, setSortName] = useState("position");
  const [itemsList, setItemsList] = useState(false);
  const [toolbar, setToolbar] = useState(false);
  const [sliderOpen, setSliderOpen] = useState(false);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFristPost = indexOfLastPost - postsPerPage;
  const currentPosts = categories.slice(indexOfFristPost, indexOfLastPost);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(categories.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    $(".app").addClass("header3");
  });
  const filterColor = [
    {
      color: "#4a4a4a",
      name: "Black",
    },
    {
      color: "#0088cc",
      name: "Blue",
    },
    {
      color: "#946666",
      name: "Brown",
    },
    {
      color: "#8f8f8f",
      name: "Gray",
    },
    {
      color: "#9de675",
      name: "Green",
    },
    {
      color: "#e04a4a",
      name: "Red",
    },
    {
      color: "#f5df70",
      name: "Yellow",
    },
  ];
  const filterSize = ["55 cm", "XS", "S", "M", "L", "XL"];
  const countProductShow = itemsList ? [5, 10, 15, 20, 25] : [10, 20, 30];
  const onChange = (change) => {
    setTimeout(() => {
      dispatch(setLoading(true));
    }, 500);
    setTimeout(() => {
      dispatch(setLoading(false));
      dispatch(filterByPrice(change));
    }, 2000);
  };
  const removeActiveSize = () => {
    const reamoveSelected = document.querySelectorAll(
      ".swatch-attribute-options .text"
    );
    reamoveSelected.forEach((item) => item.classList.remove("selected"));
  };
  const removeActiveColor = () => {
    const reamoveSelected = document.querySelectorAll(
      ".swatch-attribute-options .color"
    );
    reamoveSelected.forEach((item) => item.classList.remove("selected"));
  };
  const paginate = (pageNumber) => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
      setCurrentPage(pageNumber);
    }, 2000);
  };
  $(window).scroll(() => {
    let windowScroll = $(window).scrollTop();
    if (windowScroll > 400) {
      setToolbar(true);
    } else {
      setToolbar(false);
    }
  });
  return (
    <Fragment>
      <div className="page-products">
        <div className="breadcrumbs">
          <ul className="items">
            <li className="item home">
              <Link to="/" title="Go to Home Page">
                Home
              </Link>
              <MdKeyboardArrowRight />
            </li>
            <li>
              <strong>Categories</strong>
            </li>
          </ul>
        </div>
        <div className="page-main">
          <div className="columns d-flex">
            <div
              className={
                sliderOpen
                  ? "sidebar sidebar-main mobile-sidebar sidebar-opened"
                  : "sidebar sidebar-main mobile-sidebar"
              }
            >
              <div className="sidebar-content sticky-active sticky-absolute sticky-transition">
                <div className="block-category-list">
                  <div className="block-title">
                    <strong>Categories</strong>
                  </div>
                  <div className="block-content">
                    <ol className="items">
                      <li className="item">
                        <a href="">Electronics</a>
                      </li>
                      <li className="item">
                        <a href="">Accessories</a>
                      </li>
                      <li className="item">
                        <a href="">Fashion</a>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="layered-filter-block-container">
                  <div className="filter">
                    <div className="block-content filter-content">
                      {arrShopping.length != 0 && (
                        <Fragment>
                          <div className="filter-current">
                            <strong className="block-subtitle filter-current-subtitle">
                              Now Shopping by
                            </strong>
                            <ol className="items">
                              {arrShopping.includes("price") && (
                                <li className="item">
                                  <span className="filter-label">Price: </span>
                                  <span className="filter-value">
                                    ${valuePrice[0]}.00 - ${valuePrice[1]}.00
                                  </span>
                                  <a
                                    onClick={() => {
                                      dispatch(setLoading(true));
                                      setTimeout(() => {
                                        dispatch(setLoading(false));
                                        dispatch(filterByColor(valueColor));
                                        dispatch(filterBySize(valueSize));
                                        dispatch(filterByPrice("All"));
                                      }, 2000);
                                    }}
                                    className="action remove"
                                    title={`Remove Price $${valuePrice[0]}.00 - $${valuePrice[1]}.00`}
                                  >
                                    <IoCloseOutline />
                                  </a>
                                </li>
                              )}
                              {arrShopping.includes("size") && (
                                <li className="item">
                                  <span className="filter-label">Size: </span>
                                  <span className="filter-value">
                                    {valueSize}
                                  </span>
                                  <a
                                    onClick={() => {
                                      dispatch(setLoading(true));
                                      removeActiveSize();
                                      setTimeout(() => {
                                        dispatch(setLoading(false));
                                        dispatch(filterBySize("All"));
                                        dispatch(
                                          filterByPrice(
                                            arrShopping.includes("price")
                                              ? valuePrice
                                              : "All"
                                          )
                                        );
                                        dispatch(filterByColor(valueColor));
                                      }, 2000);
                                    }}
                                    className="action remove"
                                    title={`Remove Size ${valueSize}`}
                                  >
                                    <IoCloseOutline />
                                  </a>
                                </li>
                              )}
                              {arrShopping.includes("color") && (
                                <li className="item">
                                  <span className="filter-label">Color: </span>
                                  <span className="filter-value">
                                    {valueColor}
                                  </span>
                                  <a
                                    onClick={() => {
                                      dispatch(setLoading(true));
                                      removeActiveColor();
                                      setTimeout(() => {
                                        dispatch(setLoading(false));
                                        dispatch(filterByColor("All"));
                                        dispatch(
                                          filterByPrice(
                                            arrShopping.includes("price")
                                              ? valuePrice
                                              : "All"
                                          )
                                        );
                                        dispatch(filterBySize(valueSize));
                                      }, 2000);
                                    }}
                                    className="action remove"
                                    title={`Remove Color ${valueColor}`}
                                  >
                                    <IoCloseOutline />
                                  </a>
                                </li>
                              )}
                            </ol>
                          </div>
                          <div className="block-actions filter-actions">
                            <a
                              onClick={() => {
                                dispatch(setLoading(true));
                                setTimeout(() => {
                                  dispatch(setLoading(false));
                                  dispatch(filterClear());
                                }, 1000);
                              }}
                              className="action clear filter-clear"
                            >
                              <span>Clear All</span>
                            </a>
                          </div>
                        </Fragment>
                      )}
                      <strong className="block-subtitle filter-subtitle">
                        Shopping Options
                      </strong>
                      <div className="filter-options">
                        <div className="filter-options-item active">
                          <div className="filter-options-title">
                            Price
                            <span
                              className="toggle"
                              onClick={(e) => {
                                e.target.classList.toggle("active");
                                $(".filter-price").slideToggle(200);
                              }}
                            ></span>
                          </div>
                          <div className="filter-options-content filter-price">
                            <ol className="items">
                              <li className="item">
                                <Slider
                                  onChange={onChange}
                                  min={39}
                                  max={299}
                                  range
                                  defaultValue={[39, 299]}
                                />
                                <div id="ln_slider_text_price">
                                  ${valuePrice[0]}.00 - ${valuePrice[1]}.00
                                </div>
                              </li>
                            </ol>
                          </div>
                        </div>
                        <div className="filter-options-item active">
                          <div className="filter-options-title">
                            color
                            <span
                              className="toggle"
                              onClick={(e) => {
                                e.target.classList.toggle("active");
                                $(".filter-color").slideToggle(200);
                              }}
                            ></span>
                          </div>
                          <div className="filter-options-content filter-color">
                            <div className="swatch-attribute swatch-layered color">
                              <div className="swatch-attribute-options clearfix">
                                {filterColor.map((color, index) => (
                                  <a
                                    onClick={(e) => {
                                      removeActiveColor();
                                      e.target.classList.toggle("selected");
                                      dispatch(setLoading(true));
                                      setTimeout(() => {
                                        dispatch(setLoading(false));
                                        dispatch(filterByColor(color.name));
                                      }, 2000);
                                    }}
                                    className="swatch-option-link-layered"
                                    key={index}
                                  >
                                    <div
                                      className="swatch-option color"
                                      style={{
                                        background: `${color.color} no-repeat`,
                                      }}
                                    >
                                      <CgCheck className="d-none" />
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="filter-options-item active">
                          <div className="filter-options-title">
                            Size
                            <span
                              className="toggle"
                              onClick={(e) => {
                                e.target.classList.toggle("active");
                                $(".filter-size").slideToggle(200);
                              }}
                            ></span>
                          </div>
                          <div className="filter-options-content filter-size">
                            <div className="swatch-attribute swatch-layered size">
                              <div className="swatch-attribute-options clearfix">
                                {filterSize.map((size, index) => (
                                  <a
                                    className="swatch-option-link-layered"
                                    key={index}
                                    onClick={(e) => {
                                      removeActiveSize();
                                      e.target.classList.toggle("selected");
                                      dispatch(setLoading(true));
                                      setTimeout(() => {
                                        dispatch(setLoading(false));
                                        dispatch(filterBySize(size));
                                      }, 2000);
                                    }}
                                  >
                                    <div className="swatch-option text">
                                      {size}
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="side-custom-block">
                  <div className="custom-block">
                    <h2 className="sidebar-title">Featured</h2>
                    <div className="block-content">
                      <div className="sidebar-filterproducts">
                        <div className="featured_product">
                          <div className="products wrapper grid small-list products-grid">
                            <div className="filterproducts products list items product-items owl-carousel mb-0 show-nav-title owl-loaded owl-drag">
                              <Swiper
                                modules={Navigation}
                                navigation={true}
                                slidesPerView={1}
                                spaceBetween={10}
                              >
                                <SwiperSlide>
                                  {featured1.map((item) => (
                                    <div className="item" key={item.id}>
                                      <div className="product product-item">
                                        <div className="product-item-info">
                                          <a
                                            href=""
                                            className="product photo product-item-photo"
                                          >
                                            <img
                                              src={item.img}
                                              className="product-image-photo default_image porto-lazyload porto-lazyload-loaded"
                                              alt={item.name}
                                            />
                                          </a>
                                          <div className="product details product-item-details">
                                            <a href="">{item.name}</a>
                                            <div className="product-reviews-summary short">
                                              <div className="rating-summary">
                                                <div className="rating-result">
                                                  <AiFillStar />
                                                  <AiFillStar />
                                                  <AiFillStar />
                                                  <AiFillStar />
                                                  <AiFillStar />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="price-box price-final_price">
                                              <span className="price">
                                                ${item.price}.00
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </SwiperSlide>
                                <SwiperSlide>
                                  {featured2.map((item) => (
                                    <div className="item" key={item.id}>
                                      <div className="product product-item">
                                        <div className="product-item-info">
                                          <a
                                            href=""
                                            className="product photo product-item-photo"
                                          >
                                            <img
                                              src={item.img}
                                              className="product-image-photo default_image porto-lazyload porto-lazyload-loaded"
                                              alt={item.name}
                                            />
                                          </a>
                                          <div className="product details product-item-details">
                                            <a href="">{item.name}</a>
                                            <div className="product-reviews-summary short">
                                              <div className="rating-summary">
                                                <div className="rating-result">
                                                  <AiFillStar />
                                                  <AiFillStar />
                                                  <AiFillStar />
                                                  <AiFillStar />
                                                  <AiFillStar />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="price-box price-final_price">
                                              <span className="price">
                                                ${item.price}.00
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </SwiperSlide>
                              </Swiper>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="custom-block">
                    <h2>Custom HTML Block</h2>
                    <div className="block-content">
                      <h5
                        style={{
                          marginTop: "-10px",
                          marginBottom: "20px",
                          color: "#777",
                        }}
                      >
                        This is a custom sub-title.
                      </h5>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras non placerat mi. Etiam non tellus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column main">
              <div className="category-description">
                <div className="porto-block">
                  <div className="row shop-category-banner m-b-lg no-padding">
                    <div className="z-index-1 vc_column_container col-md-12">
                      <div className="wpb_wrapper vc_column-inner">
                        <h2
                          style={{
                            fontSize: "2.1875rem",
                            color: "#777777",
                            lineHeight: 1,
                            fontWeight: 400,
                          }}
                          className="vc_custom_heading custom-font4 mb-3 ls-86 align-left"
                        >
                          Winter Fashion Trends
                        </h2>
                        <h3
                          style={{ fontSize: "2.1875rem", lineHeight: 1 }}
                          className="vc_custom_heading mb-4 align-left text-uppercase"
                        >
                          up to 30% off on jackets
                        </h3>
                        <h5
                          style={{ fontSize: "1.125em" }}
                          className="vc_custom_heading d-inline-block me-3 align-left text-uppercase"
                        >
                          Starting At
                        </h5>
                        <h5
                          style={{ fontSize: "2.25em" }}
                          className="vc_custom_heading coupon-sale-text d-inline-block me-4 me-xl-5 align-left"
                        >
                          <sup>$</sup>199<sup>99</sup>
                        </h5>
                        <div className="btn-container mb-2 d-inline-block">
                          <button className="btn btn-modern">Shop Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  toolbar
                    ? "toolbar toolbar-products sticky"
                    : "toolbar toolbar-products"
                }
              >
                <a
                  className="porto-product-filters-toggle sidebar-toggle d-inline-flex d-lg-none"
                  onClick={() => setSliderOpen(true)}
                >
                  <BiSlider />
                  <span>Filter</span>
                </a>
                <div className="toolbar-sorter sorter">
                  <label htmlFor="sorter" className="sorter-label">
                    Sort By:
                  </label>
                  <select
                    name="sorter"
                    id="sorter"
                    className="sorter-options"
                    onChange={(e) => {
                      dispatch(setLoading(true));
                      setSortName(e.target.value);
                      setTimeout(() => {
                        dispatch(setLoading(false));
                        dispatch(valueSorting(e.target.value));
                        dispatch(sortingBySelect());
                      }, 2000);
                    }}
                    defaultValue={sortName}
                  >
                    <option value="position">position</option>
                    <option value="name">Product Name </option>
                    <option value="price">price</option>
                  </select>
                  <a
                    onClick={() => {
                      dispatch(setLoading(true));
                      setTimeout(() => {
                        dispatch(setLoading(false));
                        dispatch(sortingBySelect());
                        dispatch(setDirectioneSort());
                      }, 2000);
                    }}
                    className={
                      sortDirectione == "up"
                        ? "action sorter-action sort-asc"
                        : "action sorter-action sort-asc active"
                    }
                  >
                    <FaLongArrowAltUp />
                  </a>
                </div>
                <div className="pages">
                  <ul className="items pages-items">
                    {currentPage > 1 && (
                      <li
                        className="item pages-item-previous"
                        onClick={() => paginate(currentPage - 1)}
                      >
                        <strong className="action  previous" title="Previous">
                          <IoIosArrowBack />
                        </strong>
                      </li>
                    )}
                    {pageNumbers.length != 1 &&
                      pageNumbers.map((number) => (
                        <li
                          className="item current"
                          key={number}
                          onClick={() => paginate(number)}
                        >
                          <strong className="page">
                            <span>{number}</span>
                          </strong>
                        </li>
                      ))}
                    {currentPage != pageNumbers.length && (
                      <li
                        className="item pages-item-next"
                        onClick={() => paginate(currentPage + 1)}
                      >
                        <strong className="action next" title="Next">
                          <IoIosArrowForward />
                        </strong>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="field limiter">
                  <label htmlFor="limiter" className="label">
                    <span>Show:</span>
                  </label>
                  <div className="control">
                    <select
                      name="limiter"
                      id="limiter"
                      className="limiter-options"
                      onChange={(e) => {
                        dispatch(setLoading(true));
                        setTimeout(() => {
                          dispatch(setLoading(false));
                          setPostsPerPage(Number(e.target.value));
                        }, 1500);
                      }}
                      defaultValue={postsPerPage}
                    >
                      {countProductShow.map((item, index) => (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="modes">
                  <strong
                    className="modes-mode mode-grid"
                    title="Grid"
                    onClick={() => setItemsList(false)}
                  >
                    <BsFillGrid3X3GapFill />
                  </strong>
                  <strong
                    className="modes-mode active mode-list"
                    title="List"
                    onClick={() => setItemsList(true)}
                  >
                    <FaThList />
                  </strong>
                </div>
              </div>
              {itemsList ? (
                <div className="products wrapper list  products-list">
                  <ol className="filterproducts products list items product-items">
                    {currentPosts.map((item) => (
                      <li className="item product product-item" key={item.id}>
                        <div className="product-item-info type0">
                          <div className="product photo product-item-photo">
                            <Link
                              to={`/product?name=${item.name}`}
                              onClick={() => {
                                dispatch(detailsProduct(item.id));
                                dispatch(getNextProduct());
                                dispatch(getPrevProduct());
                              }}
                            >
                              <img
                                src={item.img}
                                alt={item.name}
                                className="product-image-photo default_image porto-lazyload porto-lazyload-loaded"
                              />
                            </Link>
                            {item.discount && (
                              <div className="product-labels">
                                <div className="product-label sale-label">
                                  -{item.discount}%
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="product details product-item-details">
                            <strong className="product name product-item-name">
                              <Link
                                to={`/product?name=${item.name}`}
                                onClick={() => {
                                  dispatch(detailsProduct(item.id));
                                  dispatch(getNextProduct(item.id));
                                  dispatch(getPrevProduct(item.id));
                                }}
                                className="product-item-link"
                              >
                                {item.name}
                              </Link>
                            </strong>
                            <div className="product-reviews-summary short">
                              <div className="rating-summary">
                                <div className="rating-result">
                                  <AiFillStar />
                                  <AiFillStar />
                                  <AiFillStar />
                                  <AiFillStar />
                                  <AiFillStar />
                                </div>
                              </div>
                            </div>
                            <div className="product description product-item-description">
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non.
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur.
                              <Link
                                to={`/product?name=${item.name}`}
                                onClick={() => {
                                  dispatch(detailsProduct(item.id));
                                  dispatch(getNextProduct());
                                  dispatch(getPrevProduct());
                                }}
                                title={item.name}
                                className="action more"
                              >
                                Learn More
                              </Link>
                            </div>
                            <div className="price-box price-final_price">
                              {item.discount ? (
                                <div className="price-box price-final_price">
                                  <del className="old-price">
                                    <span className="price">
                                      ${item.price}.00
                                    </span>
                                  </del>
                                  <span className="special-price">
                                    <span className="price">
                                      $
                                      {item.price -
                                        (
                                          (item.discount / 100) *
                                          item.price
                                        ).toFixed(0)}
                                      .00
                                    </span>
                                  </span>
                                </div>
                              ) : (
                                <span className="normal-price">
                                  <span className="price">
                                    ${item.price}.00
                                  </span>
                                </span>
                              )}
                            </div>
                            <div className="product-item-inner">
                              <div className="product actions product-item-actions">
                                <div className="actions-primary">
                                  <button
                                    onClick={() => {
                                      dispatch(setLoading(true));
                                      setTimeout(() => {
                                        dispatch(setLoading(false));
                                        dispatch(setColor());
                                        dispatch(setSize());
                                        dispatch(
                                          AddToCart({
                                            id: item.id,
                                            price: item.discount
                                              ? item.price -
                                                (
                                                  (item.discount / 100) *
                                                  item.price
                                                ).toFixed(0)
                                              : item.price,
                                            img: item.img,
                                            name: item.name,
                                          })
                                        );
                                      }, 2000);
                                    }}
                                    className="tocart btn"
                                    title="Add to Cart"
                                  >
                                    <HiOutlineShoppingBag />
                                    <span>Add to Cart</span>
                                  </button>
                                </div>
                                <a
                                  href="#"
                                  className="action towishlist actions-secondary"
                                >
                                  <SlHeart />
                                </a>
                                <a
                                  href="/"
                                  className="action tocompare actions-secondary"
                                >
                                  <AiFillSignal />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : (
                <div className="products wrapper grid columns5 products-grid">
                  <ol className="filterproducts products list items product-items row">
                    {currentPosts.map((item, index) => (
                      <li className="item product product-item" key={index}>
                        <div className="product-item-info type3">
                          <div className="product photo product-item-photo">
                            <Link
                              to={`/product?name=${item.name}`}
                              onClick={() => {
                                dispatch(detailsProduct(item.id));
                                dispatch(getNextProduct());
                                dispatch(getPrevProduct());
                              }}
                            >
                              <img
                                src={item.img}
                                className="product-image-photo default_image porto-lazyload porto-lazyload-loaded"
                                alt=""
                              />
                            </Link>
                            <div className="product-item-inner">
                              <div className="product actions product-item-actions">
                                <div className="actions-primary">
                                  <a
                                    href=""
                                    className="action towishlist actions-secondary"
                                  >
                                    <SlHeart />
                                  </a>
                                  <a
                                    href=""
                                    className="action tocompare actions-secondary"
                                  >
                                    <AiFillSignal />
                                  </a>
                                  <Link
                                    to={`/product?name=${item.name}`}
                                    className="action tocart primary"
                                    onClick={() => {
                                      dispatch(detailsProduct(item.id));
                                      dispatch(getNextProduct());
                                      dispatch(getPrevProduct());
                                    }}
                                  >
                                    <BiShoppingBag />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <Link
                              to={`?product%name=${item.name}`}
                              onClick={() => {
                                dispatch(detailsProduct(item.id));
                                dispatch(toggleBox());
                              }}
                              className="weltpixel-quickview weltpixel_quickview_button_v2"
                            >
                              <span>Quickview</span>
                            </Link>
                          </div>
                          <div className="product details product-item-details">
                            <strong className="product name product-item-name">
                              <Link
                                to={`/product?name=${item.name}`}
                                onClick={() => {
                                  dispatch(detailsProduct(item.id));
                                  dispatch(getNextProduct());
                                  dispatch(getPrevProduct());
                                }}
                                className="product-item-link"
                              >
                                {item.name}
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
                            <div className="price-box price-final_price">
                              {item.discount == null ? (
                                <span className="product-price">
                                  <span className="price">
                                    ${item.price}.00
                                  </span>
                                </span>
                              ) : (
                                <Fragment>
                                  <del className="old-price">
                                    <span className="price">
                                      ${item.price}.00
                                    </span>
                                  </del>
                                  <span className="product-price" key={item.id}>
                                    <span className="price">
                                      $
                                      {item.price -
                                        (
                                          (item.discount / 100) *
                                          item.price
                                        ).toFixed(0)}
                                      .00
                                    </span>
                                  </span>
                                </Fragment>
                              )}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              <div className="toolbar toolbar-products">
                <div className="toolbar-sorter sorter">
                  <label htmlFor="sorter" className="sorter-label">
                    Sort By:
                  </label>
                  <select
                    name="sorter"
                    id="sorter"
                    className="sorter-options"
                    onChange={(e) => {
                      dispatch(setLoading(true));
                      setSortName(e.target.value);
                      setTimeout(() => {
                        dispatch(setLoading(false));
                        dispatch(valueSorting(e.target.value));
                        dispatch(sortingBySelect());
                      }, 2000);
                    }}
                    defaultValue={sortName}
                  >
                    <option value="position">position</option>
                    <option value="name">Product Name </option>
                    <option value="price">price</option>
                  </select>
                  <a href="#" className="action sorter-action sort-asc">
                    <FaLongArrowAltUp />
                  </a>
                </div>
                <div className="pages">
                  <ul className="items pages-items">
                    {currentPage > 1 && (
                      <li
                        className="item pages-item-previous"
                        onClick={() => paginate(currentPage - 1)}
                      >
                        <strong className="action  previous" title="Previous">
                          <IoIosArrowBack />
                        </strong>
                      </li>
                    )}
                    {pageNumbers.length != 1 &&
                      pageNumbers.map((number) => (
                        <li
                          className="item current"
                          key={number}
                          onClick={() => paginate(number)}
                        >
                          <strong className="page">
                            <span>{number}</span>
                          </strong>
                        </li>
                      ))}
                    {currentPage != pageNumbers.length && (
                      <li
                        className="item pages-item-next"
                        onClick={() => paginate(currentPage + 1)}
                      >
                        <strong className="action next" title="Next">
                          <IoIosArrowForward />
                        </strong>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="field limiter">
                  <label htmlFor="limiter" className="label">
                    <span>Show:</span>
                  </label>
                  <div className="control">
                    <select
                      name="limiter"
                      id="limiter"
                      className="limiter-options"
                      onChange={(e) => {
                        dispatch(setLoading(true));
                        setTimeout(() => {
                          dispatch(setLoading(false));
                          setPostsPerPage(Number(e.target.value));
                        }, 1500);
                      }}
                      defaultValue={postsPerPage}
                    >
                      {countProductShow.map((item, index) => (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="modes">
                  <a href="" className="modes-mode mode-grid" title="Grid">
                    <BsFillGrid3X3GapFill />
                  </a>
                  <strong className="modes-mode active mode-list" title="List">
                    <FaThList />
                  </strong>
                </div>
              </div>
            </div>
            {sliderOpen && (
              <div
                className="sidebar-overlay active d-none"
                onClick={() => setSliderOpen(false)}
              ></div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Categories;
