import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://www.sliderrevolution.com/wp-content/uploads/revslider/nature-slider/farm_preview.jpg"
                alt="First slide"
              ></img>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://www.4kshooters.net/wp-content/uploads/2015/12/Slider_One_01.jpg"
                alt="Second slide"
              ></img>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://images.wallpapersden.com/image/download/dubai-city-in-sunrise_a2VlbmmUmZqaraWkpJRobWllrWdma2U.jpg"
                alt="Third slide"
              ></img>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
       
      </div>
    );
  }
}
