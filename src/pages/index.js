import { Inter } from "next/font/google";
import Carousel from "../../Components/Carousel";
import Status from "../../Components/Status";
import Comments from "../../Components/Comments";
import Service from "../../Components/Service";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ services }) {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="md:container md:mx-auto">
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"> */}
      <div className="">
        <Carousel />
      </div>

      <div className=" bg-white my-16 items-center justify-center">
        <div className="flex justify-center">
          <h2 className="text-3xl mt-16"> Our Services</h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
          {services.map((service) => (
            <Service key={service?.id} service={service}></Service>
          ))}
        </div>
        <div className="flex justify-center my-16">
          <Link href={"/"}>
            <button class="btn btn-outline btn-primary mb-16">
              Back To Home
            </button>
          </Link>
        </div>
      </div>

      <Status />
      <Comments />
    </main>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();
  return {
    props: {
      services: data,
    },
  };
};
