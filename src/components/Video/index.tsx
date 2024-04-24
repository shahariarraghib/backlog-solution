import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Video = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="The process"
          paragraph="Our Working Process To Help Your Boost Your Business"
          center
        />
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/Group2.png"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/Group2.png"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="">
              <div className="mb-9 lg:-ml-20">
                <div className="items-center justify-center lg:flex">
                  <div className="mr-10 flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80px"
                      height="80px"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                    >
                      <path
                        d="M357.901838 771.144963h286.820639a19.498771 19.498771 0 0 1 19.498771 19.498772v178.004914a19.498771 19.498771 0 0 1-10.692875 17.611793 339.027027 339.027027 0 0 1-152.216216 37.739558 339.027027 339.027027 0 0 1-152.216216-37.739558 19.498771 19.498771 0 0 1-10.692875-17.611793v-178.004914a19.498771 19.498771 0 0 1 19.498772-19.498772z"
                        fill="#656D78"
                      />
                      <path
                        d="M501.312157 1024a340.914005 340.914005 0 0 1-152.216216-37.739558 19.498771 19.498771 0 0 1-10.692875-17.611793v-178.004914a19.498771 19.498771 0 0 1 19.498772-19.498772h286.820639a19.498771 19.498771 0 0 1 19.498771 19.498772v178.004914a19.498771 19.498771 0 0 1-10.692875 17.611793 340.914005 340.914005 0 0 1-152.216216 37.739558z m-131.459459-62.899263a293.739558 293.739558 0 0 0 262.918919 0v-158.506142H369.852698z"
                        fill="#656D78"
                      />
                      <path
                        d="M154.737219 467.341523a354.751843 352.235872 90 1 0 704.471744 0 354.751843 352.235872 90 1 0-704.471744 0Z"
                        fill="#ED5564"
                      />
                      <path
                        d="M506.973091 821.464373a354.751843 354.751843 0 1 1 352.235872-354.751842 354.12285 354.12285 0 0 1-352.235872 354.751842z m0-677.425061a323.302211 323.302211 0 1 0 320.786241 323.302211 322.673219 322.673219 0 0 0-320.786241-323.302211z"
                        fill="#ED5564"
                      />
                      <path
                        d="M367.96572 861.719902a15.724816 15.724816 0 0 1 0-31.449632h267.95086a15.724816 15.724816 0 0 1 0 31.449632H367.96572z"
                        fill="#434A54"
                      />
                      <path
                        d="M545.970634 938.457002H366.707735a15.724816 15.724816 0 0 1 0-31.449631h179.262899a15.724816 15.724816 0 0 1 0 31.449631z"
                        fill="#434A54"
                      />
                      <path
                        d="M418.28513 288.707617L496.909209 440.29484 576.16228 288.707617h66.044226L544.083656 465.454545h67.302211v31.449632H525.84287v43.400491h85.542997v31.449632H525.84287v76.108108H469.233533V571.7543H383.061543v-31.449632H469.233533v-42.771498H383.061543V465.454545h66.673219L351.611912 288.707617z"
                        fill="#FFCE54"
                      />
                      <path
                        d="M787.503803 182.407862a15.724816 15.724816 0 0 1-10.692874-4.402948 15.724816 15.724816 0 0 1 0-22.014742L846.629111 82.398034a15.724816 15.724816 0 0 1 22.643734 22.014742l-70.447174 73.592138a15.724816 15.724816 0 0 1-11.321868 4.402948z"
                        fill="#E9605D"
                      />
                      <path
                        d="M242.167194 182.407862a15.724816 15.724816 0 0 1-11.321867-5.031941L159.76916 104.412776a15.724816 15.724816 0 1 1 22.643734-22.014742l71.076167 73.592138a15.724816 15.724816 0 0 1-11.321867 26.41769z"
                        fill="#E9605D"
                      />
                      <path
                        d="M504.45712 111.331695a15.724816 15.724816 0 0 1-15.724815-15.724815V15.724816a15.724816 15.724816 0 0 1 31.449631 0v79.882064a15.724816 15.724816 0 0 1-15.724816 15.724815z"
                        fill="#E9605D"
                      />
                    </svg>
                  </div>
                  <div>
                    {" "}
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Requirements and Planning
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      You, the clients, talk. We listen. We understand what you
                      need. We tell you what you deserve. We discuss and smooth
                      out the details. Then we sit among ourselves and start
                      planning it down to the core.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-9 lg:ml-20">
                <div className="items-center justify-center lg:flex">
                  <div className="mr-10 flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80px"
                      height="80px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15 14.25C13.3431 14.25 12 15.5931 12 17.25C12 18.9069 13.3431 20.25 15 20.25C16.6569 20.25 18 18.9069 18 17.25C18 15.5931 16.6569 14.25 15 14.25ZM10.5 17.25C10.5 14.7647 12.5147 12.75 15 12.75C17.4853 12.75 19.5 14.7647 19.5 17.25C19.5 19.7353 17.4853 21.75 15 21.75C12.5147 21.75 10.5 19.7353 10.5 17.25Z"
                        fill="#080341"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.75 8.25H8.25V6.75H15.75V8.25Z"
                        fill="#080341"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.75 11.25H8.25V9.75H15.75V11.25Z"
                        fill="#080341"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.25 3H16.0607L18.75 5.68934V12H17.25V6.31066L15.4393 4.5H6.75V19.5H9.75V21H5.25V3Z"
                        fill="#080341"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.75 14.25H8.25V12.75H9.75V14.25Z"
                        fill="#080341"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.5791 16.0854L14.9207 15.4146L15.4634 16.5H16.4999V18H14.5364L13.5791 16.0854Z"
                        fill="#080341"
                      />
                    </svg>
                  </div>
                  <div>
                    {" "}
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Execution and Review
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      We are not just done after we finish preparing a product
                      or service. We again sit down with you, the client, and
                      let you see what we have created. Now we discuss the
                      minute technicalities - things that differentiate
                      good-enough from perfect. We then review everything else -
                      not because our work is not finished but because you are
                      well-worthy of a second look.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-1 lg:-ml-20">
                <div className="items-center justify-center lg:flex">
                  <div className="mr-10 flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80px"
                      height="80px"
                      viewBox="-18 0 117 117"
                      version="1.1"
                    >
                      <title />

                      <desc />

                      <defs />

                      <g
                        fill="none"
                        fill-rule="evenodd"
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                      >
                        <g fill-rule="nonzero" id="rocket">
                          <path
                            d="M76.1,100.2 C78.4,100.2 80.2,98.4 80.2,96.1 L80.2,87.7 C80.2,79.5 76.9,71.8 71,66.2 C71.4,63.6 71.7,61 71.7,58.5 C71.7,30 44.6,2.5 43.4,1.4 C42.6,0.6 41.6,0.2 40.5,0.2 C39.4,0.2 38.4,0.6 37.6,1.4 C36.5,2.6 9.5,30.1 9.5,58.5 C9.5,61 9.7,63.5 10.1,66 C4.2,71.7 0.8,79.4 0.8,87.7 L0.8,96.1 C0.8,98.4 2.6,100.2 4.9,100.2 C7.2,100.2 9,98.4 9,96.1 L9,87.7 C9,83.4 10.3,79.3 12.5,75.8 C13.7,79.5 15.4,83.4 17.4,87.3 C18.1,88.7 19.5,89.5 21.1,89.5 L36.5,89.5 L36.5,96.1 C36.5,98.4 38.3,100.2 40.6,100.2 C42.9,100.2 44.7,98.4 44.7,96.1 L44.7,89.5 L60.2,89.5 C61.7,89.5 63.1,88.6 63.9,87.3 C65.9,83.5 67.5,79.7 68.7,76 C70.9,79.5 72.1,83.5 72.1,87.7 L72.1,96.1 C72,98.3 73.8,100.2 76.1,100.2 Z M57.6,81.3 L44.6,81.3 L44.6,74.7 C44.6,72.4 42.8,70.6 40.5,70.6 C38.2,70.6 36.4,72.4 36.4,74.7 L36.4,81.3 L23.6,81.3 C21.3,76.4 19.6,71.6 18.7,67.2 C18.7,66.9 18.6,66.6 18.5,66.3 C18,63.6 17.7,61 17.7,58.5 C17.7,38.7 33.8,18.1 40.5,10.4 C47.3,18.1 63.5,38.6 63.5,58.5 C63.5,65.4 61.5,73.1 57.6,81.3 Z"
                            fill="#4A4A4A"
                            id="Shape"
                          />

                          <path
                            d="M25.9,46.9 C25.9,55 32.5,61.7 40.7,61.7 C48.9,61.7 55.5,55.1 55.5,46.9 C55.5,38.7 48.9,32.1 40.7,32.1 C32.5,32.1 25.9,38.8 25.9,46.9 Z M40.7,40.4 C44.3,40.4 47.3,43.3 47.3,47 C47.3,50.7 44.4,53.6 40.7,53.6 C37.1,53.6 34.1,50.7 34.1,47 C34.1,43.3 37.1,40.4 40.7,40.4 Z"
                            fill="#17AB13"
                            id="Shape"
                          />

                          <path
                            d="M21.9,112.7 L21.9,99 C21.9,96.7 20.1,94.9 17.8,94.9 C15.5,94.9 13.7,96.7 13.7,99 L13.7,112.7 C13.7,115 15.5,116.8 17.8,116.8 C20.1,116.8 21.9,115 21.9,112.7 Z"
                            fill="#17AB13"
                            id="Shape"
                          />

                          <path
                            d="M67.3,112.7 L67.3,99 C67.3,96.7 65.5,94.9 63.2,94.9 C60.9,94.9 59.1,96.7 59.1,99 L59.1,112.7 C59.1,115 60.9,116.8 63.2,116.8 C65.4,116.8 67.3,115 67.3,112.7 Z"
                            fill="#17AB13"
                            id="Shape"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Launch
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      After we have made sure that your product or service is
                      ready to hit the market, and you, the client, feels
                      comfortable with it, we will begin the launch phase, in
                      which we will release the product or service to your
                      desired platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
