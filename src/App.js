import React, { useState } from "react"
import AudioPlayer from "./components/player/Player"
import Search from "./components/Search"
import { getArtistSongs } from "./services/api"
import Tracks from "./components/Tracks"

import "./App.css"
const App = () => {
  const [tracks, setTracks] = useState(null)
  const [artistName, setArtistName] = useState(null)

  const [selectedTrack, setTrackSelection] = useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const data = await getArtistSongs(artistName)
        setTracks(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [artistName])

  const handleSearchTextChange = (searchText) => {
    setArtistName(searchText)
  }

  const handleTrackSelection = (track) => {
    setTrackSelection(track)
  }

  return (
    <div className="bg-gray-200 flex">
      <div className="m-4 md:w-4/12 md:border-r border-gray-400">
        <Search searchTextChange={handleSearchTextChange} />
        {tracks && (
          <Tracks tracks={tracks} trackSelection={handleTrackSelection} />
        )}
        {selectedTrack && <AudioPlayer track={selectedTrack} />}
      </div>
      <div className="hidden md:block h-1/6 md:w-6/12 "></div>
    </div>
  )
}

export default App
