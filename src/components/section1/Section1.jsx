import { SECTION1IMG } from "assets/imgs";
import { Header } from "containers";

export const Section1 = () => {
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
              Опыт, качество и разумная цена
            </h1>
            <p
              data-aos="fade-up"
              className="text-xl font-normal max-w-[660px] mt-8 text-white max-md:text-base"
            >
              Amplify your social media and SEO rankings with Top Rank SMM. Get
              the ultimate edge with our
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
