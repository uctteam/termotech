import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { SECTION4IMG } from "assets/imgs";
import { Rate } from "antd";
import { Image } from "antd";

const data1 = [
  {
    img: SECTION4IMG,
    h5: "ПЕРФОРИРОВАННАЯ ПОДЛОЖКА- ГАРМОШКА",
    p: "Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh",
  },
  {
    img: SECTION4IMG,
    h5: "ПЕРФОРИРОВАННАЯ ПОДЛОЖКА- ГАРМОШКА",
    p: "Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh",
  },
  {
    img: SECTION4IMG,
    h5: "ПЕРФОРИРОВАННАЯ ПОДЛОЖКА- ГАРМОШКА",
    p: "Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh",
  },
  {
    img: SECTION4IMG,
    h5: "ПЕРФОРИРОВАННАЯ ПОДЛОЖКА- ГАРМОШКА",
    p: "Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh",
  },
  {
    img: SECTION4IMG,
    h5: "ПЕРФОРИРОВАННАЯ ПОДЛОЖКА- ГАРМОШКА",
    p: "Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh",
  },
  {
    img: SECTION4IMG,
    h5: "ПЕРФОРИРОВАННАЯ ПОДЛОЖКА- ГАРМОШКА",
    p: "Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh",
  },
  {
    img: SECTION4IMG,
    h5: "ПЕРФОРИРОВАННАЯ ПОДЛОЖКА- ГАРМОШКА",
    p: "Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh",
  },
  {
    img: SECTION4IMG,
    h5: "ПЕРФОРИРОВАННАЯ ПОДЛОЖКА- ГАРМОШКА",
    p: "Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh",
  },
  {
    img: SECTION4IMG,
    h5: "ПЕРФОРИРОВАННАЯ ПОДЛОЖКА- ГАРМОШКА",
    p: "Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh",
  },
  {
    img: SECTION4IMG,
    h5: "ПЕРФОРИРОВАННАЯ ПОДЛОЖКА- ГАРМОШКА",
    p: "Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh",
  },
];
const data2 = [
  {
    img: SECTION4IMG,
    h5: "ПЕРФОРИРОВАННАЯ ПОДЛОЖКА- ГАРМОШКА",
    p: "Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh",
  },
  {
    img: SECTION4IMG,
    h5: "ПЕРФОРИРОВАННАЯ ПОДЛОЖКА- ГАРМОШКА",
    p: "Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh",
  },
  {
    img: SECTION4IMG,
    h5: "ПЕРФОРИРОВАННАЯ ПОДЛОЖКА- ГАРМОШКА",
    p: "Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh",
  },
  {
    img: SECTION4IMG,
    h5: "ПЕРФОРИРОВАННАЯ ПОДЛОЖКА- ГАРМОШКА",
    p: "Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh",
  },
  {
    img: SECTION4IMG,
    h5: "ПЕРФОРИРОВАННАЯ ПОДЛОЖКА- ГАРМОШКА",
    p: "Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh",
  },
  {
    img: SECTION4IMG,
    h5: "ПЕРФОРИРОВАННАЯ ПОДЛОЖКА- ГАРМОШКА",
    p: "Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh",
  },
  {
    img: SECTION4IMG,
    h5: "ПЕРФОРИРОВАННАЯ ПОДЛОЖКА- ГАРМОШКА",
    p: "Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh",
  },
  {
    img: SECTION4IMG,
    h5: "ПЕРФОРИРОВАННАЯ ПОДЛОЖКА- ГАРМОШКА",
    p: "Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh",
  },
  {
    img: SECTION4IMG,
    h5: "ПЕРФОРИРОВАННАЯ ПОДЛОЖКА- ГАРМОШКА",
    p: "Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh",
  },
  {
    img: SECTION4IMG,
    h5: "ПЕРФОРИРОВАННАЯ ПОДЛОЖКА- ГАРМОШКА",
    p: "Kalo ada insight, kamu akan bulak balik ngecek kan? Otomatis server harus idup terus, itu butuh",
  },
];

export const Section4 = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <div className="py-14 max-md:py-10" id="section4">
        <div className="container mx-auto">
          <h5
            data-aos="fade-up"
            className="text-lg text-[#18A0FB] text-center max-lg:text-center max-md:text-sm"
          >
            Наши продукты
          </h5>
          <p
            data-aos="fade-up"
            className="text-4xl text-[#1E1E1E] font-bold text-center  max-md:text-3xl max-sm:text-2xl"
          >
            У нас есть разнообразные продукты
          </p>
          <p
            data-aos="fade-up"
            className="text-2xl text-[#1E1E1E] font-bold text-start mt-11  max-md:mt-6  max-md:text-xl max-sm:text-lg mb-6"
          >
            Headline example
          </p>
          <Swiper
            slidesPerView={4}
            spaceBetween={24}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              1: {
                slidesPerView: 1.2,
              },
              576: {
                slidesPerView: 2,
              },
              960: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiperTop"
          >
            {data1?.map((e, i) => (
              <SwiperSlide key={i}>
                <div
                  data-aos="fade-up"
                  className="rounded-md bg-white overflow-hidden h-full"
                >
                  <Image
                    src={e?.img}
                    width={200}
                    height={240}
                    className="w-full"
                  />
                  <div className="p-5">
                    <Rate allowHalf defaultValue={5} />
                    <h5 className="text-[#0D0E25] font-semibold text-lg mt-1 mb-3">
                      {e?.h5}
                    </h5>
                    <p className="text-sm text-[#475467] font-normal">{e?.p}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <p
            data-aos="fade-up"
            className="text-2xl text-[#1E1E1E] font-bold text-start mt-11  max-md:mt-6  max-md:text-xl max-sm:text-lg mb-6"
          >
            Headline example
          </p>
          <Swiper
            slidesPerView={4}
            spaceBetween={24}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              1: {
                slidesPerView: 1.2,
              },
              576: {
                slidesPerView: 2,
              },
              960: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiperTop"
          >
            {data2?.map((e, i) => (
              <SwiperSlide key={i}>
                <div
                  data-aos="fade-up"
                  className="rounded-md bg-white overflow-hidden h-full"
                >
                  <Image
                    src={e?.img}
                    width={200}
                    height={240}
                    className="w-full"
                  />
                  <div className="p-5">
                    <Rate allowHalf defaultValue={5} />
                    <h5 className="text-[#0D0E25] font-semibold text-lg mt-1 mb-3">
                      {e?.h5}
                    </h5>
                    <p className="text-sm text-[#475467] font-normal">{e?.p}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
