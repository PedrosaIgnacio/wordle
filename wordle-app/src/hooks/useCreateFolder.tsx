import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

export interface IFolder {
  name: string;
  parentFolderId: number;
}

export const useCreateFolder = () => {
  const queryClient = useQueryClient();
  const newFolder = useMutation(
    async (data: IFolder) => {
      return await axios.post("http://localhost:3001/folder", data);
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["folder"]);
        // if (
        //   data.data.parentFolderId !== null &&
        //   data.data.parentFolderId !== undefined
        // ) {
        queryClient.invalidateQueries([`folder-${data.data.parentFolderId}`]);
        // }
      },
    }
  );

  return {
    createNewFolder: newFolder.mutateAsync,
  };
};
