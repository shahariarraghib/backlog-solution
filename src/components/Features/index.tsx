import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-gray-light py-16 dark:bg-[#121723] md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Our services"
            paragraph="Web, app and game development as well as creative marketing is also our forte.
            Just check our works section for validation."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>

        <div className=" right-0 top-0 z-[-1] mt-0 opacity-30 lg:opacity-100"></div>
      </section>
    </>
  );
};

export default Features;
