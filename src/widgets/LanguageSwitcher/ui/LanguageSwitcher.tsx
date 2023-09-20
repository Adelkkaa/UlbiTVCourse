import { FC } from "react";
import classNames from "shared/lib/classnames";

import { Button } from "shared/ui/Button/Button";

import classes from "./LanguageSwitcher.module.scss";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher: FC<PropsWithClassName> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames(classes.languageSwitcher, {}, [className])}
      onClick={toggleLanguage}
    >
      {t("Язык")}
    </Button>
  );
};
