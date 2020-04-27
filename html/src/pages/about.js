import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Box from "../components/Box"
import PortraitImage from "../components/PortraitImage"
import Timeline from "../components/Timeline"
import Footer from "../components/Footer"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div
      style={{
        display: `flex`,
        flexDirection: `row`,
        margin: 0,
        padding: 0,
      }}
    >
      <div style={{ margin: '45px -150px 30px 30px' }}>
        <PortraitImage width={"300px"} height={"300px"} />
      </div>
      <Box>
        <div style={{ padding: 0, margin: 30, marginLeft: 180 }}>
          <h1>Halvor Fladsrud Bø (21)</h1>
          <p>
            Hi! I'm a Computer Engineering student with a passion for Software Engineering, starting companies and design. On this blog I will write about what I'm learning. It exists for me to learn, more than for others to read - but it would be cool if other people enjoyed my writing.
          </p>
          <h3 style={{ padding: 0, margin: 0, marginTop: -10 }}>
            <FaLinkedin /> <FaGithub />
          </h3>
        </div>
      </Box>
    </div>
    <div>
      <h1>What I like</h1>
      <p>
        I have a long list of topics I enjoy. Designing this blog has been
        really fun.
      </p>
      <h3>Programming languages</h3>
      <ul>
        <li><strong>Python</strong> - my "go to" language for any project. Has never failed me. 'MyPy' is a must.</li>
        <li><strong>Go</strong> - my "favorite" language when working with others. It is really simple and there is only one way to do stuff. People need to do the same.</li>
        <li><strong>Java</strong> - my "most hated" and "most loved" language depending on the day. I enjoy working on large projects written in Java, but I would never use it for a personal project.</li>
        <li><strong>Kotlin</strong> - my "go to" functional language. </li>
        <li><strong>Rust</strong> - my "favorite" language for writing performant code. Love wrestling with the borrow checker. I try to contribute to the open source community around rust.</li>
        <li>C++</li>
        <li>Racket</li>
        <li>JS</li>
        <li>Bash</li>
      </ul>
      <h3>Topics (Software Engineering)</h3>
      <ul>
        <li>Databases</li>
        <li>Datastructures</li>
        <li>Teamwork</li>
        <li>Project Management</li>
        <li>User focused</li>
        <li>Editors (VIM, VSCode)</li>
      </ul>
    </div>
    <div>
      <h1>What I've done so far</h1>
      <p>Below you can see a timeline of my programming jurney.</p>
      <div
        style={{
          margin: "50px 0",
          backgroundColor: "#FAFAFA",
          borderRadius: 20,
        }}
      >
        <Timeline />
      </div>
    </div>
    <div>
      <h1>What I want to do in the future</h1>
      <p>Who da fuck knows.</p>
    </div>
  </Layout>
)

export default About
