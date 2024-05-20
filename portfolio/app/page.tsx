import Navi from "./_components/common/Navi";
import About from "./_components/about/Body";
import Works from "./_components/works/Body";
import Blogs from "./_components/blogs/Body";
import Contact from "./_components/contact/Body";

export default function Home() {
  return (
    <main>
      <Navi>About</Navi>
      <div className="video-container">
        <video
          className="video"
          src="/bg_works.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
      {/* <section>
        <About />
      </section> */}
      <section>
        <Works />
      </section>
      {/* <section>
        <Blogs />
      </section> */}
      {/* <section>
        <Contact />
      </section> */}
    </main>
  );
}
