import React, { useState } from "react"
import AudioPlayer from "./components/audio-player/AudioPlayer"
import Search from "./components/search/Search"
import { getSongsByArtist } from "./services/api"
import Tracks from "./components/tracks/Tracks"
import TrackDetail from "./components/tracks/TrackDetail"

import "./App.css"

const App = () => {
  const [tracks, setTracks] = useState(null)
  const [artistName, setArtistName] = useState(null)
  const [selectedTrack, setTrackSelection] = useState(null)
  
  const getData = async () => {
    try {
      const data = await getSongsByArtist(artistName)
      setTracks(data)
    } catch (err) {
      console.log(err)
    }
  }

  React.useEffect(() => {
    getData()
  }, [artistName])

  return (
    <div className="bg-gray-200 flex">
      <div className="m-4 md:w-4/12 md:border-r border-gray-400">
        <Search searchTextChange={(searchText) => setArtistName(searchText)} />
        <Tracks
          tracks={tracks}
          trackSelection={(track) => setTrackSelection(track)}
        />

        {selectedTrack && (
          <div className="visible md:invisible">
            <AudioPlayer track={selectedTrack} />
          </div>
        )}
      </div>
      <div className="hidden md:block h-1/6 md:w-6/12 ">
        <TrackDetail selectedTrack={selectedTrack} />
      </div>
    </div>
  )
}

export default App
