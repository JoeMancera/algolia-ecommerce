import { connectSearchBox } from "react-instantsearch-dom";

function SearchForm({ refine }) {
  return (
    <form className="my-5" noValidate action="" role="search">
      <label htmlFor="algolia_search">Search articles</label>
      <input
        className="rounded-md bg-gray-200 placeholder-gray-400 p-4 w-full focus:border-blue-100"
        id="algolia_search"
        type="search"
        placeholder="Product, brand, color, …"
        onChange={(e) => refine(e.currentTarget.value)}
      />
    </form>
  );
}

export default connectSearchBox(SearchForm);
