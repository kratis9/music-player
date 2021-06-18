import React, { useState } from "react"
import AudioPlayer from "../audio-player/AudioPlayer"
import { getSongsByAlbum } from "../../services/api"

const TrackDetail = ({ tracks, selectedTrack }) => {
  const [album, setAlbum] = useState(null)
  React.useEffect(() => {
    const getData = async () => {
      try {
        const data = await getSongsByAlbum(selectedTrack.collectionId)
        console.log(data)
        setAlbum(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [selectedTrack])

  return (
    <div className="w-full h-full m-10">
      <AudioPlayer selectedTrack={selectedTrack} />
      <div className="flex flex-row mt-20">
        <ul className="w-full first:border-t-1">
          {tracks &&
            tracks.map((track, index) => (
              <li
                className={`border-b ${
                  index === 0 ? "border-t" : ""
                } border-gray-400 leading-loose px-3 py-1`}
                key={track.trackId}
              >{`Song in Album`}</li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default TrackDetail
