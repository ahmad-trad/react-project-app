import React  from "react";
import Footer from "../Footer/Footer";
import Cards from "./home-componentes/services/Cards";
import Sildeimag from "./home-componentes/silde/Sildeimag";

function Home(){

    return(
        <>
            <Sildeimag />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;