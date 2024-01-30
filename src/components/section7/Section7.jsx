import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { SECTION7IMG } from "assets/imgs";
import { Image } from "antd";
import { useTranslation } from "react-i18next";

const data = [
  {
    img: SECTION7IMG,
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/61c4da8eb1b30a201b9669f2/1696691175374-MJY4VWB1KS8NU3DE3JK1/Sounds-of-Nature.jpg",
  },
  {
    img: SECTION7IMG,
  },
  {
    img: SECTION7IMG,
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/61c4da8eb1b30a201b9669f2/1696691175374-MJY4VWB1KS8NU3DE3JK1/Sounds-of-Nature.jpg",
  },
  {
    img: SECTION7IMG,
  },
  {
    img: SECTION7IMG,
  },
  {
    img: SECTION7IMG,
  },
  {
    img: SECTION7IMG,
  },
];

export const Section7 = () => {
  const { t } = useTranslation();
  return (
    <div className="py-14 max-md:py-10" id="section7">
      <h5
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="text-lg text-[#18A0FB] text-center max-lg:text-center max-md:text-sm"
      >
        {t("header.head5")}
      </h5>
      <p
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="text-4xl mb-11 text-[#1E1E1E] font-bold text-center mx-auto max-md:text-3xl max-sm:text-2xl max-w-[728px]"
      >
        фотографии интенсивного рабочего процесса
      </p>
      <Swiper
        slidesPerView={5.5}
        spaceBetween={24}
        freeMode={true}
        breakpoints={{
          1: {
            slidesPerView: 2.5,
          },
          576: {
            slidesPerView: 4.5,
          },
          960: {
            slidesPerView: 5.5,
          },
        }}
        modules={[FreeMode]}
        className="mySwiperTop"
      >
        {data?.map((e, i) => (
          <SwiperSlide key={i}>
            <div
              data-aos="fade-up"
              className={`w-full ${
                i % 2 == 0 ? "mt-[200px] max-lg:mt-24" : ""
              }`}
            >
              <Image
                src={e?.img}
                width={200}
                height={500}
                className="w-full h-full object-cover object-center rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
