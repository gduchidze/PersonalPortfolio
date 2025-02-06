import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./header.scss";
import logo from '../../assets/logo.png'

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navigate = useNavigate();
  return (
    <header className="header bg-bodyC">
      <div>
        <img onClick={()=>navigate('/')} className="w-12 h-12 rounded-4xl" src={logo} alt="logo" />
      </div>
      <div className="navigation">
        <ul className="menu">
          <li className="nav__item">
            <NavLink to={"about"} className="text-[12px]! md:text-[1rem]!">{t("about")}</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to={"github"} className="text-[12px]! md:text-[1rem]!">{t("github")}</NavLink>
          </li>{" "}
          <li className="nav__item">
            <NavLink to={"contact"} className="text-[12px]! md:text-[1rem]!">{t("contact")}</NavLink>
          </li>
          {i18n.language === "ka" ? (
            <img
              className="w-7 h-7 rounded-2xl cursor-pointer"
              onClick={() => changeLanguage("en")}
              src="https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png"
              alt="English"
            />
          ) : (
            <img
              className="w-7 h-7 rounded-2xl cursor-pointer"
              onClick={() => changeLanguage("ka")}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/1200px-Flag_of_Georgia.svg.png"
              alt="Georgian"
            />
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
