import React from "react";

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
              <a key={ind} href={n.to}>
                {n.title}
              </a>
              {ind !== navs.length - 1 && <span> / </span>}
            </>
          );
        })}
      </div>
    </>
  );
};
