import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <h1 className="text-[32px] font-bold">
                  We reinforce aspiring businesses with end-to-end{" "}
                  <span className="text-primary">software solutions</span> and{" "}
                  <span className="text-primary">bring ideas to life</span>.
                </h1>
                <p className="text-[16px] font-medium text-gray-400 lg:mt-2">
                  At Backlog Solution, we are dedicated to bringing out the best
                  possible solutions at all development stages. Keeping in mind
                  your business intention, we put your products and services at
                  the forefront of our priority mindset.
                </p>

                <div className="flex items-center justify-start pr-16 lg:mt-10 lg:pr-0">
                  <Link
                    href="/about"
                    className="ease-in-up hidden rounded-lg bg-primary px-8 py-3 text-base font-medium text-white shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:px-6 xl:px-9"
                  >
                    About Us
                  </Link>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                  <Image
                    src="/images/about/Group.png"
                    alt="about-image"
                    fill
                    className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                  />
                  <Image
                    src="/images/about/Group.png"
                    alt="about-image"
                    fill
                    className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
