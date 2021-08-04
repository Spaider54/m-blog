import React from "react";
import Avator from "../components/Avator";
import ContactList from "../components/ContactList";

import MyImage from './../images/aboutimg.jpg';
const AboutPage = () => {
  return (
    <>
      <h1> About Me</h1>
      <article>
        <Avator img={MyImage} alt={"Image de Walid Menghour"} />
        <p>
          Hi , I am Walid MENGHOUR Computer Science Student in{" "}
          <a href="https://www.usthb.dz/">
            (University of Science and Technology – Houari Boumediene )
          </a>
        </p>
        <p>I am a Web Designer and UI/UX Designer .</p>
        <p>You Can Contact Me : walidmenghour@hotmail.com</p>
        <ContactList/>
      </article>
    </>
  );
};

export default AboutPage;
