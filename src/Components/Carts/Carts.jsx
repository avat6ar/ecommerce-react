import React, { useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import { BsXLg } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { ImArrowRight2 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";
import "./Carts.css";
import { Link } from "react-router-dom";
import { detailsProduct, getNextProduct, getPrevProduct, removeCart, setLoading } from "../redux/CounterState";

const Carts = () => {
  useEffect(() => {
    $(".app").addClass("header3");
  });
  const { addedItem } = useSelector((state) => state.data);
  const [estimate, setEstimate] = useState(false);
  const dispatch = useDispatch();
  const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands",
  ];
  const stateProvince = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Federated States of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Island",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  const totalPrice = Number(localStorage.getItem("totalPrice"));
  const discount = (totalPrice / 100) * 20;
  return (
    <div className="carts">
      <div className="page-main">
        <div className="page-title-wrapper">
          <h1 className="page-title">
            <span>Shopping Cart</span>
          </h1>
        </div>
        <div className="columns">
          <div className="column main">
            {addedItem.length == 0 ? (
              <div className="cart-empty text-center">
                <HiOutlineShoppingBag />
                <p className="px-3 py-2 cart-empty">
                  You have no items in your shopping cart.
                </p>
                <p className="return-to-shop">
                  <Link to="/" className="action btn-go-shop">
                    Continue Shopping
                  </Link>
                </p>
              </div>
            ) : (
              <div className="cart-container d-flex">
                <div className="form form-cart">
                  <div className="cart table-wrapper">
                    <table className="cart items data table">
                      <thead>
                        <tr>
                          <th className="col item" scope="col">
                            <span>item</span>
                          </th>
                          <th className="col price" scope="col">
                            <span>Price</span>
                          </th>
                          <th className="col qty" scope="col">
                            <span>Qty</span>
                          </th>
                          <th className="col subtotal" scope="col">
                            <span>Subtotal</span>
                          </th>
                        </tr>
                      </thead>
                      {addedItem.map((item, index) => (
                        <tbody className="cart item" key={index}>
                          <tr className="item-info">
                            <td className="col item">
                              <a
                                to={`/product?name=${item.name}`}
                                onClick={() => {
                                  dispatch(detailsProduct(item.id));
                                  dispatch(getNextProduct());
                                  dispatch(getPrevProduct());
                                }}
                                title={item.name}
                                className="product-item-photo"
                              >
                                <span className="product-image-container">
                                  <span
                                    className="product-image-wrapper"
                                    style={{ width: "165px" }}
                                  >
                                    <img
                                      src={item.img}
                                      alt=""
                                      className="product-image-photo"
                                    />
                                  </span>
                                </span>
                              </a>
                              <div className="product-item-details">
                                <strong className="product-item-name">
                                  <Link
                                    to={`/product?name=${item.name}`}
                                    onClick={() => {
                                      dispatch(detailsProduct(item.id));
                                      dispatch(getNextProduct());
                                      dispatch(getPrevProduct());
                                    }}
                                  >
                                    {item.name}
                                  </Link>
                                </strong>
                              </div>
                            </td>
                            <td className="col price" datatype="Price">
                              <span className="price-excluding-tax">
                                <span className="cart-price">
                                  <span className="price">
                                    ${item.price}.00
                                  </span>
                                </span>
                              </span>
                            </td>
                            <td className="col qty" datatype="Qty">
                              <div className="field qty">
                                <div className="control qty">
                                  <input
                                    type="number"
                                    name="qty"
                                    id="qty"
                                    className="input-text qty"
                                    title="Qty"
                                    value={item.qty}
                                    disabled
                                  />
                                </div>
                              </div>
                            </td>
                            <td className="col subtotal" datatype="Subtotal">
                              <span className="price-excluding-tax">
                                <span className="cart-price">
                                  <span className="price">
                                    ${item.price * item.qty}.00
                                  </span>
                                </span>
                              </span>
                            </td>
                          </tr>
                          <tr className="item-actions">
                            <td colSpan="100">
                              <div className="actions-toolbar">
                                <Link
                                  to={`/product?name=${item.name}`}
                                  onClick={() =>
                                    dispatch(detailsProduct(item.id))
                                  }
                                  className="action action-edit"
                                  title="Edit item parameters"
                                >
                                  <GrEdit />
                                </Link>
                                <a
                                  onClick={() => {
                                    dispatch(setLoading(true));
                                    setTimeout(() => {
                                      dispatch(setLoading(false));
                                      dispatch(
                                        removeCart({
                                          id: item.id,
                                          size: item.size,
                                          color: item.nameColor,
                                        })
                                      );
                                    }, 2000);
                                  }}
                                  className="action action-delete"
                                  title="Remove"
                                >
                                  <BsXLg />
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                  <div className="cart-discount d-flex justify-content-between">
                    <div className="block discount">
                      <div className="content">
                        <div className="fieldset coupon">
                          <div className="field">
                            <div className="control">
                              <input
                                type="text"
                                name="coupon_code"
                                id="coupon_code"
                                className="input-text form-control"
                                placeholder="Enter discount code"
                              />
                            </div>
                          </div>
                          <div className="actions-toolbar">
                            <div className="primary">
                              <button className="action apply primary">
                                <span>Apply Discount</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-summary">
                  <strong className="summary title">Summary</strong>
                  <div className="block shipping">
                    <div
                      className="title"
                      onClick={() => {
                        $(".cart-summary .content").slideToggle(300);
                        estimate ? setEstimate(false) : setEstimate(true);
                      }}
                    >
                      <strong>Estimate Shipping and Tax</strong>
                      {estimate ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                    <div className="content" style={{ display: "none" }}>
                      <fieldset className="fieldset estimate">
                        <div className="field">
                          <label htmlFor="country" className="label">
                            <span>Country</span>
                          </label>
                          <div className="control">
                            <select
                              name="country"
                              className="select"
                              id="country"
                              defaultValue="United States"
                            >
                              {countryList.map((item, index) => (
                                <option value={item} key={index}>
                                  {item}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="field">
                          <label htmlFor="state" className="label">
                            <span>State/Province</span>
                          </label>
                          <div className="control">
                            <select
                              name="state"
                              className="select"
                              id="state"
                              defaultValue="Please select a region, state or province."
                            >
                              <option value="">
                                Please select a region, state or province.
                              </option>
                              {stateProvince.map((item, index) => (
                                <option value={item} key={index}>
                                  {item}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="field">
                          <label htmlFor="postcode" className="label">
                            <span>Zip/Postal Code</span>
                          </label>
                          <div className="control">
                            <input
                              type="text"
                              className="input-text"
                              name="postcode"
                              id="postcode"
                            />
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <div className="cart-totals">
                    <div className="table-wrapper">
                      <table className="data table totals">
                        <tbody>
                          <tr className="totals sub">
                            <th scope="row" className="mark">
                              Subtotal
                            </th>
                            <td className="amount">
                              <span className="price">${totalPrice}.00</span>
                            </td>
                          </tr>
                          <tr className="totals">
                            <th colSpan="1" className="mark" scope="row">
                              <span className="title">Discount</span>
                            </th>
                            <td className="amount">
                              <span>
                                <span className="price">-${discount}</span>
                              </span>
                            </td>
                          </tr>
                          <tr className="totals-tax">
                            <th className="mark" colSpan="1" scope="row">
                              Tax
                            </th>
                            <td className="amount">
                              <span className="price">$0.00</span>
                            </td>
                          </tr>
                          <tr className="grand totals">
                            <th className="mark" scope="row">
                              Order Total
                            </th>
                            <td className="amount">
                              <strong>
                                <span className="price">
                                  ${totalPrice - discount}
                                </span>
                              </strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <ul className="checkout methods items checkout-methods-items">
                    <li className="item">
                      <button
                        title="Go to Checkout"
                        className="action primary checkout"
                      >
                        <span>Go to Checkout</span>
                        <ImArrowRight2 />
                      </button>
                    </li>
                    <li className="item">
                      <a href="" className="action multicheckout">
                        <span>Check Out with Multiple Addresses</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
