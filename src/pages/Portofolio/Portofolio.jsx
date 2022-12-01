import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Title from "../../components/Title/Title";
import Pict1 from "../../assets/porto1.png";
import Pict2 from "../../assets/porto2.png";
import Pict3 from "../../assets/porto3.png";
import Pict4 from "../../assets/porto4.png";
import "./Portofolio.css";

function Portofolio() {
  return (
    <>
      <Navbar />
      <Title id="text-center" text="Portofolio" />

      <div className="container">
        <div className="mt-3 row g-4">
          <div className="col-12 col-lg-3 col-md-6">
            <div className="card h-100">
              <img src={Pict1} className="card-img-top" alt="project1" />
              <div className="card-body-porto">
                <h5 className="card-title-porto">TPA 2</h5>
                <p className="mt-2 card-text-porto ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">On July 2022</small>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 col-md-6">
            <div className="card h-100">
              <img src={Pict2} className="card-img-top" alt="project1" />
              <div className="card-body-porto">
                <h5 className="card-title-porto">TPA 3</h5>
                <p className="card-text-porto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">On August 2022</small>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 col-md-6">
            <div className="card h-100">
              <img src={Pict3} className="card-img-top" alt="project1" />
              <div className="card-body-porto">
                <h5 className="card-title-porto">Group Project</h5>
                <p className="card-text-porto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">On August 2022</small>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 col-md-6">
            <div className="card h-100">
              <img src={Pict4} className="card-img-top" alt="project1" />
              <div className="card-body-porto">
                <h5 className="card-title-porto">TPA 5</h5>
                <p className="card-text-porto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">On August 2022</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Portofolio;
