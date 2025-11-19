import { useState } from "react";
import { SearchInput } from "./components/SearchInput";
import type { SearchResultsType } from "./types";
import { SearchResulsOutput } from "./components/SearchResulsOutput";
import './styles.css'


const SearchFilter = () => {
  const [searchInputText, setSearchInputText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResultsType[]>([]);

  const fetchData = async (value: string) => {
    if (!value) {
      setSearchResults([]);
      return;
    }
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${value}`
    );
    console.log(response);
    if (response.status === 200) {
      const apiData = await response.json();
      const data = apiData?.products?.map((ele: any) => ({
        id: ele.id,
        title: ele.title,
      }));
      setSearchResults(data);
    }
  };

  const onInputChange = (value: string) => {
    setSearchInputText(value);
    fetchData(value);
  };

  return (
    <div className="search-input-container">
      <SearchInput
        searchInputText={searchInputText}
        onInputChange={onInputChange}
      />
      <SearchResulsOutput searchResults={searchResults} searchText={searchInputText} />
    </div>
  );
};

export default SearchFilter;
