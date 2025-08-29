import React from "react";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { About } from "./components/about/About";
import { Experience } from "./components/experience/Experience";
import { Service } from "./components/services/Service";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import {ContributedWebsites} from "./components/portfolio/ContributedWebsites"
function App() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Header />
            <Nav />
            <About />
            <Experience />
            <Service />
            <ContributedWebsites/>
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;