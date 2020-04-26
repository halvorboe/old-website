import React from "react"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { FaBeer } from 'react-icons/fa';

const events = [
  {
    date: "2010 - Present",
    title: "Programming",
    subtitle: "Online",
    description:
      `I started learning about coding when I was about 12. Progress was really slow in the beginning and I had no idea what I was doing. 
      test`,
  },
  {
    date: "2017 - 2020",
    title: "Student at NTNU",
    subtitle: "Trondheim, Norway",
    description:
      "I started learning about coding when I was about 12. Progress was really slow in the beginning and I had no idea what I was doing.",
  },
  {
    date: "2018 - 2019",
    title: "Started my first company - Recrut",
    subtitle: "Trondheim, Norway",
    description:
      "I started learning about coding when I was about 12. Progress was really slow in the beginning and I had no idea what I was doing.",
  },
  {
    date: "2018 - Present",
    title: "Worked for Highered",
    subtitle: "Trondheim, Norway",
    description:
      "I started learning about coding when I was about 12. Progress was really slow in the beginning and I had no idea what I was doing.",
  },
  {
    date: "2019 - 2019",
    title: "Internship at Cognite",
    subtitle: "Oslo, Norway",
    description:
      "I started learning about coding when I was about 12. Progress was really slow in the beginning and I had no idea what I was doing.",
  },
  {
    date: "2019 - 2019",
    title: "Started contributing to Open Source",
    subtitle: "Github",
    description:
      "I started learning about coding when I was about 12. Progress was really slow in the beginning and I had no idea what I was doing.",
  },
  {
    date: "2019 - 2019",
    title: "Started another company - Clout Software",
    subtitle: "Trondheim, Norway",
    description:
      "I started learning about coding when I was about 12. Progress was really slow in the beginning and I had no idea what I was doing.",
  },
  {
    date: "2019 - 2019",
    title: "Working at Palantir",
    subtitle: "London, England",
    description:
      "I started learning about coding when I was about 12. Progress was really slow in the beginning and I had no idea what I was doing.",
  },
]

const Icon = "A"

const Timeline = () => {
  return (
    <div>
      <VerticalTimeline>
        {events.map(event => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date={event.date}
            iconStyle={{ background: "#FF8939", color: "#fff" }}
            icon={<FaBeer />}
          >
            <h3 style={{marginTop: 0, marginBotton:0 }}>{event.title}</h3>
            <h4  style={{marginTop: 0, marginBotton: 0}}>{event.subtitle}</h4>
            <p>{event.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}

export default Timeline
