import Head from "next/head";
import Link from "next/link";

const serviceId = ({ service }) => {
  console.log("service from serviceID", service);
  return (
    <div className="">
      <Head>
        <title> Service || Carpet Cleaning Service </title>
      </Head>

      <div className="grid sm:w-full md:w-6/12  grid-cols-1 place-content-stretch mx-auto my-16">
        <div
          class="card card-compact  bg-base-100 shadow-xl"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <figure>
            <img
              width={550}
              height={300}
              src={service.image}
              alt="service image"
              alt="image"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title"> {service.title} </h2>
            <p>{service.body}</p>
            <Link href={"/services"}>
              <button class="btn btn-outline btn-primary">Back to Service</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.serviceId}`
  );
  const data = await res.json();
  return {
    props: {
      service: data,
    },
  };
};

export const getStaticPaths = async () => {
  // at this link will be single server data check browser first
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const services = await res.json();
  const paths = services.map((service) => {
    return {
      params: {
        serviceId: `${service.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export default serviceId;
