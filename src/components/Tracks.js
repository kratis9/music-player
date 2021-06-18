import React, { useState } from "react"

import Song from "./Track"

const Tracks = (props) => {
  console.log(props)

  const [selectedTrack, setTrack] = useState(null)
  const [isSelected, setSelection] = useState(false)

  const handleTrackSelection = (track) => {
    console.log("object")
    setTrack(track)
    props.trackSelection(selectedTrack)
    setSelection()
  }

  return (
    <div className="w-full">
      {!props.tracks ? (
        <h1>No tracks Found</h1>
      ) : (
        props.tracks &&
        props.tracks.map((track) => {
          return (
            <Song
              key={track.trackId}
              track={track}
              trackSelection={() => {
                handleTrackSelection(track)
              }}
            />
          )
        })
      )}
    </div>
  )
}

export default Tracks
