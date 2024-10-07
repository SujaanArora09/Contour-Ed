"use client";

const Hero = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46 ">
        

        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-full lg:w-1/2 mb-10">
              <h1 className="mb-5 pr-16 text-6xl font-bold text-black dark:text-white">
                Where <br /> We {"   "}
                <span className="relative text-[#007AFF] inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-[#FFE5C2] dark:before:bg-titlebgdark">
                  Tutor
                </span>
              </h1>
              <p>
                Join <b>3,500+</b> Happy Students Tutored at Contour
              </p>

              <div className="mt-10 relative">
                <img
                  src="/images/shape/line.svg"
                  alt="shape"
                  className="absolute -top-6 left-0 z-10"
                />

                <p className="mt-5 text-black dark:text-white">
                  Scroll down to find out where you can join our classes
                  in-person, or online from the comfort of your home. We help
                  students across Australia achieve their dream ATARs by
                  preparing them for VCE and Pre-VCE subjects. We also run
                  Medical Preparation Programs for UCAT and MMI!
                </p>
              </div>
            </div>

            <div className="animate_right md:w-full lg:w-1/2">
              <div className="relative 2xl:-mr-7.5">
                <img
                  src="/images/shape/shape-1.png"
                  alt="shape"
                  width={200}
                  height={200}
                  className="absolute -left-30 top-0"
                />
                <img
                  src="/images/shape/shape-2.png"
                  alt="shape"
                  className="absolute top-6 -right-15 z-10"
                />

                <div className="relative aspect-[555/602] w-full">
                  <div className="h-[44%] flex flex-row gap-3 mb-3 ">
                    <img
                      className="shadow-solid-l aspect-square rounded-3xl"
                      src="/images/hero/1.png"
                      alt="Hero"
                    />
                    <img
                      className="shadow-solid-l aspect-square rounded-3xl"
                      src="/images/hero/4.png"
                      alt="Hero"
                    />
                  </div>
                  <div className="h-1/2 w-full flex flex-row gap-3 bg-cover ">
                    <img
                      className="shadow-solid-l rounded-3xl"
                      src="/images/hero/3.png"
                      alt="Hero"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-c-1390 mx-auto relative">
          <iframe
            src="https://my.atlist.com/map/71e1d41a-2600-460b-b59f-e58282b84ebf?share=true"
            allow="geolocation 'self' https://my.atlist.com"
            width="100%"
            height="800px"
            loading="lazy"
            id="atlist-embed"
            className="pointer-events-auto relative rounded-2xl"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Hero;
