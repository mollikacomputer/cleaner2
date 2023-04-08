import Head from "next/head";
import AboutImage from '../../../public/About-us.svg';
const index = () => {
  return (
    <div class="hero min-h-screen bg-base-200" data-aos="fade-up">
      <Head>
        <title> About || Best Carpet Cleaning Service </title>
      </Head>
      <div class="hero-content flex-col lg:flex-row">
        <img
        //   src={AboutImage}
          src={'/About-us.svg'}
          class="max-w-sm rounded-lg shadow-2xl"
          alt="about us image"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          width={500}
          height={400}
        />
        <div
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default index;
