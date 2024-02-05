import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Navigation, Autoplay } from "swiper/modules";
import { Rate } from "antd";
import { useTranslation } from "react-i18next";
import { Image } from "antd";
import { useGet } from "hooks";
import { getLocale } from "utils/storages";
import { Fragment } from "react";
import { imgUrl } from "service";
import { LOGO } from "assets/icon";

export const Section4 = () => {
  const { data } = useGet({
    url: `client/product/find/all?lang=${getLocale()}`,
    queryKey: ["alldatasporoduct", getLocale()],
  });
  console.log(data);
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
          {data?.data?.map((e) => (
            <Fragment key={e?.id}>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="text-4xl text-[#1E1E1E] font-bold text-center  max-md:text-3xl max-sm:text-2xl flex items-center justify-center gap-4"
              >
                <img
                  src={e?.file ? imgUrl + e?.file?.url_1 : LOGO}
                  className="w-20 h-20 object-contain"
                  alt="logo"
                />
                {e?.content?.title}
              </p>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="text-2xl text-[#1E1E1E] font-bold text-start mt-11  max-md:mt-6  max-md:text-xl max-sm:text-lg mb-6"
              >
                {e?.content?.description}
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
                {e?.list?.map((k, i) => (
                  <SwiperSlide key={i}>
                    <div className="rounded-md bg-white overflow-hidden h-[480px]">
                      <Swiper
                        autoplay={{
                          delay: 2000,
                          disableOnInteraction: false,
                        }}
                        pagination={true}
                        modules={[Autoplay, Pagination]}
                        className="mySwiperIn"
                      >
                        {k?.photos?.map((f) => (
                          <SwiperSlide key={f?.id}>
                            <Image
                              width={200}
                              height={270}
                              className="w-full h-[270px] object-cover object-center"
                              src={
                                f?.url_1
                                  ? imgUrl + f?.url_1
                                  : "https://www.w3schools.com/howto/img_avatar.png"
                              }
                              loading="lazy"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      <div className="p-5">
                        <Rate allowHalf defaultValue={5} />
                        <h5 className="text-[#0D0E25] font-semibold text-lg mt-1 mb-3">
                          {k?.content?.title}
                        </h5>
                        <p
                          className="text-sm text-[#475467] font-normal"
                          dangerouslySetInnerHTML={{
                            __html: k?.content?.description,
                          }}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
