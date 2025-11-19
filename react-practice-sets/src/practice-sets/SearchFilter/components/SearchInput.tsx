export const SearchInput = ({searchInputText, onInputChange}: {searchInputText: string, onInputChange: (input: string)=>void}) => {
  return (
    <div>
        <input type='text' value={searchInputText} onChange={(e) => onInputChange(e.target.value)} placeholder="Type to search" />
    </div>
  )
}
