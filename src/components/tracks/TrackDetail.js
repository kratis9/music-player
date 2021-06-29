import React, { useState, useEffect } from "react"
import AudioPlayer from "../audio-player/AudioPlayer"
import { getSongsByAlbum } from "../../services/api"

const TrackDetail = ({ selectedTrack }) => {
  const [album, setAlbum] = useState(null)

  const getData = async () => {
    try {
      const data = await getSongsByAlbum(selectedTrack.collectionId) // Album ID
      setAlbum(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [selectedTrack])

  return (
    <div className="w-full h-full m-10">
      {selectedTrack && (
        <div className="AudioPlayer">
          <figure className="flex justify-center mb-5">
            <img
              className="object-contain object-center rounded-lg"
              height="150px"
              width="150px"
              src={album && album[0].artworkUrl100}
              alt="Album cover page"
            />
          </figure>
          <AudioPlayer track={selectedTrack.artworkUrl100} />
        </div>
      )}
      <div className="flex flex-row mt-20">
        <ul className="w-full first:border-t-1">
          {album &&
            album.map((track, index) =>
              index > 0 ? (
                <li
                  className={`border-b ${
                    index === 0 ? "border-t" : ""
                  } border-gray-400 leading-loose px-3 py-1`}
                  key={track.trackId}
                >{`${track.trackName}`}</li>
              ) : (
                <li
                  className="font-bold uppercase"
                  key="0"
                >{`${track.collectionName}`}</li>
              )
            )}
        </ul>
      </div>
    </div>
  )
}

export default TrackDetail
