import { SECTION1IMG } from "assets/imgs";
import { Header } from "containers";
import { useTranslation } from "react-i18next";

export const Section1 = () => {
  const { t } = useTranslation();
  return (
    <>
      <div
        id="section1"
        className="bg-cover bg-center min-h-[100vh] h-max"
        style={{ backgroundImage: `url(${SECTION1IMG})` }}
      >
        <div className="h-full bg-gradient-to-t from-transparent via-transparent to-slate-700">
          <Header />
          <div className="flex flex-col justify-center items-center text-center mt-52">
            <h1
              data-aos="fade-up"
              className="text-7xl max-w-[806px] font-bold text-white max-md:text-5xl max-sm:text-4xl"
            >
              {t("section1.text")}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
