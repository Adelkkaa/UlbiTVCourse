import { ButtonHTMLAttributes, FC } from "react";
import classes from "./Button.module.scss";
import classNames from "shared/lib/classnames";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: string;
}

export const Button: FC<PropsWithClassName<ButtonProps>> = ({
  className,
  children,
  theme = ThemeButton.CLEAR,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(classes.Button, {}, [className, classes[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
