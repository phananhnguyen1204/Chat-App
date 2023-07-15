function Conversation({ convo }) {
  console.log(convo.name);
  return (
    <li className="list-none h-[72px] w-full dark:bg-dark_bg_1 hover:dark:bg-dark_bg_2 cursor-pointer dark:text-dark_text_1 px-[10px]">
      {/* Container */}
      <div className="relative w-full flex items-center justify-between py-[10px]">
        {/* LEFT */}
        <div className="flex itmes-center gap-x-3">
          {/* Conversations user picture */}
          <div className="relative min-w-[50px] max-w-[50px] h-[50px] rounded-full overflow-hidden">
            <img
              src={convo.picture}
              alt={convo.name}
              className="w-full h-full object-cover"
            ></img>
          </div>
          {/* Conversations name and message */}
          <div className="w-full flex flex-col">
            {/* COnversation name */}
            <h1 className="font-bold flex items-center gap-x-2 ">
              {convo.name}
            </h1>
            {/* Conversation message */}
            <div>
              <div className="flex items-center gap-x-1 dark:text-dark_text_2">
                <div className="flex-1 items-center gap-x-1 dark:text-dark_text_2">
                  <p>{convo.latestMessage?.message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Conversation;
