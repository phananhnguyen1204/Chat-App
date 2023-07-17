import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConversationMessages } from "../../features/chatSlice";
import { checkOnlineStatus, getConversationId } from "../../utils/chat";
import ChatActions from "./actions/ChatActions";
import ChatHeader from "./header/ChatHeader";
import ChatMessages from "./messages/ChatMessages";
import FilesPreview from "./preview/files/FilesPreview";

function ChatContainer({ onlineUsers, typing }) {
  const dispatch = useDispatch();
  const { activeConversation, messages, files } = useSelector(
    (state) => state.chat
  );
  const { user } = useSelector((state) => state.user);
  const { token } = user;
  const values = {
    token,
    convo_id: activeConversation?._id,
  };
  useEffect(() => {
    if (activeConversation?._id) {
      dispatch(getConversationMessages(values));
    }
  }, [activeConversation]);

  return (
    <div className="relative w-full h-full border-l dark:border-l-dark_border_2 select-none overflow-hidden">
      {/* Container */}
      <div>
        {/* ChatHeader */}
        <ChatHeader
          online={checkOnlineStatus(
            onlineUsers,
            user,
            activeConversation.users
          )}
        ></ChatHeader>

        {files.length > 0 ? (
          <FilesPreview></FilesPreview>
        ) : (
          <>
            {/* Chat Messages */}
            <ChatMessages typing={typing}></ChatMessages>
            {/* Chat Actions */}
            <ChatActions></ChatActions>
          </>
        )}
      </div>
    </div>
  );
}

export default ChatContainer;
