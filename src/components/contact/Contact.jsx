import { useState } from "react";
import background from "../../assets/contact-bg.jpg";
import ContactPlatforms from "./ContactPlatforms";

const Contact = () => {
  const [linkVisibility, setLinkVisibility] = useState("invisible");

  return (
    <section
      className="flex justify-center place-items-center content-center h-80 bg-no-repeat bg-center bg-cover my-14"
      name="contact-sec"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.567),rgba(0,0,0,0.789)),url("${background}")`,
      }}
    >
      <div className="flex flex-col justify-around">
        <div className="flex justify-center">
          <p className="text-white text-center font-black font-sans text-2xl md:text-3xl pb-2 cursor-default">
            Have a dream project ?
          </p>
        </div>
        <div className="flex justify-center">
          <p className="font-black font-mono text-white text-center py-1 px-4 cursor-default md:text-2xl">
            Let&apos;s talk. Share your idea and get it transformed into
            reality.
          </p>
        </div>
        <div className=" relative flex justify-center pt-1">
          <button
            className="font-black text-white rounded-2xl p-2 m-4 border border-amber-50 backdrop-blur-3xl"
            onClick={() => {
              const contactLinks =
                document.querySelectorAll(".contact-div > a");
              contactLinks.forEach(() =>
                linkVisibility === "invisible"
                  ? setLinkVisibility("visible")
                  : setLinkVisibility("invisible")
              );
            }}
          >
            Contact Us
          </button>
          <ContactPlatforms linkVisibility={linkVisibility} />
        </div>
      </div>
    </section>
  );
};
export default Contact;
