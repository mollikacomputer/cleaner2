import Head from "next/head";
import Link from "next/link";

const index = () => {
    return (
        <div className=''>
            <Head>
                <title> Service || Carpet Cleaning Service </title>
            </Head>
            <h2 className='text-5xl my-6' > Total Service  </h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16' >
            {/* {
                services.slice(0,3).map( service => <Service key={service?._id} service={service} >  
                </Service> )
            } */}
            </div>
            <div className='flex justify-center my-16'>
            <Link href={'/'} > <button class="btn btn-outline btn-primary">Show All Services </button>  </Link>
            </div>
        </div>
    );
};

export default index;