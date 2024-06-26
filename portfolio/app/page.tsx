import Navi from "./_components/common/Navi";
import About from "./_components/about/Body";
import Works from "./_components/works/Body";
import Blogs from "./_components/blogs/Body";
import Contact from "./_components/contact/Body";
import Recoil from "./_components/common/Recoil";

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
          playsInline
        ></video>
      </div>
      {/* <section>
        <About />
      </section> */}
      <section>
        <Recoil>
          <Works />
        </Recoil>
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
