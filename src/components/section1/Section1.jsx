import { SECTION1IMG } from "assets/imgs";
import { Header } from "containers";
import { useTranslation } from "react-i18next";
import { imgUrl } from "service";

export const Section1 = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <div
        id="section1"
        className="bg-cover bg-center h-[100vh] min-h-[800px]"
        style={{
          backgroundImage: `url(${
            data?.file ? imgUrl + data?.file?.url_1 : SECTION1IMG
          })`,
        }}
      >
        <div className="h-full bg-gradient-to-t from-transparent via-transparent to-slate-700">
          <Header />
          <div className="flex flex-col justify-center items-center text-center mt-52">
            <h1
              data-aos="fade-up"
              className="text-7xl max-w-[806px] font-bold text-white max-md:text-5xl max-sm:text-4xl"
            >
              {data?.content?.title}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
