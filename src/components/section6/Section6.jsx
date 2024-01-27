import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { SECTION6IMG } from "assets/imgs";

const data = [
  {
    img: SECTION6IMG,
    h4: "наши продукты",
    h5: "loorem ipsum de fleta fletcha sondera",
    p: "Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price",
  },
  {
    img: SECTION6IMG,
    h4: "наши продукты",
    h5: "loorem ipsum de fleta fletcha sondera",
    p: "Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price",
  },
];

export const Section6 = () => {
  return (
    <div className="container mx-auto">
      <div className="my-14  max-md:my-10" id="section6">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiperOne"
        >
          {data?.map((e, i) => (
            <SwiperSlide key={i}>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="grid grid-cols-2 gap-6 max-md:grid-cols-1"
              >
                <div className="col-span-1 max-md:order-2">
                  <img
                    src={e?.img}
                    className="w-full object-contain object-left max-h-[520px]"
                    alt=""
                  />
                </div>
                <div className="col-span-1 max-md:order-1">
                  <h4 className="text-lg text-[#18A0FB] max-lg:mx-auto max-lg:text-center max-md:text-sm">
                    {e?.h4}
                  </h4>
                  <h5 className="text-4xl font-bold text-[#373435] mt-3 mb-8 max-w-[498px] max-lg:mx-auto max-lg:text-center max-md:text-3xl max-sm:text-2xl">
                    {e?.h5}
                  </h5>
                  <p className="text-xl text-[#475467] max-w-[498px] max-lg:mx-auto max-lg:text-center max-md:text-lg max-sm:text-sm">
                    {e?.p}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
