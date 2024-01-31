import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { imgUrl } from "service";
import { useTranslation } from "react-i18next";

export const Section6 = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto">
      <div className="my-14  max-md:my-10" id="section6">
        <h4
          data-aos="fade-up"
          className="text-lg text-[#18A0FB] max-lg:mx-auto max-lg:text-center max-md:text-sm text-center"
        >
          {t("header.head3")}
        </h4>
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
              <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                <div className="col-span-1 max-md:order-2">
                  <img
                    src={imgUrl + e?.file?.url_1}
                    className="w-full object-contain object-right max-h-[520px]"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="col-span-1 max-md:order-1">
                  <h5 className="text-4xl font-bold text-[#373435] mt-3 mb-8 max-w-[498px] max-lg:mx-auto max-lg:text-center max-md:text-3xl max-sm:text-2xl">
                    {e?.content?.title}
                  </h5>
                  <p className="text-xl text-[#475467] max-w-[498px] max-lg:mx-auto max-lg:text-center max-md:text-lg max-sm:text-sm">
                    {e?.content?.description}
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
