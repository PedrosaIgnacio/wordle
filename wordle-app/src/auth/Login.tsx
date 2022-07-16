import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { LoginTitle } from "./components/LoginTitle";
import UserContext from "./Context/userProvider";
export const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="flex w-screen h-screen">
      <div className="hidden lg:w-2/3 lg:flex justify-center items-center bg-login"></div>
      <div className="w-full lg:w-1/3 flex justify-center items-center">
        <div className="w-2/3">
          <LoginTitle properties="" />
          <input
            type="text"
            placeholder="Username"
            className="shadow-md rounded-lg border-b-400 my-3 py-2 px-3 w-full outline-none focus:shadow-lg focus:shadow-blue-200"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="username"
          />

          <input
            type="password"
            placeholder="Password"
            className="shadow-md rounded-lg border-b-400 my-3 py-2 px-3 w-full outline-none focus:shadow-lg focus:shadow-blue-200"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
          />

          <button
            type="button"
            className="font-bold mt-4 px-3 py-2 w-full bg-blue-500 border rounded-lg text-white hover:bg-blue-400 outline-none"
            onClick={async () => {
              try {
                await login(email, password);
                navigate("/", { replace: true });
              } catch (error) {
                if (error instanceof Error) {
                  toast.error("Error," + error.message);
                }
              }
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
