import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Photo1 from "../../assets/yazid.jpg";
import "./About.css";
import Title from "../../components/Title/Title";

function About() {
  return (
    <>
      <Navbar />

      <Title id="text-center" text="About Me" />

      <div className="row justify-content-center mt-7">
        <div className="col-md-5">
          <div className="card">
            <img src={Photo1} className="card-img-top lanching" alt="photo" />
            <div className="card-body">
              <p className="card-text paragraph">
                My name is Yazid Nur Yaqin. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div class="services-12" id="experience">
          
                    <div class="form-12-content">
                    <div class="container">
                        

                            <div class="column1">
                                <h3 class="mb-5">Experiences</h3>
                                <div class="experience-top">
                                    <h5>2018 - 2019</h5>
                                    <h4>PR IPM MBS Yogyakarta</h4>
                                    <p class="my-3 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div class="experience-top">
                                    <h5>2021 - Now</h5>
                                    <h4>HIMA Software engineering ITTP</h4>
                                    <p class="my-3 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                            <div class="column2">
                                <h3 class="mb-5">Education</h3>
                                <div class="experience-top">
                                    <h5>2014 - 2017</h5>
                                    <h4>SMP MBS Yogyakarta</h4>
                                    <p class="my-3 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div class="experience-top">
                                    <h5>2017 - 2020</h5>
                                    <h4>SMA MBS Yogyakarta</h4>
                                    <p class="my-3 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div class="experience-top">
                                    <h5>2020 - Now</h5>
                                    <h4>S1 Software Engineering ITTP</h4>
                                    <p class="my-3 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        
                    </div>
                </div>
                </div>

      <Footer />
    </>
  );
}

export default About;
