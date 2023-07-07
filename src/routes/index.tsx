import { Route, Routes, BrowserRouter } from "react-router-dom";

import { MainPage } from "../components/MainPage";
import { NavMenu } from "../components/NavMenu";

export const Router = () => {
  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        {["/", "/cat/:catId"].map((path) => (
          <Route key={path} path={path} element={<MainPage />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
