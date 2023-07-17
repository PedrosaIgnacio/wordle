import React from "react";
import { NavLink } from "react-router-dom";

export interface IBreadcrumbProps {
  navs: Array<{ title: string; to: string }>;
}

export const Breadcrumb = ({ navs }: IBreadcrumbProps) => {
  return (
    <>
      <div className="flex items-center mt-4 justify-start">
        {navs.map((n, ind) => {
          return (
            <>
              <NavLink
                className="mx-2 text-blue-500 underline"
                key={ind}
                to={n.to}
              >
                {n.title}
              </NavLink>
              {ind !== navs.length - 1 && <span key={ind}> / </span>}
            </>
          );
        })}
      </div>
    </>
  );
};
