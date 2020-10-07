import React from "react";

import "./App.scss";

import HomeScreen from "./components/home-screen/home-screen.component";
import UpcomingTours from "./components/upcoming-tours/upcoming-tours.component.";
import Footer from "./components/footer/footer.component";
import Subscribe from "./components/subscribe/subscribe.component";
import AboutUs from "./components/about-us/about-us.component";
import Reviews from "./components/reviews/reviews.component";

function App() {

  return (
    <div className="App">
      <HomeScreen />
      <AboutUs />
      <UpcomingTours />
      <Reviews />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
