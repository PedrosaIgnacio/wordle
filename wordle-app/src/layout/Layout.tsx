import React, { ReactNode, useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../auth/Context/userProvider";
import { HiDocument } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import logo from "../imgs/logo.png";
interface ILayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: ILayoutProps) => {
  const { logout } = useContext(UserContext);

  return (
    <main className="flex min-h-screen">
      <aside className="w-80 bg-[#1F2937]" aria-label="Sidebar">
        <div className="overflow-y-auto px-3 rounded h-full flex flex-col justify-between">
          <ul className="space-y-2">
            <li>
              <span className="ml-3 ">
                <img src={logo} alt="..." className="object-fit" />
              </span>
            </li>
            <li>
              <NavLink
                to={"/"}
                className={`flex items-center p-2 text-base font-normal text-white rounded-lg  hover:bg-gray-100 hover:text-gray-700`}
              >
                <AiFillHome size={25} />

                <span className="ml-3 ">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/docs"}
                className={`flex items-center p-2 text-base font-normal text-white rounded-lg  hover:bg-gray-100 hover:text-gray-700`}
              >
                <HiDocument size={25} />

                <span className="ml-3 ">Documents</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/users"}
                className={`flex items-center p-2 text-base font-normal text-white rounded-lg  hover:bg-gray-100 hover:text-gray-700`}
              >
                <FaUser size={25} />

                <span className="ml-3 ">Users</span>
              </NavLink>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="text-center">
              <span className="text-white text-sm">© 2022 Wordle, Inc.</span>
            </li>
            <li>
              <hr />
            </li>
            <li>
              <a
                href="!#"
                onClick={() => {
                  logout();
                }}
                className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-700"
              >
                <IoMdLogOut size={25} />

                <span className="ml-3 ">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      {children}
    </main>
  );
};
