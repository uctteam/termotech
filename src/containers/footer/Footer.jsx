import {
  FacebookOutlined,
  FileTextOutlined,
  GlobalOutlined,
  InstagramOutlined,
  TwitterOutlined,
  UpCircleOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { FOOTER } from "assets/imgs";
import { useTranslation } from "react-i18next";
import { getLocale } from "utils/locales/getLocale";

export const Footer = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div
      className="bg-[#000] bg-cover bg-right-bottom py-7"
      style={{ backgroundImage: `url(${FOOTER})` }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h2
            data-aos="fade-up"
            className="text-4xl text-[#FFF] font-semibold  max-md:text-3xl max-sm:text-2xl"
          >
            Достичь большего <span className="text-[#F58634]">вместе</span>
          </h2>
          <a
            data-aos="fade-up"
            href="#section1"
            className="text-2xl text-[#FFF] font-bold flex items-center justify-center gap-2 max-md:hidden"
          >
            вверх
            <span className="font-light text-4xl">
              <UpCircleOutlined />
            </span>
          </a>
        </div>
        <div className="grid grid-cols-3 gap-7 mt-11 max-md:grid-cols-1">
          <div className="">
            <a
              data-aos="fade-up"
              href="tel:+998712000000"
              className="text-xl text-white block max-sm:text-lg"
            >
              +998 71 200 00 00
            </a>
            <p data-aos="fade-up" className="text-base text-white opacity-60">
              Reception (обращение по общим вопросам)
            </p>
            <a
              data-aos="fade-up"
              href="mailto:gratus@service.com"
              className="text-xl text-white mt-6 block max-sm:text-lg"
            >
              Е-mail: gratus@service.com
            </a>
            <p data-aos="fade-up" className="text-base text-white opacity-60">
              обращение по общим вопросам {t("title")}
            </p>
            <div
              data-aos="fade-up"
              className="flex items-center justify-start gap-2 mt-6"
            >
              <span className="text-white text-base font-normal">
                <GlobalOutlined />
              </span>
              <span
                onClick={() => changeLang("RU")}
                className={`text-base font-normal cursor-pointer ${
                  getLocale() == "RU" ? "text-[#F58634]" : "text-white"
                }`}
              >
                RU
              </span>
              <span
                onClick={() => changeLang("UZ")}
                className={`text-base font-normal cursor-pointer ${
                  getLocale() == "UZ" ? "text-[#F58634]" : "text-white"
                }`}
              >
                UZ
              </span>
              <span
                onClick={() => changeLang("EN")}
                className={`text-base font-normal cursor-pointer ${
                  getLocale() == "EN" ? "text-[#F58634]" : "text-white"
                }`}
              >
                EN
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <a
              data-aos="fade-up"
              className="text-white text-base font-normal"
              href="#section3"
            >
              Переущество
            </a>
            <a
              data-aos="fade-up"
              className="text-white text-base font-normal"
              href="#section4"
            >
              Продукты
            </a>
            <a
              data-aos="fade-up"
              className="text-white text-base font-normal"
              href="#section5"
            >
              Наша цель
            </a>
            <a
              data-aos="fade-up"
              className="text-white text-base font-normal"
              href="#section6"
            >
              Фотогалерея
            </a>
            <a
              data-aos="fade-up"
              className="text-white text-base font-normal"
              href="#section7"
            >
              Лицензия
            </a>
            <a
              data-aos="fade-up"
              className="text-white text-base font-normal"
              href="#section8"
            >
              Нам доверяют
            </a>
          </div>
          <div className="flex flex-col items-end justify-end max-md:items-start">
            <a
              data-aos="fade-up"
              href="#"
              className="flex items-center justify-center text-base text-[#FFF] gap-3 px-5 py-3 border border-white rounded-3xl w-max max-md:w-full"
            >
              <FileTextOutlined /> Cкачать презентацию
            </a>
            <p data-aos="fade-up" className="text-base text-[#FFF] mt-8">
              Мы в социальных сетях
            </p>
            <div
              data-aos="fade-up"
              className="flex items-center justify-center gap-3 w-max mt-3"
            >
              <a
                href="#"
                className="flex items-center justify-center text-2xl text-[#FFF] p-3 border border-white rounded-full w-max hover:bg-blue-500 hover:border-blue-500 transition-all ease-linear"
              >
                <FacebookOutlined />
              </a>
              <a
                href="#"
                className="flex items-center justify-center text-2xl text-[#FFF] p-3 border border-white rounded-full w-max hover:bg-red-500 hover:border-red-500 transition-all ease-linear"
              >
                <InstagramOutlined />
              </a>
              <a
                href="#"
                className="flex items-center justify-center text-2xl text-[#FFF] p-3 border border-white rounded-full w-max hover:bg-blue-500 hover:border-blue-500 transition-all ease-linear"
              >
                <TwitterOutlined />
              </a>
              <a
                href="#"
                className="flex items-center justify-center text-2xl text-[#FFF] p-3 border border-white rounded-full w-max hover:bg-red-500 hover:border-red-500 transition-all ease-linear"
              >
                <YoutubeOutlined />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white mt-11"></div>
        <div className="flex items-center justify-between mt-7 max-md:justify-center">
          <p className="text-base text-[#FFF]">© 2023 Developed by UCT</p>
          <p className="text-base text-[#FFF] max-md:hidden">
            Политика в области защиты и обработки персональных данных
          </p>
        </div>
      </div>
    </div>
  );
};
