import Header from "/components/Header/Header.jsx";
import About from "/components/About/AboutComponent.jsx";

import Resume from "/components/Resume/ResumeComponent.jsx";
import Portfolio from "/components/Portfolio/index.jsx";
import Services from "/components/services/index.jsx";
import Contacts from "/components/contacts/index.jsx";
import Navbar from "/components/navbar/index.jsx";
import Footer from "/components/footer/index.jsx";

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
