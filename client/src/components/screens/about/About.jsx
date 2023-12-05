import { useState, useEffect } from "react";
import "./About.css";
import AboutItem from "./AboutItem.jsx";

function About({ about }) {
  return (
    <div className="about">
      <div className="about__header">
        <h1 className="big-title">About Me</h1>
        {about.intro.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
      <div className="about__container">
        {about.data.education && (
          <div className="about__section">
            <h2>Education</h2>
            {about.data.education.map((education, index) => (
              <AboutItem
                key={index}
                firstLine={education.program}
                secondLine={education.school}
              />
            ))}
          </div>
        )}
        {about.data.experiences && (
          <div className="about__section">
            <h2>Experiences</h2>
            {about.data.experiences.map((experience, index) => (
              <AboutItem
                key={index}
                firstLine={`${experience.company}, ${experience.location}`}
                secondLine={`${experience.role}, ${experience.time}`}
              />
            ))}
          </div>
        )}
        {about.data.exhibitions && (
          <div className="about__section">
            <h2>Exhibitions</h2>
            {about.data.exhibitions.map((exhibition, index) => (
              <AboutItem
                key={index}
                firstLine={exhibition.title}
                secondLine={`${exhibition.type} at ${exhibition.venue}, ${exhibition.time}`}
              />
            ))}
          </div>
        )}
        {about.data.awards && (
          <div className="about__section">
            <h2>Awards</h2>
            {about.data.awards.map((award, index) => (
              <AboutItem
                key={index}
                firstLine={award.title}
                secondLine={award.ranking}
              />
            ))}
          </div>
        )}
        {about.data.residencies && (
          <div className="about__section">
            <h2>Residencies</h2>
            {about.data.residencies.map((residency, index) => (
              <AboutItem
                key={index}
                firstLine={residency.program}
                secondLine={`${residency.venue}, ${residency.time}`}
              />
            ))}
          </div>
        )}
        {about.data.press && (
          <div className="about__section">
            <h2>Press</h2>
            {about.data.press.map((press, index) => (
              <AboutItem
                key={index}
                firstLine={press.publication}
                secondLine={`${press.title}, ${press.time}`}
                link={press.link}
              />
            ))}
          </div>
        )}
        {about.data.teachingWorkshop && (
          <div className="about__section">
            <h2>Teaching / Workshop</h2>
            {about.data.teachingWorkshop.map((teachingWorkshop, index) => (
              <AboutItem
                key={index}
                firstLine={teachingWorkshop.title}
                secondLine={`${teachingWorkshop.program}, ${teachingWorkshop.time}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
