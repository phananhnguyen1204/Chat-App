import { useSelector } from "react-redux";
import { checkOnlineStatus, getConversationId } from "../../../utils/chat";
import Conversation from "./Conversation";

function Conversations({ onlineUsers }) {
  const { conversations, activeConversation } = useSelector(
    (state) => state.chat
  );
  const { user } = useSelector((state) => state.user);
  return (
    <div className="convos scrollbar">
      <ul>
        {conversations &&
          conversations
            .filter((c) => c.latestMessage || c._id === activeConversation._id)
            .map((convo) => {
              let check = checkOnlineStatus(onlineUsers, user, convo.users);
              return (
                <Conversation
                  convo={convo}
                  key={convo._id}
                  online={check ? true : false}
                ></Conversation>
              );
            })}
      </ul>
    </div>
  );
}

export default Conversations;
