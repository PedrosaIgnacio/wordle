import React, { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserContext from "../../auth/Context/userProvider";
import { Docs } from "../../docs/Docs";
import { Members } from "../../members/Members";
import { ErrorPage } from "../../share-components/ErrorPage";

export const PrivateRouter = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (userContext.email === "" && !userContext.loading) {
      navigate("/auth/login", { replace: true });
    }
  }, [userContext, navigate]);

  return (
    <div>
      <Routes>
        <Route path="" element={<Docs />} />
        <Route path="members" element={<Members />} />
        <Route path="folder/:id" element={<Docs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
