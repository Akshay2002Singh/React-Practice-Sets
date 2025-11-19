import type { SearchResultsType } from "../types";
import './styles.css';
import { TextWithHighlight } from "./TextWithHighlight";

export const SearchResulsOutput = ({searchResults, searchText}: {searchResults: SearchResultsType[]; searchText: string }) => {
  return (
    <div className="search-filter-output">
        <div>Output</div>
        {
            searchResults.map(ele => <TextWithHighlight text={ele.title} highlight={searchText} />)
        }
    </div>
  )
}
