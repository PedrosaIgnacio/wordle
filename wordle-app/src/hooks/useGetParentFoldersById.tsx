import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { IFolder } from "./useGetFolders";

interface IUseGetParentFolders {
  data: Array<Omit<IFolder, "childrenFolder">>;
  loading: boolean;
  error: boolean;
}

export const useGetParentFoldersById = (
  idParam: number
): IUseGetParentFolders => {
  const parentFolders = useQuery(
    `parentfolder-${idParam}`,
    async () =>
      await axios.get(`http://localhost:3001/folder/parentFolders/${idParam}`)
  );

  return {
    data: parentFolders.data?.data ?? [],
    loading: parentFolders.isLoading,
    error: parentFolders.isError,
  };
};
