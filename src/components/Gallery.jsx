import GalleryCard from "./GalleryCard";
import projects from "../utils/projects";
import "./Gallery.css";
import { useEffect, useRef, useState } from "react";

const Gallery = ({scrollY, isInViewport}) => {
  const galleryRef = useRef(null);

  
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
