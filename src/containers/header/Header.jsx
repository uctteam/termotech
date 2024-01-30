import { LOGO } from "assets/icon";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const [menu, setmenu] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div className="container mx-auto text-white">
        <header className="flex items-center justify-between py-5">
          <div className="logotip">
            <img
              data-aos="fade-right"
              src={LOGO}
              alt="logo"
              className="w-28 object-cover"
            />
          </div>
          <div
            data-aos="fade-left"
            className="bg-[#18A0FB] hidden max-md:flex items-center justify-center py-2 px-3 text-lg rounded"
            onClick={() => setmenu(true)}
          >
            <MenuUnfoldOutlined />
          </div>
          <ul
            className={`flex items-center justify-center gap-[32px] max-md:fixed max-md:top-0 max-md:left-0 max-md:flex-col max-md:h-[100vh] max-md:w-full max-md:bg-slate-800 max-md:gap-6 transition ease-linear ${
              menu ? "max-md:translate-x-[0]" : "max-md:translate-x-[-100%]"
            } z-[999999]`}
          >
            <li
              data-aos="fade-left"
              className="hidden max-md:block"
              onClick={() => setmenu(false)}
            >
              <img src={LOGO} alt="logo" className="w-20 object-cover" />
            </li>
            <li data-aos="fade-left" onClick={() => setmenu(false)}>
              <a href="#section2">{t("header.head1")}</a>
            </li>
            <li data-aos="fade-left" onClick={() => setmenu(false)}>
              <a href="#section3">{t("header.head2")}</a>
            </li>
            <li data-aos="fade-left" onClick={() => setmenu(false)}>
              <a href="#section4">{t("header.head3")}</a>
            </li>
            <li data-aos="fade-left" onClick={() => setmenu(false)}>
              <a href="#section5">{t("header.head4")}</a>
            </li>
            <li data-aos="fade-left" onClick={() => setmenu(false)}>
              <a href="#section7">{t("header.head5")}</a>
            </li>
            <li data-aos="fade-left" onClick={() => setmenu(false)}>
              <a href="#section8">{t("header.head6")}</a>
            </li>
            <li data-aos="fade-left" onClick={() => setmenu(false)}>
              <a href="#section9">{t("header.head7")}</a>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};
