import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import projects from "../utils/projects";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {projects.map((p) => {
          return (
            <SwiperSlide>
              <Card
                key={projects.indexOf(p)}
                deployURL={p.deployURL}
                repo={p.repo}
                text={p.text}
                video={p.video}
                snapshot={p.snapshot}
                title={p.title}
                tech={p.tech}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
