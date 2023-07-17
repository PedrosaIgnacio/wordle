import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetFolders } from "../hooks/useGetFolders";
import { Layout } from "../layout/Layout";
import { GridDocs } from "./components/GridDocs";
import { useCreateFolder } from "../hooks/useCreateFolder";
import { NewFolderModal } from "../share-components/NewFolderModal";
import { useGetParentFoldersById } from "../hooks/useGetParentFoldersById";
import { Breadcrumb } from "../share-components/Breadcrumb";
import { UploadedFile } from "./components/UploadedFile";

export const Docs = () => {
  const { id } = useParams();
  const folderId = id === undefined ? 0 : parseInt(id);
  const { data } = useGetFolders(folderId);
  const { createNewFolder } = useCreateFolder();
  const folders = Array.isArray(data) ? data : data.childrenFolder;
  const [modalState, setModalState] = useState<boolean>(false);
  const parentFolders = useGetParentFoldersById(folderId);
  const actualFolderName = Array.isArray(data) ? "" : data?.name;

  return (
    <Layout>
      <div className="flex pt-10 mx-10 w-full">
        <div className="w-full">
          <div className="mt-6">
            <h1 className="text-[#1F2937] text-4xl">Documents</h1>
            <hr className="mt-4" />
          </div>
          <button
            className="px-3 py-2 mt-4 bg-[#1F2937] hover:bg-[#2d343d] text-white rounded "
            onClick={() => {
              setModalState(!modalState);
            }}
          >
            + New Folder
          </button>
          <Breadcrumb
            navs={[
              ...parentFolders?.data?.map((pf) => ({
                title: pf.name,
                to: `/docs/folder/${pf.id}`,
              })),
              { title: actualFolderName, to: `/docs/folder/${folderId}` },
            ]}
          />
          <GridDocs folders={folders} />
          <NewFolderModal
            onSubmit={(name, parentFolderId) => {
              createNewFolder({ name, parentFolderId });
              setModalState(false);
            }}
            onCancel={() => {
              setModalState(false);
            }}
            folderId={folderId}
            isOpen={modalState}
          />
          <UploadedFile folderId={folderId} />
        </div>
      </div>
    </Layout>
  );
};
