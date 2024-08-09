import styles from "./style";

import { Navbar, Hero, Stats, Testimonials, Footer, CTA, Clients, CardDeal, Business, Billing } from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full h-[3770px] overflow-hidden">
      <div className={`${styles.paddingX}  ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
          </div>
      </div>
      {/* main part of the page*/}

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>

      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>

      </div>


    </div>
  );
};

export default App;
