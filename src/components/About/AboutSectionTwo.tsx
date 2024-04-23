import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Why Choose Backlog Solution?"
          paragraph=""
          center
        />
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/mainAboutSectionImage2.png"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/mainAboutSectionImage2.png"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Client-Centric Approachs
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  At backlog Solution, we believe in building long-term
                  relationships with our clients. We prioritize understanding
                  your business goals, requirements, and challenges, allowing us
                  to develop custom software solutions that perfectly align with
                  your vision. We work closely with you throughout the project
                  lifecycle, ensuring transparent communication, timely updates,
                  and a seamless development experience.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Delivering Excellence Since Inception
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  With years of industry experience, backlog Solution. has
                  established a solid reputation as a trusted software company
                  in Dhaka. Our track record of successful project deliveries,
                  client satisfaction, and positive testimonials are a testament
                  to our unwavering commitment to excellence.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  MERN Technology Experts
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  At backlog Solution, we specialize in utilizing the power of
                  MERN (MongoDB, Express.js, React.js, and Node.js) stack to
                  develop state-of-the-art applications. Our skilled developers
                  are proficient in harnessing the capabilities of these
                  technologies to create dynamic, interactive, and feature-rich
                  web and mobile applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
