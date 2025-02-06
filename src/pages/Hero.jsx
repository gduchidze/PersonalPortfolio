import { useTranslation } from "react-i18next";
import image from '../assets/duchidze.jpg'

const Hero = () => {
  const { t } = useTranslation();
  return (
    <main className="flex items-center flex-col ">
      <img className="w-72 h-72 rounded-full" src={image} alt="Profile" />
      <h4 className="title-p rounded-3xl">{t("hero")}</h4>
    </main>
  );
};

export default Hero;
