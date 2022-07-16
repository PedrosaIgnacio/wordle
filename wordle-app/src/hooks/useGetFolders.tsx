import axios from "axios";
import { useQuery } from "react-query";

export interface IFolder {
  id: number;
  name: string;
  parentFolderId: number | null;
  childrenFolder: Array<IFolder>;
}

interface IUseGetFolders {
  data: Array<IFolder> | IFolder;
  loading: boolean;
  error: boolean;
}

export const useGetFolders = (folderId?: number): IUseGetFolders => {
  const folders = useQuery(
    folderId === undefined ? ["folder"] : ["folder", folderId],
    async () => {
      const response =
        folderId === undefined
          ? await axios.get("http://localhost:3001/folder")
          : await axios.get(`http://localhost:3001/folder/${folderId}`);
      return response;
    }
  );
  if (folders.isLoading || folders.isError) {
    return {
      data: [],
      loading: folders.isLoading,
      error: folders.isError,
    };
  }
  return {
    data: folders?.data?.data,
    loading: folders.isLoading,
    error: folders.isError,
  };
};
