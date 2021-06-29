import { useEffect, useState } from "react"

const Search = ({ searchTextChange }) => {
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      searchText && searchText.length > 2 && searchTextChange(searchText)
    }, 650)
    return () => clearInterval(timer)
  }, [searchText])

  return (
    <div className="m-3 flex justify-center">
      <input
        className="w-10/12"
        type="text"
        placeholder="Search artist"
        onKeyDown={(event) => setSearchText(event.target.value)}
      />
    </div>
  )
}

export default Search
