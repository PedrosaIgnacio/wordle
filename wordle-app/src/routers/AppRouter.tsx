import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter/PrivateRouter";
import { PublicRouter } from "./PublicRouter/PublicRouter";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/auth/*" element={<PublicRouter />} />
            <Route path="/*" element={<PrivateRouter />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
