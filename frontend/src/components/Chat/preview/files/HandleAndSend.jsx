import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SocketContext from "../../../../context/SocketContext";
import { sendMessage } from "../../../../features/chatSlice";
import { SendIcon } from "../../../../svg";
import { uploadFiles } from "../../../../utils/upload";
import Add from "./Add";

function HandleAndSend({ activeIndex, setActiveIndex, message, socket }) {
  const dispatch = useDispatch();
  const { files, activeConversation } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  const { token } = user;
  const [loading, setLoading] = useState(false);

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    //upload file from cloudinary
    const uploaded_files = await uploadFiles(files);
    //send the message
    const values = {
      token,
      message,
      convo_id: activeConversation._id,
      files: uploaded_files.length > 0 ? uploaded_files : [],
    };
    let newMsg = await dispatch(sendMessage(values));
    socket.emit("send message", newMsg.payload);
    setLoading(false);
  };
  return (
    <div className="w-[97%] flex items-center justify-between mt-2 border-t dark:border-dark_border_2">
      {/* Empty */}
      <span></span>
      {/* List files */}
      <div className="flex gap-x-2 items-center">
        {files.map((file, i) => (
          <div
            key={i}
            className={`w-14 h-14 mt-2 border dark:border-white rounded-md overflow-hidden cursor-pointer
            ${activeIndex === i ? "border-[3px] !border-green_1" : ""}
            `}
            onClick={() => setActiveIndex(i)}
          >
            {file.type === "IMAGE" ? (
              <img
                src={file.fileData}
                alt=""
                className="w-full h-full object-cover"
              ></img>
            ) : (
              <img
                src={`../../../../images/file/${file.type}.png`}
                alt=""
                className="w-8 h-10 mt-1.5 ml-2.5"
              ></img>
            )}
          </div>
        ))}
        {/* Add another file */}
        <Add setActiveIndex={setActiveIndex}></Add>
      </div>
      {/* Send Button */}
      <div
        className="bg-green_1 w-16 h-16 mt-2 rounded-full flex items-center justify-center cursor-pointer"
        onClick={(e) => sendMessageHandler(e)}
      >
        <SendIcon className="fill-white"></SendIcon>
      </div>
    </div>
  );
}

const HandleAndSendWithContext = (props) => (
  <SocketContext.Consumer>
    {(socket) => <HandleAndSend {...props} socket={socket} />}
  </SocketContext.Consumer>
);
export default HandleAndSendWithContext;
