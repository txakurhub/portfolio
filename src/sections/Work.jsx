import Gallery from "../components/Gallery";

const Work = () => {
  return (
    <section className="mt-56 w-full flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 xl:ml-8 ">
      <div className="w-full" id="work">
        <h2 className="secondary-title my-5 xl:mt-20 xl:mb-10">Work</h2>
        <div className="">
          <Gallery />
        </div>
      </div>
    </section>
  );
};

export default Work;
