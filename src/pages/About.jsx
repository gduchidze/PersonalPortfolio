import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <main className="about flex flex-col">
      <div className="w-[70%]">
        <h5 className="title-c">Machine Learning Engineer</h5>
        <p className="title-p">{t("firstExperience")}</p>
      </div>
      <div className="w-[70%] self-end">
        <h5 className="title-c">Data Scientist</h5>
        <p className="title-p">{t("secondExperience")}</p>
      </div>
    </main>
  );
};

export default About;
