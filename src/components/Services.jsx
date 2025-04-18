import serviceArray from "../arrays/services";

const Services = () => {
  return (
    <section className="px-4">
      <h2 className="text-black text-3xl font-extrabold mt-3 mb-1 anton-sc cursor-default">
        Our Services
      </h2>
      {serviceArray.map((service, index) => {
        return (
          <div className="flex flex-row mb-2" key={index}>
            <div className="flex flex-col justify-start">
              <i className={"mt-1 bx bx-" + service.icon + " bx-sm"}></i>
            </div>
            <div>
              <h2 className="text-black text-2xl md:text-3xl px-4 font-bold font-sans cursor-default">
                {service.name}
              </h2>
              <p className="font-medium font-sans text-black md:text-2xl pt-0.5 px-4 cursor-default">
                {service.description}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default Services;
