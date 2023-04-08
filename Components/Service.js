const Service = ({service}) => {
    return (
      <div class="card card-compact  bg-base-100 shadow-xl"
      data-aos="flip-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      >
        <figure>
          <img width={450} height={200} src={service.image} alt="service image" alt="image" />
        </figure>
        <div class="card-body">
          <h2 class="card-title"> {service.title} </h2>
          <p>{service.description}</p>
          <h3 className="text-3xl" >My Budget ${service.budget} </h3>
        </div>
      </div>
    );
  };
  
  export default Service;