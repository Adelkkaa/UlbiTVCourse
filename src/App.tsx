import React, { Suspense, useContext } from "react";
import "./styles/styles.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { CounterAsyncPage } from "./components/MainPage/Counter.async";
import { AboutAsyncPage } from "./components/AboutPage/About.async";
import { ThemeProvider } from "./theme/ThemeProvider";
import { useTheme } from "./theme/useTheme";
import classNames from "./helpers/classnames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <nav>
        <Link to={"/"}>Main</Link>
        <Link to={"/about"}>About</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<CounterAsyncPage />} />
          <Route path="/about" element={<AboutAsyncPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
