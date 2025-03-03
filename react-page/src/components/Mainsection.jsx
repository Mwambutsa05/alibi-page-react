import React from "react";
import "./Main.css";
import firstImg from "../components/Assets/Cheers_with_Beer.jpeg";
import secondImg from "../components/Assets/second-img.jpeg";
import thirdImg from "../components/Assets/first-img.jpeg";
import FourthImg from "../components/Assets/123.jpeg";
import firthImg from "../components/Assets/firth_img.jpeg";
import wedImg from "../components/Assets/wed.jpg";
import burger from "../components/Assets/burger.jpg";
import mix from "../components/Assets/mixologist.jpg";
import cocktails from "../components/Assets/Passions_cocktails.jpg";
import drinks from "../components/Assets/liquor_cabine.jpg";
import cabin from "../components/Assets/liquor_rocks.jpg";
import house from "../components/Assets/house.jpg";
import red from "../components/Assets/red_cocktail.jpg";
function Mainsection() {
  return (
    <div className="main">
      <div className="first_section">
        <div className="title">
          <h3>EVENTS</h3>
          <h1>Our Events Lineup</h1>
        </div>
        <div className="main-divs">
          <section>
            <img src={firstImg} alt="description" />
            <div>
              <h2>
                <strong>Hidden Nights</strong>
              </h2>
              <p>
                Saturday, December 3, 2025 <strong>.</strong> 7pm - 11pm
              </p>
              <div className="btn-1">
                <button type="button">Book Now</button>
              </div>
            </div>
          </section>
          <section>
            <img src={secondImg} alt="description" />
            <div>
              <h2>
                <strong>Shining Sparkled</strong>
              </h2>
              <p>
                Saturday, December 7, 2025 <strong>.</strong> 7pm - 11pm
              </p>
              <div className="btn-2">
                <button type="button">Book Now</button>
              </div>
            </div>
          </section>
          <section>
            <img src={thirdImg} alt="description" />
            <div>
              <h2>
                <strong>Hidden Nights</strong>
              </h2>
              <p>
                Saturday, December 15, 2025 <strong>.</strong> 7pm - 11pm
              </p>
              <div className="btn-3">
                <button type="button">Book Now</button>
              </div>
            </div>
          </section>
          <section>
            <img src={FourthImg} alt="description" />
            <div>
              <h2>
                <strong>Shining Sparkled</strong>
              </h2>
              <p>
                Saturday, December 24, 2025 <strong>.</strong> 7pm - 11pm
              </p>
              <div className="btn-4">
                <button type="button">Book Now</button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="second_section">
        <h3>EVENT SPACES</h3>
        <h1>Private and Special events</h1>
        <section>
          <img src={firthImg} alt="description" />
          <div className="riverside">
            <h3>Indoor</h3>
            <h1>Riverside Garden</h1>
            <p>
              A serene escape by the water, Riverside Garden offers lush
              greenery, peaceful walkways, a refreshing connection to nature.
            </p>
            <button type="button">Reserve Now</button>
          </div>
        </section>
        <section className="atr">
          <div className="atrium">
            <h3>Food</h3>
            <h1>Atrium Backbar</h1>
            <p>
              Atrium backbar is a sleek and functional bar setup designed for
              efficiency and style, It enhances workflow while adding a touch of
              sophisticated to any space.
            </p>
            <button type="button">Reserve Now</button>
          </div>
          <img src={wedImg} alt="description" />
        </section>
      </div>
      <div className="third_section">
        <h3>SOCIAL MEDIA</h3>
        <h1>FOLLOW OUR ACTIVITY</h1>
        <img src={burger} alt="description" />
        <img src={mix} alt="description" />
        <img src={cocktails} alt="description" />
        <img src={drinks} alt="description" />
        <img src={cabin} alt="description" />
        <img src={house} alt="description" />
        <img src={red} alt="description" />
      </div>
    </div>
  );
}

export default Mainsection;
