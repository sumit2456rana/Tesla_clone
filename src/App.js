import "./styles.css";
import Header from "./Header.js";
import Section from "./Section.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Section
        name="Experience Tesla"
        info="Schedule a Demo Drive Today"
        image="https://4kwallpapers.com/images/walls/thumbs_3t/7855.jpeg"
        leftBtn="Demo Drive"
      />
      <Section
        name="Model 3"
        info="After Federal Tax Credit"
        price="Starting at $32,740"
        image="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-NA.jpg"
        leftBtn="Explore Inventory"
        rightBtn="Custom Order"
      />
      <Section
        name="Model Y"
        info="After Federal Tax Credit"
        price="Starting at $40,240"
        image="https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop"
        leftBtn="Explore Inventory"
        rightBtn="Custom Order"
      />
      <Section
        name="Model S"
        info="Explore Inventory"
        image="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg"
        leftBtn="Custom Order"
        rightBtn="Demo Drive"
      />
      <Section
        name="Model X"
        info="Explore Inventory"
        image="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD"
        leftBtn="Custom Order"
        rightBtn="Demo Drive"
      />
      <Section
        name="Solar Panels"
        info="Schedule a Virtual Consultation"
        image="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/425_HP_SolarPanels_D"
        leftBtn="Order Now"
        rightBtn="Learn More"
      />
      <Section
        name="Solar Roof"
        info="Produce Clean Energy From Your Roof"
        image="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Desktop-Global"
        leftBtn="Order Now"
        rightBtn="Learn More"
      />
      <Section
        name="Powerwall"
        image="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-Desktop.jpg"
        leftBtn="Order Now"
        rightBtn="Learn More"
      />
      <Section
        name="Accessories"
        image="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg"
        leftBtn="Shop Now"
      />
    </div>
  );
}
