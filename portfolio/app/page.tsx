import Image from "next/image";
import About from "./_components/about/Body";

export default function Home() {
  return (
    <main>
      <section className="about">
        <About />
      </section>
      <section className="works"></section>
      <section className="blogs"></section>
      <section className="contact"></section>
    </main>
  );
}
