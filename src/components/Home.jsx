import React from "react";
import Menu from "./menu";
import Contact from "./Contact";
import Work from "./Works";
import Education from "./Education";
import About from "./About";

function Home() {

    return (
        <div className="container">
            <Menu/>
            <Contact/>
            <div id="content" className="content">

                <section id="home" className="center-section">
                    <p>YANATCHARA<br/>JERAJA</p>
                    <img src="/images/girl_icon.png" alt="myPic" className="myPic"/>
                    <h3>Portfolio</h3>
                </section>

                <section id="about">
                    <About/>
                </section>

                <section id="education">
                    <Education/>
                </section>

                <section id="work">
                    <Work/>
                </section>

            </div>
        </div>
    );
}

export default Home;