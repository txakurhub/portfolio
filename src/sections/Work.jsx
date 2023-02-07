import { Slider } from "../components/Slider";

const Work = () => {
  return (
    <section class="mt-56 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full xl:ml-8 ">
      <div class="w-full">
        <h2 class="secondary-title card">Work</h2>
        <div id="work" class="card">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Work;
