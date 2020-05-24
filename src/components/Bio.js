import React from "react";

import Portrait from "./Portrait";
import Box from "./Box";
import { FaLinkedin, FaGithub, FaEnvelope, FaSmileWink } from "react-icons/fa";

const Bio = () => {
  return (
    <div className="m-y">
      <Box header="About me" icon={<FaSmileWink />}>
        <div style={{ display: "flex" }}>
          <div
            className="portrait"
            style={{ margin: "-30px 30px -60px -30px" }}
          >
            <Portrait />
          </div>

          <div>
            <h1>Halvor Fladsrud Bø (21)</h1>
            <p>
              I'm currently a full-time Computer Engineering student at NTNU in
              Trondheim, Norway. This blog is a place where I can 'share' my
              niche interests without loosing friends.{" "}
            </p>
            <span className="icons" style={{ padding: "0 100" }}>
              <a target="_blank" href="https://www.linkedin.com/in/halvorboe/">
                <FaLinkedin />
              </a>
              {"            "}
              <a target="_blank" href="https://github.com/halvorboe">
                <FaGithub />
              </a>
              {"            "}
              <a target="_blank" href="mailto:hfb@complex.codes">
                <FaEnvelope />
              </a>
            </span>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Bio;
