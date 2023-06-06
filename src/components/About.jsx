import React from "react";

function About() {
    return (
        <div id="about" className="about-container">
            <img src={require("../images/ged_profile.png")} alt="myPic" className="gedPic"/>
            <div className="about-content">
                <h2>About ME</h2>
                <h3>Hello,<br/> My name is Yanatchara Jeraja.</h3>
                <p>I am a student at Faculty of Kasetsart University faculty of engineering. I am studying in the second year of Bachelor of Software Engineering.</p>
                <ul >Skills
                    <li>Python, Java, C#</li>
                    <li>HTML, CSS, JavaScript</li>
                    <li>React</li>
                    <li>SQL</li>
                    <li>Git</li>
                </ul>
            </div>
        </div>
    );
}

export default About;