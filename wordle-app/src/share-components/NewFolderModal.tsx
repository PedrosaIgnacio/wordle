import React, { useState } from "react";
import toast from "react-hot-toast";
import ReactModal from "react-modal";

interface INewFolderModal {
  isOpen: boolean;
  onSubmit: (name: string, parentFolderId: number) => void;
  onCancel: () => void;
  folderId: number | undefined;
}
export const NewFolderModal = (props: INewFolderModal) => {
  const [folderName, setFolderName] = useState<string>("");

  return (
    <ReactModal
      style={{
        content: {
          borderRadius: "0.5rem",
          boxShadow:
            "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        },
        overlay: {
          backgroundColor: "rgba(0,0,0,0.4)",
        },
      }}
      ariaHideApp={false}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      isOpen={props.isOpen}
      contentElement={(props, children) => (
        <div {...props} className=" h-80 w-1/3 mx-auto">
          {children}
        </div>
      )}
    >
      <div className="w-full flex flex-col justify-center items-center ">
        <div className="m-4 text-center">
          <p className="text-2xl tracking-wide font-nunito">
            Create New Folder
          </p>
        </div>
        <hr className="w-full" />
        <div id="modalBody" className="m-4">
          <input
            placeholder="Folder Name"
            className="outline-none shadow w-full rounded border py-2 px-3"
            value={folderName}
            onChange={(e) => {
              setFolderName(e.target.value);
            }}
          />
        </div>
        <hr className="w-full" />

        <div id="footerModal" className="flex flex-wrap">
          <button
            className="mt-4 mx-2 rounded shadow px-3 py-2 outline-none text-white font-medium bg-[#1F2937] hover:bg-[#2d343d]"
            onClick={(e) => {
              if (folderName.trim() !== "") {
                props.onSubmit(
                  folderName,
                  props.folderId === undefined ? 0 : props.folderId
                );
                setFolderName("");
                toast.success("Folder has been created");
              } else {
                props.onCancel();
                toast.error("You have to write a folder name");
              }
            }}
          >
            Create Folder
          </button>
          <button
            className="mt-4 mx-2 shadow rounded px-3 py-2 bg-gray-500 font-medium text-white outline-none"
            onClick={() => {
              props.onCancel();
            }}
          >
            Close Modal
          </button>
        </div>
      </div>
    </ReactModal>
  );
};
