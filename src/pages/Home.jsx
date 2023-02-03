import About from "../sections/About";
import Hire from "../sections/Hire";
import Presentation from "../sections/Presentation";
import Work from "../sections/Work";

const Home = () => {
  function updateList() {
    const titles = [...document.querySelectorAll("h1, h2")].sort((a, b) => {
      return (
        Math.abs(a.getBoundingClientRect().top) -
        Math.abs(b.getBoundingClientRect().top)
      );
    });
    document
      .querySelectorAll(".selected-circle")
      .forEach((c) => c.classList.remove("selected-circle"));
    document
      .querySelectorAll(".nav-dot")
      [
        [...document.querySelectorAll("h1, h2")].indexOf(titles[0])
      ].classList.add("selected-circle");
  }

  window.addEventListener("scroll", () => {
    updateList();
  });

  window.onscroll = function () {
    const cards = document.querySelectorAll(".card");
    const scrollPosition = window.scrollY + window.innerHeight;
    cards.forEach((card) => {
      const cardPosition = card.offsetTop + card.offsetHeight / 2;
      if (scrollPosition > cardPosition) {
        card.classList.add("card-visible");
      }
    });
  };
  return (
    <main class="mb-24">
      <Presentation />
      <About />
      <Work />
      <Hire />
    </main>
  );
};

export default Home;
