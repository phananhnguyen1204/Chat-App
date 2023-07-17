import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFiles } from "../../../../../features/chatSlice";
import { PhotoIcon } from "../../../../../svg";
import { getFileType } from "../../../../../utils/file";

function PhotoAttachment() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const { files } = useSelector((state) => state.chat);
  console.log("files", files);

  const imageHandler = (e) => {
    let files = Array.from(e.target.files);
    files.forEach((file) => {
      if (
        file.type !== "image/png" &&
        file.type !== "image/jpeg" &&
        file.type !== "image/gif" &&
        file.type !== "video/mp4"
      ) {
        files = files.filter((item) => item.name !== file.name);
        return;
      } else if (file.size > 1024 * 1024 * 5) {
        files = files.filter((item) => item.name !== file.name);
        return;
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          dispatch(
            addFiles({
              file: file,
              imgData: e.target.result,
              type: getFileType(file.type),
            })
          );
        };
      }
    });
  };
  return (
    <li>
      <button
        type="button"
        className="bg-[#BF59CF] rounded-full"
        onClick={() => inputRef.current.click()}
      >
        <PhotoIcon></PhotoIcon>
      </button>
      <input
        type="file"
        hidden
        multiple
        ref={inputRef}
        accept="image/png,image/jpeg,image/gif,video/mp4,video/mpeg"
        onChange={imageHandler}
      ></input>
    </li>
  );
}

export default PhotoAttachment;
