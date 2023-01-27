import IconsTech from "../components/IconsTech";

const About = () => {
  return (
    <section class="w-full mt-64 pb-10 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24  xl:ml-8">
      <div class="w-full xl:ml-12 mr-12">
        <h2 id="about" class="secondary-title">
          About
        </h2>
        <p class="section-paragraph lg:text-xl">
          I'm a full-stack developer from Argentina, who enjoys to create
          good-looking content from the aches as working in a team. I've always
          been passionate about technology and when I discovered web
          development, I realized it would be perfect to me. <br></br>Recently, I
          graduated from a full-stack coding Bootcamp and want to start
          developing my career in the tech world. An Empathic, enthusiastic
          person, with an assertive communication style and always looking for
          something new to learn about.<br></br> I'm currently investigating, working and
          of course developing to achive my full potential. If you are
          interested in having a few words, please send me a message.
        </p>
        <h4 class="mb-6 mt-10 w-full max-w-3xl text-2xl font-bold text-selected-text">
          Some of the technologies I work with are
        </h4>
        <IconsTech />
      </div>
    </section>
  );
};

export default About;
