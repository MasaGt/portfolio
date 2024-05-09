const Body = () => {
  return (
    <div className="container">
      <div className="video-container">
        <video
          className="video"
          src="/About_bg.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="about">
        <div className="about_col backdrop-blur-sm about_right-col">
          <div className="about_profile md:space-y-20">
            <div className="title">Hello, I am Masaomi Goto.</div>
            <div className="introduction">
              A web developer who loves coding, designing, problem solving,
              workout, and Japanese manga. Without limiting myself to either the
              front-end or back-end, I learn software development with my
              unlimited interest.
            </div>
          </div>
        </div>
        <div className="about_col backdrop-blur-sm abut_left-col">
          <div className="about_career md:space-y-8">
            <span className="block">
              2020 - 2023 Bachelor of computer and information sciences at
              Auckland University of Technology
            </span>
            <span className="block">
              2015 - 2017 Java Programmer at Sankei Cries (Japan)
            </span>
          </div>

          <div className="about_skills">Skills</div>
        </div>
      </div>
    </div>
  );
};

export default Body;
