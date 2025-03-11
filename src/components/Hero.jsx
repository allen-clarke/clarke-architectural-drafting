import HeroBackground from "../assets/hero-bg.jpg";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section>
      <div
        className="h-96 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.456),rgba(0,0,0,0.789)),url("${HeroBackground}")`,
        }}
      >
        <h1 className="text-white text-5xl font-black pt-12 px-4 anton-sc cursor-default">
          We Build Your Dream Place Come True
        </h1>
        <p className="font-black font-mono text-white pt-1 px-4 mb-6 cursor-default md:text-2xl">
          Crafting your idea into stunning architectural master plan
        </p>

        <div>
          <Link
            to="contact-sec"
            smooth={true}
            duration={500}
            className="font-black font-sans text-white rounded-2xl p-2 ml-4 border border-amber-50 backdrop-blur-2xl cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-black font-extrabold text-2xl md:text-3xl pt-6 px-4 anton-sc cursor-pointer">
          We have Expertise in crafting Stunning Plans
        </h2>
        <p className="font-medium font-sans text-black md:text-2xl pt-1 px-4 cursor-default">
          We have more than three decades of experience handling projects.
          <br />
          With our team, your ideas will be transformed into an architectural
          masterpiece that combines comfort and growth.
        </p>
      </div>
    </section>
  );
};
export default Hero;
