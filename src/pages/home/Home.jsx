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

export const Home = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const clearLoading = setTimeout(() => {
      setloading(false);
    }, 3000);
    return () => clearTimeout(clearLoading);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="container-back">
      {/* Опыт, качество и разумная цена */}
      <Section1 />
      {/* наша компания имеет долгую историю */}
      <Section2 />
      {/* Добавим яркость и стиль вашему дому */}
      <Section3 />
      {/* Наши продукты */}
      <Section4 />
      {/* обеспечение качественной продукцией в каждый дом */}
      <Section5 />
      {/* наши продукты */}
      <Section6 />
      {/* Фотогалерея */}
      <Section7 />
      {/* Лицензии и Сертификаты */}
      <Section8 />
      {/* Нам доверяют */}
      <Section9 />
      <Footer />
    </div>
  );
};
