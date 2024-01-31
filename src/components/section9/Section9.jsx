import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { imgUrl } from "service";

export const Section9 = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="py-14 max-md:py-10" id="section9">
      <h5
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="text-lg text-[#18A0FB] text-center max-lg:text-center max-md:text-sm"
      >
        {t("header.head7")}
      </h5>
      <p
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="text-4xl mb-11 text-[#1E1E1E] font-bold text-center mx-auto max-md:text-3xl max-sm:text-2xl max-w-[728px]"
      >
        {t("header.head7")}
      </p>
      <Swiper
        slidesPerView={5}
        spaceBetween={24}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 3,
          },
          960: {
            slidesPerView: 5,
          },
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiperTop"
      >
        {data?.map((e, i) => (
          <SwiperSlide key={i}>
            <div
              data-aos="fade-up"
              className="bg-[#F7F8F8] rounded-lg flex items-center justify-center h-[110px]"
            >
              <img
                src={imgUrl + e?.file?.url_1}
                className="w-[150px] h-[50px] object-contain object-center max-sm:w-[100px] max-sm:h-[33px]"
                alt=""
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
