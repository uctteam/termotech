import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Navigation, Autoplay } from "swiper/modules";
import {
  C111,
  C112,
  C121,
  C122,
  C131,
  C132,
  C141,
  C142,
  C143,
  C144,
  C145,
  C146,
  C151,
  C152,
  C153,
  C154,
  C161,
  C162,
  C163,
  C164,
  C165,
  C166,
  C167,
  C171,
  C172,
  C173,
  C174,
  C175,
  C176,
  C177,
} from "assets/imgs";
import { Rate } from "antd";
import { useTranslation } from "react-i18next";
import { Image } from "antd";

const data1 = [
  {
    img: [C111, C112],
    h5: "PVC panel",
    p: "Razmer 1,22*2,44 <br/> 1,22*2,80 <br/> Qalinligi 3mm",
  },
  {
    img: [C121, C122],
    h5: "PVC panel",
    p: "Razmer 1,22*2,44 <br/> 1,22*2,80 <br/> Qalinligi 3mm",
  },
  {
    img: [C131, C132],
    h5: "PVC panel",
    p: "Razmer 1,22*2,44 <br/> 1,22*2,80 <br/> Qalinligi 3mm",
  },
  {
    img: [C141, C142, C143, C144, C145, C146],
    h5: "“Decorative plastic panel” devor uchun",
    p: "Razmer 1,22*2,44 <br/> 1,22*2,80 <br/> Qalinligi 3mm",
  },
  {
    img: [C151, C152, C153, C154],
    h5: "Decorative plastic panel va Decorative MDF panel ,devor uchun",
    p: "Razmer eni 25smlik<br/> Qalinligi 2xil 5,5mm va 6,5 mm",
  },
  {
    img: [C161, C162, C163, C164, C165, C166, C167],
    h5: "DECORATIVE BAGET MDF",
    p: "",
  },
  {
    img: [C171, C172, C173, C174, C175, C176, C177],
    h5: "DECORATIVE BAGET MDF",
    p: "",
  },
];

export const Section4 = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#F7F7F7]">
      <div className="py-14 max-md:py-10" id="section4">
        <div className="container mx-auto">
          <h5
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="text-lg text-[#18A0FB] text-center max-lg:text-center max-md:text-sm"
          >
            {t("header.head3")}
          </h5>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="text-4xl text-[#1E1E1E] font-bold text-center  max-md:text-3xl max-sm:text-2xl"
          >
            {t("section4.text")}
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="text-2xl text-[#1E1E1E] font-bold text-start mt-11  max-md:mt-6  max-md:text-xl max-sm:text-lg mb-6"
          >
            Diamond decor panel
          </p>
          <Swiper
            slidesPerView={4}
            spaceBetween={24}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              1: {
                slidesPerView: 1.2,
              },
              576: {
                slidesPerView: 2,
              },
              960: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiperTop"
          >
            {data1?.map((e, i) => (
              <SwiperSlide key={i}>
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="rounded-md bg-white overflow-hidden h-[465px]"
                >
                  <Swiper
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[Autoplay, Pagination]}
                    className="mySwiperIn"
                  >
                    {e?.img?.map((k, i) => (
                      <SwiperSlide key={i}>
                        <Image
                          src={k}
                          width={200}
                          height={240}
                          loading="lazy"
                          className="w-full h-[240px] object-cover object-center"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="p-5">
                    <Rate allowHalf defaultValue={5} />
                    <h5 className="text-[#0D0E25] font-semibold text-lg mt-1 mb-3">
                      {e?.h5}
                    </h5>
                    <p
                      className="text-sm text-[#475467] font-normal"
                      dangerouslySetInnerHTML={{ __html: e?.p }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
