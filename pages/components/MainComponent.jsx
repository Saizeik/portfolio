import Header from "/pages/components/Header/Header.jsx";
import About from "/pages/components/About/AboutComponent.jsx";

import Resume from "/pages/components/Resume/ResumeComponent.jsx";
import Portfolio from "/pages/components/Portfolio/index.jsx";
import Services from "/pages/components/services/index.jsx";
import Contacts from "/pages/components/contacts/index.jsx";
import Navbar from "/pages/components/navbar/index.jsx";
import Footer from "/pages/components/footer/index.jsx";

const Main = () => {
  return (
    <>
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Services />
      <Contacts />
      <Navbar />
      <Footer />
    </>
  );
};

export default Main;
