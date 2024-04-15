import {
  FacebookOutlined,
  FileTextOutlined,
  GlobalOutlined,
  InstagramOutlined,
  MailOutlined,
  ShakeOutlined,
  UpCircleOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { getLocale } from "utils/locales/getLocale";
import StarfieldAnimation from "react-starfield-animation";
import { imgUrl } from "service";
import { TELEGRAM } from "assets/icon";

export const Footer = ({ data }) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    window.location.reload();
  };
  return (
    <div className="bg-[#000] py-7 relative overflow-hidden">
      <StarfieldAnimation
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        numParticles={1200}
        particleSpeed={0}
        dx={0.000000001} // x speed of stars in px/frame, default 0.05
        dy={0.000000001}
      />
      <div className="container mx-auto relative z-50">
        <div className="flex items-center justify-between">
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="text-4xl text-[#FFF] font-semibold  max-md:text-3xl max-sm:text-2xl"
            dangerouslySetInnerHTML={{
              __html: t("footer.title"),
            }}
          />
          <a
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            href="#section1"
            className="text-2xl text-[#FFF] font-bold flex items-center justify-center gap-2 max-md:hidden"
          >
            {t("footer.top")}
            <span className="font-light text-4xl">
              <UpCircleOutlined />
            </span>
          </a>
        </div>
        <div className="grid grid-cols-3 gap-7 mt-11 max-md:grid-cols-1">
          <div className="">
            <a
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              href={`tel:${data?.phone_number}`}
              className="text-xl text-white max-sm:text-lg w-max flex items-center justify-start gap-5"
            >
              <ShakeOutlined /> {data?.phone_number}
            </a>
            <a
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              href={`mailto:${data?.email}`}
              className="text-xl text-white mt-6 max-sm:text-lg w-max flex items-center justify-start gap-5"
            >
              <MailOutlined /> {data?.email}
            </a>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="flex items-center justify-start gap-2 mt-6"
            >
              <span className="text-white text-base font-normal">
                <GlobalOutlined />
              </span>
              <span
                onClick={() => changeLang("ru")}
                className={`text-base font-normal cursor-pointer ${
                  getLocale() == "ru" ? "text-[#F58634]" : "text-white"
                }`}
              >
                {t("ru")}
              </span>
              <span
                onClick={() => changeLang("uz")}
                className={`text-base font-normal cursor-pointer ${
                  getLocale() == "uz" ? "text-[#F58634]" : "text-white"
                }`}
              >
                {t("uz")}
              </span>
              <span
                onClick={() => changeLang("en")}
                className={`text-base font-normal cursor-pointer ${
                  getLocale() == "en" ? "text-[#F58634]" : "text-white"
                }`}
              >
                {t("en")}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <a
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="text-white text-base font-normal"
              href="#section2"
            >
              {t("header.head1")}
            </a>
            <a
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="text-white text-base font-normal"
              href="#section3"
            >
              {t("header.head2")}
            </a>
            <a
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="text-white text-base font-normal"
              href="#section4"
            >
              {t("header.head3")}
            </a>
            <a
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="text-white text-base font-normal"
              href="#section5"
            >
              {t("header.head4")}
            </a>
            <a
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="text-white text-base font-normal"
              href="#section7"
            >
              {t("header.head5")}
            </a>
            <a
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="text-white text-base font-normal"
              href="#section8"
            >
              {t("header.head6")}
            </a>
          </div>
          <div className="flex flex-col items-end justify-end max-md:items-start">
            <a
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              href={imgUrl + data?.file?.url_1}
              target="_blank"
              download
              className="flex items-center justify-center text-base text-[#FFF] gap-3 px-5 py-3 border border-white rounded-3xl w-max max-md:w-full"
              rel="noreferrer"
            >
              <FileTextOutlined />
              {t("footer.dowland")}
            </a>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="text-base text-[#FFF] mt-8"
            >
              {t("footer.site")}
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="flex items-center justify-center gap-3 w-max mt-3"
            >
              <a
                href={data?.facebook}
                className="flex items-center justify-center text-2xl text-[#FFF] p-3 border border-white rounded-full w-max hover:bg-blue-500 hover:border-blue-500 transition-all ease-linear"
              >
                <FacebookOutlined />
              </a>
              <a
                href={data?.instagram}
                className="flex items-center justify-center text-2xl text-[#FFF] p-3 border border-white rounded-full w-max hover:bg-red-500 hover:border-red-500 transition-all ease-linear"
              >
                <InstagramOutlined />
              </a>
              <a
                href={data?.telegram}
                className="flex items-center justify-center text-2xl text-[#FFF] p-3 border border-white rounded-full w-max hover:bg-blue-500 hover:border-blue-500 transition-all ease-linear"
              >
                <img src={TELEGRAM} alt="" />
              </a>
              <a
                href={data?.youtube}
                className="flex items-center justify-center text-2xl text-[#FFF] p-3 border border-white rounded-full w-max hover:bg-red-500 hover:border-red-500 transition-all ease-linear"
              >
                <YoutubeOutlined />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white mt-11"></div>
        <div className="flex items-center justify-center mt-7 max-md:justify-center">
          <p className="text-base text-[#FFF]">© 2023 Developed by UCT</p>
          {/* <p className="text-base text-[#FFF] max-md:hidden">
            Политика в области защиты и обработки персональных данных
          </p> */}
        </div>
      </div>
    </div>
  );
};
