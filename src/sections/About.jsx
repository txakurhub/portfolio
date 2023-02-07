import { useEffect, useRef, useState } from "react";
import IconsTech from "../components/IconsTech";

const About = ({show, isInViewport}) => {
  
  const aboutRef = useRef(null);
  


  return (
    <section
      ref={aboutRef}
      className={`w-full mt-64 pb-10 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 xl:ml-8 ${
        show ? "entrada-arriba" : ""
      }`}
    >
      <div className="w-full xl:ml-12 mr-12">
        <h2 id="about" className="secondary-title ">
          About
        </h2>
        <p className="section-paragraph lg:text-xl ">
          I am a full-stack developer from Argentina, specialized in creating
          visually appealing and functional content both working in a team and
          individually. My passion for technology and web development led me to
          graduate from a full-stack coding bootcamp a year ago and I am focused
          on continuing to develop my career in the tech industry. I am an
          empathetic, enthusiastic and proactive person, with an assertive
          communication style and always looking to learn new things. I am
          currently working on interesting projects and developing my skills to
          reach my full potential. If you are interested in collaborating or
          just chatting, feel free to contact me.
        </p>
        <h4 className="mb-6 mt-10 w-full max-w-3xl text-2xl font-bold text-selected-text ">
          Some of the technologies I work with are
        </h4>
        <IconsTech />
      </div>
    </section>
  );
};

export default About;
