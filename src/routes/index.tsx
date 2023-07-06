import { Route, Routes, BrowserRouter } from "react-router-dom";

import { MainPage } from "../components/MainPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {["/", "/cat/:catId"].map((path) => (
          <Route key={path} path={path} element={<MainPage />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
