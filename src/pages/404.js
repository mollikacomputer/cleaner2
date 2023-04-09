import Image from "next/image";

const Error = () => {
  return (
    <div className=" card sm:w-96 md:w-8/12 lg:full bg-base-100 text-black-content my-16 mx-auto">
        <div className="card-body">
      <Image src="/404.jpg" width={500} height={500}></Image>

        </div>
    </div>
  );
};

export default Error;
