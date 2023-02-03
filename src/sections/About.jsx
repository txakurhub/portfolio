import IconsTech from "../components/IconsTech";

const About = () => {
  return (
    <section class="w-full mt-64 pb-10 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 xl:ml-8">
      <div class="w-full xl:ml-12 mr-12">
        <h2 id="about" class="secondary-title card">
          About
        </h2>
        <p class="section-paragraph lg:text-xl card">
          I am a full-stack developer from Argentina, specialized in creating
          visually appealing and functional content both working in a team and
          individually.<br></br>
          My passion for technology and web development led me to graduate from
          a full-stack coding bootcamp a year ago and I am focused on continuing
          to develop my career in the tech industry.<br></br>I am an empathetic,
          enthusiastic and proactive person, with an assertive communication
          style and always looking to learn new things.<br></br>I am currently
          working on interesting projects and developing my skills to reach my
          full potential.<br></br>
          If you are interested in collaborating or just chatting, feel free to
          contact me.
        </p>
        <h4 class="mb-6 mt-10 w-full max-w-3xl text-2xl font-bold text-selected-text card">
          Some of the technologies I work with are
        </h4>
        <IconsTech />
      </div>
    </section>
  );
};

export default About;
