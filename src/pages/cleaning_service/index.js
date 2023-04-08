import Link from "next/link";

const index = () => {
    return (
        <div>
            <h2 className="text-3xl" > Our Cleaning Service </h2>
            <Link href={"/cleaning_service/packages"} > Check Our Offer </Link>
        </div>
    );
};

export default index;