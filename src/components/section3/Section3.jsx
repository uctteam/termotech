import {
  CheckCircleOutlined,
  FireOutlined,
  LoadingOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

export const Section3 = ({ data, allFour }) => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto">
      <div className="my-14  max-md:my-10" id="section3">
        <div className="flex gap-16 items-center justify-center max-lg:flex-col max-md:gap-8">
          <div className="w-[40%] max-lg:w-full">
            <h4
              data-aos="fade-up"
              className="text-lg text-[#18A0FB] max-lg:mx-auto max-lg:text-center max-md:text-sm"
            >
              {t("header.head2")}
            </h4>
            <h5
              data-aos="fade-up"
              className="text-4xl font-bold text-[#373435] mt-3 mb-8 max-w-[458px] max-lg:mx-auto max-lg:text-center max-md:text-3xl max-sm:text-2xl"
            >
              {data?.content?.title}
            </h5>
            <p
              data-aos="fade-up"
              className="text-xl text-[#475467] max-w-[478px] max-lg:mx-auto max-lg:text-center max-md:text-lg max-sm:text-sm"
            >
              {data?.content?.description}
            </p>
          </div>
          <div className="w-[60%] max-lg:w-full">
            <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-2">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="hover:bg-[#18A0FB] rounded-3xl hover:scale-105 transition ease-linear group border-r border-b max-md:border-x max-md:border-y-0"
              >
                <div className="p-7 max-md:p-5">
                  <div className="flex items-center justify-start gap-5">
                    <div className="flex items-center justify-center w-[40px] h-[40px] bg-blue-100 text-blue-600 rounded-md text-lg group-hover:text-white group-hover:bg-blue-400 transition ease-linear">
                      <CheckCircleOutlined />
                    </div>
                    <p className="text-lg text-[#0D0E25] group-hover:text-white transition ease-linear max-md:text-base">
                      {allFour?.[0]?.content?.title}
                    </p>
                  </div>
                  <p className="mt-5 text-base text-[475467] group-hover:text-white transition ease-linear max-md:mt-3 max-md:text-sm">
                    {allFour?.[0]?.content?.description}
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="hover:bg-[#18A0FB] rounded-3xl hover:scale-105 transition ease-linear group border-l border-b max-md:border-x max-md:border-y-0"
              >
                <div className="p-7 max-md:p-5">
                  <div className="flex items-center justify-start gap-5">
                    <div className="flex items-center justify-center w-[40px] h-[40px] bg-blue-100 text-blue-600 rounded-md text-lg group-hover:text-white group-hover:bg-blue-400 transition ease-linear">
                      <WifiOutlined />
                    </div>
                    <p className="text-lg text-[#0D0E25] group-hover:text-white transition ease-linear max-md:text-base">
                      {allFour?.[1]?.content?.title}
                    </p>
                  </div>
                  <p className="mt-5 text-base text-[475467] group-hover:text-white transition ease-linear max-md:mt-3 max-md:text-sm">
                    {allFour?.[1]?.content?.description}
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="hover:bg-[#18A0FB] rounded-3xl hover:scale-105 transition ease-linear group border-r border-t max-md:border-x max-md:border-y-0"
              >
                <div className="p-7 max-md:p-5">
                  <div className="flex items-center justify-start gap-5">
                    <div className="flex items-center justify-center w-[40px] h-[40px] bg-blue-100 text-blue-600 rounded-md text-lg group-hover:text-white group-hover:bg-blue-400 transition ease-linear">
                      <FireOutlined />
                    </div>
                    <p className="text-lg text-[#0D0E25] group-hover:text-white transition ease-linear max-md:text-base">
                      {allFour?.[2]?.content?.title}
                    </p>
                  </div>
                  <p className="mt-5 text-base text-[475467] group-hover:text-white transition ease-linear max-md:mt-3 max-md:text-sm">
                    {allFour?.[2]?.content?.description}
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="hover:bg-[#18A0FB] rounded-3xl hover:scale-105 transition ease-linear group border-l border-t max-md:border-x max-md:border-y-0"
              >
                <div className="p-7 max-md:p-5">
                  <div className="flex items-center justify-start gap-5">
                    <div className="flex items-center justify-center w-[40px] h-[40px] bg-blue-100 text-blue-600 rounded-md text-lg group-hover:text-white group-hover:bg-blue-400 transition ease-linear">
                      <LoadingOutlined />
                    </div>
                    <p className="text-lg text-[#0D0E25] group-hover:text-white transition ease-linear max-md:text-base">
                      {allFour?.[3]?.content?.title}
                    </p>
                  </div>
                  <p className="mt-5 text-base text-[475467] group-hover:text-white transition ease-linear max-md:mt-3 max-md:text-sm">
                    {allFour?.[3]?.content?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
