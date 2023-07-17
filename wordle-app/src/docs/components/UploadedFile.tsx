import React, { useState } from "react";
import toast from "react-hot-toast";
import { useGetSignedURL } from "../../hooks/useGetSignedURL";
interface IUploadedFileProps {
  folderId: number | undefined;
}
export const UploadedFile = (props: IUploadedFileProps) => {
  const [file, setFile] = useState<File>();
  const { getSignedUrl } = useGetSignedURL();

  const handleClick = async () => {
    try {
      if (file === undefined) {
        return toast.error("You have to select a file");
      }
      const { data } = await getSignedUrl({
        name: file?.name,
        parentFolderId: props.folderId,
      });
      await fetch(data.url, {
        method: "PUT",
        headers: { "Content-Type": "multipart/form-data" },
        body: file,
      });
      toast.success("Filed Uploaded Correctly");
    } catch (error) {
      toast.error("Internal Server Error");
    } finally {
      setFile(undefined);
    }
  };

  return (
    <div className="mt-10">
      <label
        htmlFor="upload"
        className="px-3 py-2 bg-[#1F2937] hover:bg-[#2d343d] text-white rounded cursor-pointer"
      >
        <input
          id="upload"
          type="file"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file !== undefined) {
              setFile(file);
            }
          }}
        />
        + Select File <span className="ml-10">{file?.name}</span>
      </label>
      <button
        className="mx-3 px-3 py-2 bg-[#1F2937] hover:bg-[#2d343d] text-white rounded"
        onClick={() => {
          handleClick();
        }}
      >
        Upload File
      </button>
    </div>
  );
};
