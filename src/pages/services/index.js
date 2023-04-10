import Service from "../../../Components/Service";
const index = ({services}) => { 
  return (
    <div className="bg-white my-16 items-center justify-center">
      <h2 className="text-5xl my-6">
        Our All Services
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
        {services.map((service) => (
          <Service key={service?.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};
export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const data = await res.json();
    return {
      props: {
        services: data,
      },
    };
  };
export default index;
