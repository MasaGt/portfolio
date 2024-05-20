"use client";
import CarouselSection from "./CarouselSection";

const Body = () => {
  let works = [
    {
      img: "blog_img.png",
      title: "portofolio v2",
      description: "My new portofolio. Using Next.js as a framework",
    },
    {
      img: "blog_img.png",
      title: "Vineyard Climate Monitoring",
      description:
        "An android app that monitors weather data and forecasts temperature in 1 hour using AI model.",
    },
    {
      img: "blog_img.png",
      title: "Flutter Game App",
      description: "A mobile app. Move a falling kiwi bird to dodges objects.",
    },
    {
      img: "blog_img.png",
      title: "portofolio v1",
      description: "My first portfolio using HTML5, css3, and JavaScript.",
    },
  ];
  return (
    <div className="works">
      <div className="works_blur works_title"></div>
      <div className="works_main">
        <CarouselSection children={works} />
      </div>
      <div className="works_blur works_desc"></div>
    </div>
  );
};

export default Body;
