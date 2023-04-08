import Link from "next/link";
import Service from "./Service";

const Services = () => {
    const services = [
        {
          id: 0,
          icon: `https://i.ibb.co/fpyrSgd/flag.jpg`,
          quantity: 5,
          name: "Countries",
        },
        {
          id: 1,
          icon: `https://i.ibb.co/qrCv4T5/projects.jpg`,
          quantity: "6+",
          name: "Complete projects",
        },
        {
          id: 2,
          icon: `https://i.ibb.co/HGRrVMg/people.jpg`,
          quantity: "94+",
          name: "happy clients",
        },
        {
          id: 3,
          icon: `https://i.ibb.co/n7K6JWn/feedback.jpg`,
          quantity: "3k+",
          name: "Publick actions",
        },
        // {
        //   id: 4,
        //   icon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb1w9XivnQ-AKv0B3Sucz3DjGHCvvtHu1tPQ&usqp=CAU`,
        //   quantity: "3k+",
        //   name: "Publick actions",
        // },
      ];
    return (
        <div className='bg-white my-16 items-center justify-center'>
            <h2 className='text-5xl my-6' >
                 {/* Total Service : {services.length} */}
                 Our All Services
                  </h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16' >
           {
                services.slice(0,3).map( service => <Service key={service?._id} service={service} >  
                </Service> )
            } 
            
            </div>
            <div className='flex justify-center my-16'>
            <Link href={'/'} > <button class="btn btn-outline btn-primary">Show All Services </button>  </Link>
            </div>
        </div>
    );
};

export default Services;