import {
  Loading,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
  Section9,
} from "components";
import { Footer } from "containers";
import { useEffect } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useGet } from "hooks";
import { getLocale } from "utils/storages";

export const Home = () => {
  const [loading, setloading] = useState(true);

  const { data, isLoading } = useGet({
    url: `client/find/all?lang=${getLocale()}`,
    queryKey: ["alldatas", getLocale()],
  });

  useEffect(() => {
    const clearLoading = setTimeout(() => {
      setloading(false);
    }, 2000);
    return () => clearTimeout(clearLoading);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  if (loading || isLoading) return <Loading />;

  return (
    <div className="container-back">
      {/* Опыт, качество и разумная цена */}
      <Section1 data={data?.data?.headers_arr?.[0]} />
      {/* наша компания имеет долгую историю */}
      <Section2 data={data?.data?.aboutUs_arr?.[0]} />
      {/* Добавим яркость и стиль вашему дому */}
      <Section3
        data={data?.data?.advantages_arr?.[0]}
        allFour={data?.data?.advantages4_arr}
      />
      {/* Наши продукты */}
      <Section4 />
      {/* обеспечение качественной продукцией в каждый дом */}
      <Section5
        data={data?.data?.goal_arr?.[0]}
        allFour={data?.data?.goal_files}
      />
      {/* наши продукты */}
      <Section6 data={data?.data?.our_products_arr} />
      {/* Фотогалерея */}
      <Section7 data={data?.data?.gallery} />
      {/* Лицензии и Сертификаты */}
      <Section8 data={data?.data?.licenses} />
      {/* Нам доверяют */}
      <Section9 data={data?.data?.long_time} />
      <Footer data={data?.data?.footers?.[0]} />
    </div>
  );
};
