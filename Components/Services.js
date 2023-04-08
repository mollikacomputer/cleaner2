import Link from "next/link";
import Service from "./Service";

const Services = () => {
    const services = [
        {
          id: 0,
          title:"Carpet Clean California",
          description: "With snow melt in winter, rain in spring and fall, dust all summer, New York weather can take a toll on your carpet. Even without the weather, day-to-day life brings its share of dirt, dust, spills, odors and stains. You spent a lot of money on your carpet, so you want it to look nice and last a long time, but vacuuming alone won’t keep your carpets fresh. Dirt and debris gets caught down deep in the fibers where only a professional carpet cleaning can get it out. There are many places in California, CA where you can rent carpet cleaners or buy sprays that claim they will clean your carpets, but it just isn’t possible to get a carpet truly clean with retail equipment. You need All Green Carpet Clean California, CA for professional quality carpet cleaning.",
          image: `https://i.ibb.co/wSkx6zR/carpet-cleaning-banner-image.jpg`,
         
        },
        {
            id: 1,
            title:"Carpet Clean California",
            description: "With snow melt in winter, rain in spring and fall, dust all summer, New York weather can take a toll on your carpet. Even without the weather, day-to-day life brings its share of dirt, dust, spills, odors and stains. You spent a lot of money on your carpet, so you want it to look nice and last a long time, but vacuuming alone won’t keep your carpets fresh. Dirt and debris gets caught down deep in the fibers where only a professional carpet cleaning can get it out. There are many places in California, CA where you can rent carpet cleaners or buy sprays that claim they will clean your carpets, but it just isn’t possible to get a carpet truly clean with retail equipment. You need All Green Carpet Clean California, CA for professional quality carpet cleaning.",
            image: `https://i.ibb.co/vD8TvxC/carpet-cleaning-service-banner-image.jpg`,
            budget:99,
        },
        {
            id: 0,
            title:"Carpet Clean California",
            description: "With snow melt in winter, rain in spring and fall, dust all summer, New York weather can take a toll on your carpet. Even without the weather, day-to-day life brings its share of dirt, dust, spills, odors and stains. You spent a lot of money on your carpet, so you want it to look nice and last a long time, but vacuuming alone won’t keep your carpets fresh. Dirt and debris gets caught down deep in the fibers where only a professional carpet cleaning can get it out. There are many places in California, CA where you can rent carpet cleaners or buy sprays that claim they will clean your carpets, but it just isn’t possible to get a carpet truly clean with retail equipment. You need All Green Carpet Clean California, CA for professional quality carpet cleaning.",
            image: `https://i.ibb.co/mqrhtyb/professional-carpet-cleaningbanner-image.jpg`,
            budget:100,
        },
        // {
        //   id: 3,
        //   title:"Carpet Clean California",
        //   description: "With snow melt in winter, rain in spring and fall, dust all summer, New York weather can take a toll on your carpet. Even without the weather, day-to-day life brings its share of dirt, dust, spills, odors and stains. You spent a lot of money on your carpet, so you want it to look nice and last a long time, but vacuuming alone won’t keep your carpets fresh. Dirt and debris gets caught down deep in the fibers where only a professional carpet cleaning can get it out. There are many places in California, CA where you can rent carpet cleaners or buy sprays that claim they will clean your carpets, but it just isn’t possible to get a carpet truly clean with retail equipment. You need All Green Carpet Clean California, CA for professional quality carpet cleaning.",
        //   image: `https://i.ibb.co/fpyrSgd/flag.jpg`,
        //   budget:150,
        // },
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