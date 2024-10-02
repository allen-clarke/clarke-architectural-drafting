import { contactPlatforms } from "./ContactPlatforms";

const Footer = () => {
  return (
    <footer className="bg-black py-2.5 px-3.5">
      <div className="flex flex-col">
        <div className="flex justify-start items-center">
          <p className="text-white text-2xl uppercase font-black">
            Clarke Drafting
          </p>
        </div>
        <div>
          <p className="font-extralight text-white pt-4">
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
                href={platform.href}
                className="text-white rounded-full h-10 w-10 flex place-items-center justify-center" key={index}>
                <i className={"bx bxl-" + platform.icon + " bx-md"}></i>
              </a>
            );
          })}
        </div>
      </div>
      <hr className="mt-10" />
      <div className="flex flex-col justify-between content-center items-center mt-2 pb-6">
        <div>
          <p className="flex items-center text-white font-bold">
            <i className="bx bx-current-location bx-sm mr-0.5"></i>Buchanan |
            Grand Bassa | Liberia
          </p>
        </div>
        <div>
          <p className="flex items-center text-white font-extrabold">
            <i className="bx bx-copyright bx-sm mr-0.5"></i>2024 Clarke
            Drafting. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
