function Contact({ contact }) {
  return (
    <li className="list-none h-[72px] hover:dark:bg-dar_bg_2 cursor-pointer dark:text-dark_text_1 px-[10px]">
      {/* Container */}
      <div className="flex items-center gap-x-3 py-[10px]">
        {/* Contacts infos */}
        <div className="flex itmes-center gap-x-3">
          {/* Conversations user picture */}
          <div className="relative min-w-[50px] max-w-[50px] h-[50px] rounded-full overflow-hidden">
            <img
              src={contact.picture}
              alt={contact.name}
              className="w-full h-full object-cover"
            ></img>
          </div>
          {/* Conversations name and message */}
          <div className="w-full flex flex-col">
            {/* COnversation name */}
            <h1 className="font-bold flex items-center gap-x-2 ">
              {contact.name}
            </h1>
            {/* Conversation status */}
            <div>
              <div className="flex items-center gap-x-1 dark:text-dark_text_2">
                <div className="flex-1 items-center gap-x-1 dark:text-dark_text_2">
                  <p>{contact.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BORDER */}
      <div className="ml-16 border-b dark:border-b-dark_border_1"></div>
    </li>
  );
}

export default Contact;
