import React, { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserContext from "../../auth/Context/userProvider";
import { Docs } from "../../docs/Docs";
import { Home } from "../../home/Home";
import { ErrorPage } from "../../share-components/ErrorPage";
import { Users } from "../../users/Users";

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
        <Route path="" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/docs/folder/:id" element={<Docs />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
