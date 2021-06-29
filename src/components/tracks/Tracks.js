import React from "react"

import Track from "./Track"

const Tracks = ({ tracks, trackSelection }) => {
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
              trackSelection={() => trackSelection(track)}
            />
          )
        })
      )}
    </div>
  )
}

export default Tracks
