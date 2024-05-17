import About from "./_components/about/Body";
import Navi from "./_components/common/Navi";
import Contact from "./_components/contact/Body";
import Blog from "./_components/blogs/Body";

export default function Home() {
  return (
    <main>
      <Navi>About</Navi>
      <div className="video-container">
        <video
          className="video"
          src="/bg_blogs.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
      {/* <section>
        <About />
      </section> */}
      <section className="works"></section>
      <section>
        <Blog />
      </section>
      {/* <section>
        <Contact />
      </section> */}
    </main>
  );
}
