import background from "../assets/contact-bg.jpg";

const Contact = () => {
  return (
    <div
      className="flex justify-center place-items-center content-center h-80 bg-no-repeat bg-center bg-cover my-14"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.567),rgba(0,0,0,0.789)),url("${background}")`
      }}
    >
      <div className="flex flex-col justify-around">
        <div className="flex justify-center">
          <p className="text-white font-black text-2xl pb-2">
            Have a dream project ?
          </p>
        </div>
        <div className="flex justify-center">
          <p className="font-black font-mono text-white py-1 px-4">
            Let&apos;s talk. Share your idea and get it transformed into reality
          </p>
        </div>
        <div className="flex justify-center pt-1">
          <a
            href="#"
            className="font-black text-white rounded-2xl p-2 m-4 border border-amber-50 backdrop-blur-3xl"
          >
            Contact Us <i className="bx bx-phone"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
