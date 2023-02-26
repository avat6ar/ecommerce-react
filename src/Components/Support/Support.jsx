import React from "react";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SlCreditCard } from "react-icons/sl";
import { RiCarLine } from "react-icons/ri";
import { HiArrowUturnLeft } from "react-icons/hi2";
import "./Support.css"

const Support = () => {
  return (
    <div>
      <div className="container" style={{paddingBottom: "30px"}}>
        <div className="row mb-4">
          <div className="col-sm-6 col-md-3">
            <div className="porto-sicon-box px-lg-4 px-xl-5 text-center">
              <div
                className="porto-just-icon-wrapper"
                style={{ textAlign: "center", marginBottom: "2rem" }}
              >
                <TfiHeadphoneAlt style={{transform: "rotatey(180deg)"}} />
              </div>
              <div
                className="porto-sicon-header"
                style={{ marginBottom: "1rem" }}
              >
                <h3
                  className="porto-sicon-title mt-0"
                  style={{
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    lineHeight: 1.4,
                    margin: "3px 0",
                  }}
                >
                  CUSTOMER SUPPORT
                </h3>
                <p
                  className="m-0"
                  style={{
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    lineHeight: 1,
                  }}
                >
                  Need Assistence?
                </p>
              </div>
              <div
                className=""
                style={{ fontSize: "0.8125rem", lineHeight: "1.5rem" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec vestibulum magna, et dapib.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="porto-sicon-box px-lg-4 px-xl-5 text-center">
              <div
                className="porto-just-icon-wrapper"
                style={{ textAlign: "center", marginBottom: "2rem" }}
              >
                <SlCreditCard />
              </div>
              <div
                className="porto-sicon-header"
                style={{ marginBottom: "1rem" }}
              >
                <h3
                  className="porto-sicon-title mt-0"
                  style={{
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    lineHeight: 1.4,
                    margin: "3px 0",
                  }}
                >
                  SECURED PAYMENT
                </h3>
                <p
                  className="m-0"
                  style={{
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    lineHeight: 1,
                  }}
                >
                  Safe &amp; Fast
                </p>
              </div>
              <div
                className=""
                style={{ fontSize: "0.8125rem", lineHeight: "1.5rem" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec vestibulum magna, et dapib.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="porto-sicon-box px-lg-4 px-xl-5 text-center">
              <div
                className="porto-just-icon-wrapper"
                style={{ textAlign: "center", marginBottom: "2rem" }}
              >
                <HiArrowUturnLeft />
              </div>
              <div
                className="porto-sicon-header"
                style={{ marginBottom: "1rem" }}
              >
                <h3
                  className="porto-sicon-title mt-0"
                  style={{
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    lineHeight: 1.4,
                    margin: "3px 0",
                  }}
                >
                  FREE RETURNS
                </h3>
                <p
                  className="m-0"
                  style={{
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    lineHeight: 1,
                  }}
                >
                  Easy &amp; Free
                </p>
              </div>
              <div
                className=""
                style={{ fontSize: "0.8125rem", lineHeight: "1.5rem" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec vestibulum magna, et dapib.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="porto-sicon-box px-lg-4 px-xl-5 text-center">
              <div
                className="porto-just-icon-wrapper"
                style={{ textAlign: "center", marginBottom: "2rem" }}
              >
                <RiCarLine />
              </div>
              <div
                className="porto-sicon-header"
                style={{ marginBottom: "1rem" }}
              >
                <h3
                  className="porto-sicon-title mt-0"
                  style={{
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    lineHeight: 1.4,
                    margin: "3px 0",
                  }}
                >
                  FREE SHIPPING
                </h3>
                <p
                  className="m-0"
                  style={{
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    lineHeight: 1,
                  }}
                >
                  Orders Over $99
                </p>
              </div>
              <div
                className=""
                style={{ fontSize: "0.8125rem", lineHeight: "1.5rem" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec vestibulum magna, et dapib.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
