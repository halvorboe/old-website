import React from "react";

import "../about.css";


const About = () => {
  return (
    <div style={{display: "flex"}}>
      <div>
        <div  className="portrait"></div>
        <div style={{width: "50vw", minHeight: "100vh", height: "100%"}}>
        </div>
        </div>
        <div  style={{width: "50vw"}}>
          <section className="centered">
            <h1>Halvor Fladsrud Bø (21)</h1>
            <h2>Introduction</h2>
            <p>Hi! My name is Halvor and I am a Software Engineer from Oslo, Norway. Currently I’m working for Palantir Technologies solving Big Data problems for governments. In my spare time I’m training for an Ironman and studying fulltime.</p>
            <p>On this blog I’ll try to improve my writing. It will be about anything and everything. </p>
            {/* <br />
            <h3>Technologies</h3>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>Rust</li>
              <li>JS</li>
              <li>Cloud (GCP, AWS, Azure)</li>
            </ul> */}
            <h2>Experience</h2>
            <h5 className="no-m">Tequire (2017-2019)</h5>
            <h3 className="no-m">CTO & Co-Founder</h3>
            <hr />
            <ul>
              <li>Took the tech team from 0 to 100 real quick.</li>
            </ul>
            <h2>Experience</h2>
            <h5 className="no-m">Tequire (2017-2019)</h5>
            <h3 className="no-m">CTO & Co-Founder</h3>
            <hr />
            <ul>
              <li>Took the tech team from 0 to 100 real quick.</li>
            </ul>
        </section>
        </div>
    </div>
  );
};

export default About;
