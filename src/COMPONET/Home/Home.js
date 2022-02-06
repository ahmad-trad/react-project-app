import React  from "react";
import Footer from "../Footer/Footer";
import About from "./home-componentes/about/About";
import Components from "./home-componentes/component-reverse/Component";
import Contact from "./home-componentes/contact/Contact";
import Pragraf from "./home-componentes/file-silde-icon/Pragraf";
import Portfolio from "./home-componentes/portfolio/Portfolio";
import Services from "./home-componentes/services/Services";
import Sildeimag from "./home-componentes/silde/Sildeimag";

function Home(){

    return(
        <>
            <Sildeimag />
            <Pragraf />
            <Components head="services" prag="Don't be busy, be productive" />
            <Services />
            <Components head="portfolio" prag="If you do it right, it will last forever." />
            <Portfolio />
            <Components head="about" prag="Less is more work" />
            <About />
            <Components head="contact" prag="We are born to creat" />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;