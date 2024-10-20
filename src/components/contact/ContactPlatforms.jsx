const ContactPlatforms = ({ linkVisibility }) => {
  const contactPlatforms = [
    {
      href: "#",
      icon: "bxl-gmail",
      transitionDelay: "delay-0",
    },
    {
      href: "#",
      icon: "bxl-whatsapp",
      transitionDelay: "delay-100",
    },
    {
      href: "#",
      icon: "bx-phone",
      transitionDelay: "delay-200",
    },
  ];

  return (
    <div
      className="flex justify-start items-center rounded-2xl px-1.5 mt-3 ml-1.5 absolute contact-div"
      style={{ top: "-46px" }}
    >
      {contactPlatforms.map((platform, index) => {
        return (
          <a
            href={platform.href}
            target="_blank"
            className={
              linkVisibility === "invisible"
                ? "text-white rounded-full h-10 w-10 flex place-items-center justify-center backdrop-blur-2xl ml-1 invisible transition-1000 " +
                  platform.transitionDelay
                : "text-white rounded-full h-10 w-10 flex place-items-center justify-center backdrop-blur-2xl bg-stone-400 ml-1 visible transition-1000 " +
                  platform.transitionDelay
            }
            key={index}
          >
            <i className={"bx " + platform.icon + " bx-md bx-tada"}></i>
          </a>
        );
      })}
    </div>
  );
};
export default ContactPlatforms;
