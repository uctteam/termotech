import { SECTION1IMG } from "assets/imgs";
import { Header } from "containers";
import { imgUrl } from "service";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

export const Section1 = ({ data, data2 }) => {
  return (
    <>
      <div id="section1" className="h-[100vh] min-h-[800px] relative">
        <div className="absolute z-10 w-full h-[100vh] min-h-[800px] top-0 left-0">
          <Swiper
            effect={"fade"}
            speed={2000}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Autoplay, EffectFade]}
            className="mySwiperIn"
          >
            {data?.photos?.map((e) => (
              <SwiperSlide key={e?.id}>
                <img
                  className="w-full h-[100vh] min-h-[800px] object-cover object-center"
                  src={e ? imgUrl + e?.url_1 : SECTION1IMG}
                  alt="header"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="h-full relative z-20">
          <div className="bg-[#303030d9]">
            <Header data={data2} />
          </div>
          <div className="container mx-auto h-screen">
            <div className="flex flex-col justify-center items-center text-center h-full">
              <h1
                data-aos="fade-up"
                className="text-7xl max-w-[806px] font-bold text-white max-md:text-5xl max-sm:text-4xl text-center"
              >
                {data?.content?.title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
