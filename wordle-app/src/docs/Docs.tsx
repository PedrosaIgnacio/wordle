import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetFolders } from "../hooks/useGetFolders";
import { Layout } from "../layout/Layout";
import { GridDocs } from "./components/GridDocs";
import { useCreateFolder } from "../hooks/useCreateFolder";
import { NewFolderModal } from "../share-components/NewFolderModal";

export const Docs = () => {
	const { id } = useParams();
	const folderId = id === undefined ? undefined : parseInt(id);
	const { data } = useGetFolders(folderId);
	const { createNewFolder } = useCreateFolder();
	const folders = Array.isArray(data) ? data : data.childrenFolder;
	const [modalState, setModalState] = useState<boolean>(false);

	return (
		<Layout>
			<div className="flex justify-center items-center mt-10">
				<div>
					<button
						className="px-3 py-2 bg-[#1F2937] hover:bg-[#2d343d] text-white rounded "
						onClick={() => {
							setModalState(!modalState);
						}}
					>
						+ New Folder
					</button>
					<hr className="mt-10" />

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
				</div>
			</div>
		</Layout>
	);
};
