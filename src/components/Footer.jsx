import copyrightSections from "../arrays/footerCopyRight";
import contactPlatforms from "../arrays/contactPlatforms";

const Footer = () => {
  return (
    <footer className="bg-black py-2.5 px-3.5">
      <section className="flex flex-col">
        <div className="flex justify-start items-center">
          <p className="text-white text-2xl md:text-3xl font-bold uppercase anton-sc cursor-default">
            Clarke Drafting
          </p>
        </div>
        <div>
          <p className="font-extralight font-sans text-white pt-4 cursor-default md:text-2xl">
            Clarke Drafting is an architectural agency specialised in designing
            houseplans of all kinds.
            <br /> At our agency, we are passionate about crafting plans that
            meet the satisfactions of our clients.
          </p>
        </div>
        <div className="flex justify-start items-center pt-3">
          {contactPlatforms.map((platform, index) => {
            return (
              <a
                href={platform.linkAddress}
                target="_blank"
                className="text-white rounded-full h-10 w-10 flex place-items-center justify-center"
                key={index}
              >
                <i className={`bx ${platform.icon} bx-md`}></i>
              </a>
            );
          })}
        </div>
      </section>

      <hr className="mt-10" />

      <section className="flex flex-col justify-between content-center items-center mt-2 pb-6">
        {copyrightSections.map((section, index) => {
          return (
            <div key={index}>
              <p className="flex items-center text-white text-center font-bold font-sans cursor-default md:text-2xl">
                <i className={`mr-0.5 bx bx-sm bx-${section.icon}`}></i>
                {section.text}
              </p>
            </div>
          );
        })}
      </section>
    </footer>
  );
};
export default Footer;
