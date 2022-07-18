import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { LoginTitle } from "../auth/components/LoginTitle";
import UserContext from "../auth/Context/userProvider";
export const Navbar = () => {
	const { logout } = useContext(UserContext);

	return (
		<div className="bg-gray-800 sticky top-0">
			<div className="flex items-center justify-between h-16">
				<div className="overflow-hidden h-16">
					<NavLink to={"/"}>
						<LoginTitle properties="text-gray-300 lg:mx-4" />
					</NavLink>
				</div>
				<div className="flex space-x-1 lg:space-x-4 items-center justify-center lg:mx-4">
					<div className="dropdown dropdown-end lg:hidden xl:hidden md:hidden">
						<label tabIndex={0} className="btn m-1">
							<FaBars />
						</label>
						<ul
							tabIndex={0}
							className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li className="text-black">
								<NavLink to={"/"}>Home</NavLink>
							</li>
							<li>
								<NavLink to={"/members"}>Members</NavLink>
							</li>
							<li>
								<button onClick={() => logout()}>Logout</button>
							</li>
						</ul>
					</div>

					<li className="list-none hidden md:list-item lg:list-item xl:list-item">
						<NavLink
							className={({ isActive }) =>
								isActive
									? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
									: "text-gray-300 hover:text-white font-medium text-sm rounded-md px-3 py-2 hover:bg-gray-700"
							}
							to={"/"}
						>
							Home
						</NavLink>
					</li>
					<li className="list-none hidden md:list-item lg:list-item xl:list-item">
						<NavLink
							className={({ isActive }) =>
								isActive
									? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
									: "text-gray-300 hover:text-white font-medium text-sm rounded-md px-3 py-2 hover:bg-gray-700"
							}
							to={"/members"}
						>
							Members
						</NavLink>
					</li>

					<button
						className="hover:bg-[#f6f6f6] bg-[#FFF] text-black rounded px-3 py-2 text-medium outline-none hidden md:inline-block lg:inline-block xl:inline-block"
						onClick={() => {
							logout();
						}}
					>
						Logout
					</button>
				</div>
			</div>
		</div>
	);
};
