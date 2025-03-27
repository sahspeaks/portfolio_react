import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { About } from "./components/about/About";
import { Experiance } from "./components/experiance/Experiance";
import { Service } from "./components/services/Service";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { ContributedWebsites } from "./components/portfolio/ContributedWebsites";

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experiance />
      <Service />
      <ContributedWebsites />
      <Portfolio />
      {/* <Contact/> */}
      <Footer />
    </>
  );
}
