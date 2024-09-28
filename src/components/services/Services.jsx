import serviceArray from "./ServiceArray";

const Services = () => {
  return (
    <div className="px-4">
      <h2 className="text-black font-black text-3xl mt-3 mb-1">Our Services</h2>
      {serviceArray.map((service, index) => {
        return (
          <div className="flex flex-row mb-2" key={index}>
            <div className="flex flex-col justify-start">
              <i className={"bg-gray-200 rounded mt-2 bx bx-"+service.icon}></i>
            </div>
            <div>
              <h2 className="text-black font-bold text-2xl px-4">
                {service.name}
              </h2>
              <p className="font-black text-black pt-0.5 px-4">
                {service.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Services;
