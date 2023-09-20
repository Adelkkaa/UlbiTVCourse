import React, { Children, FC } from "react";
import classes from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import classNames from "shared/lib/classnames";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: string;
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  to,
  children,
  theme = AppLinkTheme.PRIMARY,
  ...otherProps
}) => {
  return (
    <Link
      className={classNames(classes.AppLink, {}, [className, classes[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
