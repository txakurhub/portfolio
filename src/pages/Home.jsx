import { useEffect, useRef, useState } from "react";
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

  const [scrollY, setScrollY] = useState(0);
  const [show, setShow] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (isInViewport(aboutRef.current)) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const isInViewport = (element) => {
    if (!element) return false;

    const elementTop = element.offsetTop;
    const elementBottom = elementTop + element.offsetHeight;
    const viewportTop = scrollY;
    const viewportBottom = viewportTop + window.innerHeight;

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  return (
    <main className="mb-24">
      <Presentation />
      <About isInViewport={isInViewport} aboutRef={aboutRef} show={show} />
      <Work isInViewport={isInViewport} aboutRef={aboutRef} scrollY={scrollY} />
      <Hire isInViewport={isInViewport} aboutRef={aboutRef} show={show} />
    </main>
  );
};

export default Home;
