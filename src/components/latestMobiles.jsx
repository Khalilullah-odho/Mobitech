import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#3D84B8",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#3D84B8",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

export default class LatestMobiles extends Component {
  render() {
    const settings = {
      autoplay: true,
      pauseOnHover: true,
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div style={{ padding: "2rem" }}>
        <h2 className="brandName">Latest Mobiles</h2>
        <Slider {...settings}>
          {this.props.mobiles.map((mobile) => {
            return (
              <div className="carousel" key={mobile._id}>
                <div className="mobileBoxMain carousel">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={{
                      pathname: `/mobile/${mobile.name.replace(/\s+/g, "")}`,
                      state: { mobile },
                    }}
                  >
                    <div className="mobileBox">
                      <img src={mobile.img} alt="" />

                      <br />
                      <h4 className="p4">{mobile.name}</h4>
                      <div className="price price-carousel">
                        Rs: {mobile.price} PKR
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
