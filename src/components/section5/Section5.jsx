import { SECTION51IMG, SECTION52IMG, SECTION53IMG } from "assets/imgs";
import { useTranslation } from "react-i18next";

export const Section5 = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto">
      <div className="py-14  max-md:py-10" id="section5">
        <div className="flex gap-16 items-center justify-center max-lg:flex-col max-md:gap-8">
          <div className="w-[40%] max-lg:w-full">
            <h4
              data-aos="fade-up"
              className="text-lg text-[#18A0FB] max-lg:mx-auto max-lg:text-center max-md:text-sm"
            >
              {t("header.head4")}
            </h4>
            <h5
              data-aos="fade-up"
              className="text-4xl font-bold text-[#373435] mt-3 mb-8 max-w-[498px] max-lg:mx-auto max-lg:text-center max-md:text-3xl max-sm:text-2xl"
            >
              обеспечение качественной продукцией в каждый дом
            </h5>
            <p
              data-aos="fade-up"
              className="text-xl text-[#475467] max-w-[498px] max-lg:mx-auto max-lg:text-center max-md:text-lg max-sm:text-sm"
            >
              Because panto was very serious about designing furniture for our
              environment, using a very expensive and famous capital but at a
              relatively low price
            </p>
          </div>
          <div className="w-[60%] max-lg:w-full flex items-end justify-start gap-7 max-md:flex-col max-md:gap-3">
            <div className="grid grid-cols-1 justify-center items-start w-[223px] gap-9 max-md:grid-cols-2 max-md:w-full max-md:gap-3">
              <img
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                src={SECTION51IMG}
                alt=""
                
                className="h-[250px] w-full object-cover object-center rounded-lg shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"
              />
              <img
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                src={SECTION52IMG}
                
                alt=""
                className="h-[250px] w-full object-cover object-center rounded-lg shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"
              />
            </div>
            <div className="w-[calc(100%-223px)] h-full relative max-md:w-full">
              <img
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                src={SECTION53IMG}
                
                alt=""
                className="w-full object-cover object-center rounded-lg relative z-20 shadow-[rgba(234,_187,_45,_0.2)_0px_50px_30px_-20px]"
              />
              <div className="bg-[#F7F7F7] w-[495px] h-[422px] rounded-lg absolute bottom-1/4 left-1/4 max-md:hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
