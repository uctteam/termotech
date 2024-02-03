import { SECTION1IMG } from "assets/imgs";
import { Header } from "containers";
import { imgUrl } from "service";

export const Section1 = ({ data }) => {
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
        <div className="h-full">
          <div className="bg-[#303030d9]">
            <Header />
          </div>
          <div className="container mx-auto h-screen">
            <div className="flex flex-col justify-center items-center text-center h-full">
              <h1
                data-aos="fade-up"
                className="text-7xl max-w-[806px] font-bold text-white max-md:text-5xl max-sm:text-4xl text-center"
              >
                {data?.content?.title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
