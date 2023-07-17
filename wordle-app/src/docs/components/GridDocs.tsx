import React from "react";
import { FaFolder } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IFolder } from "../../hooks/useGetFolders";

interface IGridDocs {
  folders: Array<IFolder>;
}

export const GridDocs = (props: IGridDocs) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 mt-10">
      {props.folders?.map((d) => {
        return (
          <NavLink to={`/docs/folder/${d.id}`} key={d.id}>
            <div className="px-3 py-3 rounded shadow-2xl border border-gray-300 font-medium flex justify-center items-center ">
              <FaFolder className="text-gray-500" />
              <span className="text-gray-600 px-2">{d.name}</span>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};
