import GalleryCard from "./GalleryCard";
import projects from "../utils/projects";
import "./Gallery.css";
import { useEffect, useRef, useState } from "react";

const Gallery = () => {
    const [scrollY, setScrollY] = useState(0);
    const galleryRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
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
      <div ref={galleryRef} className="gallery">
        {projects.map((project, index) => {
          const direction = index % 2 === 0 ? "from-left" : "from-right";
          const childrenArray = galleryRef.current
            ? Array.from(galleryRef.current.children)
            : [];
  
          return (
            <article
              key={index}
              className={`${direction} ${
                isInViewport(childrenArray[index]) ? "show" : ""
              }`}
            >
              <GalleryCard img={project.snapshot} title={project.title} description={project.text}/>
            </article>
          );
        })}
      </div>
    );
  };
  
export default Gallery;
