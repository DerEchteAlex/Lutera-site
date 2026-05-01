import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import allProducts from "../data/products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "./Home.css";
// ✅ Import images directly — Vite resolves these correctly at build time
import luteraLogo from "../assets/images/luteramerch.png";
import tshirtFront from "../assets/images/Tshirt.png";
import tshirtBack from "../assets/images/NeuviTshirt.png";
import windWheelAster from "../assets/images/WindWheelAster.png";
import acquaintFate from "../assets/images/AcquaintFate.png";
import noQiqi from "../assets/images/Noqiqi.png";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next`}
      onClick={onClick}
      aria-label="Next"
    >
      <FaChevronRight />
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev`}
      onClick={onClick}
      aria-label="Previous"
    >
      <FaChevronLeft />
    </div>
  );
}

function Home() {
  const tees = allProducts.filter((p) => p.type === "tee").slice(0, 6);
  const posters = allProducts.filter((p) => p.type === "poster").slice(0, 3);
  const arrivals = [...tees, ...posters];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="home">
      {/* ── HERO: FIND YOUR VIBE ── */}
      <section className="hero-vibe">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-brand">
              {/* ✅ Using imported variable, not a path string */}
              <img src={luteraLogo} alt="lutera-logo" className="logo-img" />
              Lutera Merch
            </div>
            <h1>
              <div className="big-text align-left">FIND</div>
              <div className="big-text align-center">YOUR</div>
              <div className="big-text align-right">VIBE</div>
            </h1>
          </div>

          <div className="hero-right">
            <div className="tshirt-stack">
              <img
                src={tshirtFront}
                alt="Tshirt front"
                className="tshirt-img tshirt-front"
              />
              <img
                src={tshirtBack}
                alt="Tshirt back"
                className="tshirt-img tshirt-back"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPLORE + TAGLINE ROW ── */}
      <section className="hero-proud-row">
        <div className="hero-proud-row-content">
          <Link to="/shop" className="explore-btn">
            EXPLORE HERE
          </Link>
          <div className="hero-proud-meta">
            <h2>
              WHERE <br />
              THE MERCH <br />
              MEETS META
            </h2>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features-section">
        <div className="features-list">
          <div className="feature-item">
            <img src={windWheelAster} alt="Wind Wheel Aster" className="feature-icon" />
            <div className="feature-label">
              FOR REAL-WORLD
              <br />
              TRAVELERS
            </div>
          </div>
          <div className="feature-item">
            <img src={acquaintFate} alt="Acquaint Fate" className="feature-icon" />
            <div className="feature-label">
              DRESS LIKE YOU JUST
              <br />
              PULLED A 5-STAR
            </div>
          </div>
          <div className="feature-item">
            <img src={noQiqi} alt="No qiqi" className="feature-icon" />
            <div className="feature-label">
              GUARANTEED STYLE
              <br />
              NO 50/50s HERE
            </div>
          </div>
        </div>
      </section>

      {/* ── NEW ARRIVALS SLIDER ── */}
      <section className="new-arrivals-section">
        <h2 className="new-arrivals-title">NEW ARRIVALS</h2>
        <Slider {...sliderSettings}>
          {arrivals.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="arrival-card-link"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="arrival-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="arrival-img"
                />
                <div className="arrival-info">
                  <div className="arrival-name">{product.name}</div>
                  <div className="arrival-price">₹{product.price}</div>
                  <div className="arrival-type">{product.type.toUpperCase()}</div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </section>
    </div>
  );
}

export default Home;
