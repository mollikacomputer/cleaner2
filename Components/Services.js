import Link from "next/link";
import Service from "./Service";
import { useState } from "react";

const Services = () => {
    
  const [services, setServices] = useState([]);
  fetch("http://localhost:3000/api/services")
    .then((res) => res.json())
    .then((data) => setServices(data));

  return (
    <div className="bg-white my-16 items-center justify-center">
      <h2 className="text-5xl my-6">
        {/* Total Service : {services.length} */}
        Our All Services
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
        {services.slice(0, 3).map((service) => (
          <Service key={service?._id} service={service}></Service>
        ))}
      </div>
      <div className="flex justify-center my-16">
        <Link href={"/"}>
          {" "}
          <button class="btn btn-outline btn-primary">
            Show All Services{" "}
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Services;
