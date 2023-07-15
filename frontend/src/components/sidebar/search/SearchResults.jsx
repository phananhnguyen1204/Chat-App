import Contact from "./Contact";

function SearchResults({ searchResults }) {
  return (
    <div className="w-full convos scrollbar">
      <div>
        {/* HEADINGS */}
        <div className="flex flex-col px-8 pt-8">
          <h1 className="font-extralight text-md text-green_2">Contacts</h1>
          <span className="w-full mt-4 ml-10 border-b dark:border-b-dark_border_1"></span>
        </div>
        {/* RESULTS */}
        <ul>
          {searchResults &&
            searchResults.map((user) => {
              return <Contact contact={user} key={user._id}></Contact>;
            })}
        </ul>
      </div>
    </div>
  );
}

export default SearchResults;
