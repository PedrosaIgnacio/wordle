import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginTitle } from "../auth/components/LoginTitle";
import errorImg from "../imgs/errorImg.png";
export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-800">
        <div className="flex items-center justify-between h-16 overflow-hidden">
          <LoginTitle properties="text-gray-300 lg:mx-4" />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div>
          <div className="h-96 w-full">
            <img
              src={errorImg}
              alt="..."
              className="h-full w-full object-contain object-center"
            />
          </div>
          <div>
            <p className="text-center text-4xl font-medium">
              OH NO ! ERROR 404 NOT FOUND
            </p>
          </div>
          <button
            className="mt-4 w-full px-3 py-3 shadow rounded bg-blue-500 text-white"
            onClick={() => {
              navigate("/", { replace: true });
            }}
          >
            Back to home
          </button>
        </div>
      </div>
    </>
  );
};
