import React, { useState, useEffect } from "react"

import Track from "./Track"

const Tracks = ({ tracks, trackSelection }) => {
  const [selectedTrack, setTrack] = useState(null)

  useEffect(() => {
    trackSelection(selectedTrack)
  }, [selectedTrack])

  return (
    <div className="w-full">
      {!tracks ? (
        <h1>No tracks Found</h1>
      ) : (
        tracks &&
        tracks.map((track) => {
          return (
            <Track
              key={track.trackId}
              track={track}
              trackSelection={() => setTrack(track)}
            />
          )
        })
      )}
    </div>
  )
}

export default Tracks
