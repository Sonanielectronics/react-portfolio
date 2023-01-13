import React from "react";
import "./Home.css";

import Type from "./Type";
import Navbar from "./Navbar"

const Home = () => {

    return (

        <>

            <div id="hero" class="home">

            <Navbar></Navbar>
                <div class="container">
                    <div class="hero-content">
                        <Type></Type>

                        <ul class="list-unstyled list-social">
                            <li><a href="#"><i class="bi bi-facebook"></i></a></li>
                            <li><a href="#"><i class="bi bi-twitter"></i></a></li>
                            <li><a href="#"><i class="bi bi-instagram"></i></a></li>
                            <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>

    );

}

export default Home;