import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Image } from "antd";
import { useTranslation } from "react-i18next";
import { imgUrl } from "service";

export const Section8 = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto">
      <div className="py-14 max-md:py-10" id="section8">
        <h5
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="text-lg text-[#18A0FB] text-center max-lg:text-center max-md:text-sm"
        >
          {t("header.head6")}
        </h5>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="text-4xl mb-11 text-[#1E1E1E] font-bold text-center mx-auto max-md:text-3xl max-sm:text-2xl max-w-[728px]"
        >
          {t("header.head6")}
        </p>
        <Swiper
          slidesPerView={4}
          spaceBetween={24}
          freeMode={true}
          breakpoints={{
            1: {
              slidesPerView: 1.5,
            },
            576: {
              slidesPerView: 2.5,
            },
            960: {
              slidesPerView: 4,
            },
          }}
          modules={[FreeMode]}
          className="mySwiperTop"
        >
          {data?.map((e, i) => (
            <SwiperSlide key={i}>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className={`w-full`}
              >
                <Image
                  src={imgUrl + e?.file?.url_1}
                  width={200}
                  className="w-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
