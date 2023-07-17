import React from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

interface IFile {
  name: string;
  parentFolderId: number | undefined;
}
interface IUseGetSignedURL {
  success: boolean;
  url: string;
}

export const useGetSignedURL = () => {
  const signedUrl = useMutation(async (data: IFile) => {
    return axios.post<IUseGetSignedURL>(
      "http://localhost:3001/file/signedUrl",
      data
    );
  });
  return {
    getSignedUrl: signedUrl.mutateAsync,
  };
};
