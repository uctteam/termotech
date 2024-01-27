import { SECTION2IMG } from "assets/imgs";
import { useTranslation } from "react-i18next";

export const Section2 = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto my-16 max-sm:my-10" id="section2">
      <h5
        data-aos="fade-up"
        className="font-semibold text-center text-lg text-[#18A0FB] max-sm:text-base"
      >
        {t("header.head1")}
      </h5>
      <h4
        data-aos="fade-up"
        className="text-center font-bold text-5xl text-[#373435] max-w-[518px] mx-auto mt-3 mb-8 max-md:text-4xl max-sm:text-2xl max-sm:mb-5"
      >
        {t("section2.title")}
      </h4>
      <p
        data-aos="fade-up"
        className="text-center text-2xl text-[#223140] max-w-[1200px] mx-auto max-md:text-xl  max-sm:text-base"
      >
        {t("section2.text")}
      </p>
      <img
        data-aos="fade-up"
        src={SECTION2IMG}
        alt="team"
        loading="lazy"
        className="h-[560px]  max-sm:h-[420px] w-full object-cover object-center mt-12 rounded-3xl"
      />
    </div>
  );
};
