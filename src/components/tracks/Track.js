/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react"

const Track = ({ track, trackSelection, isSelected }) => {
  const currentTrackName = track.trackName
  const currentCollectionName = track.collectionName
  const currentArtwork = track.artworkUrl100.replace(/100x100/g, "600x600")

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      onClick={() => {
        trackSelection()
      }}
      className="flex hover:bg-gray-300 items-center border-t border-gray-400 px-3"
    >
      <div className="object-center">
        <img
          className="rounded-lg"
          width="100px"
          height="100px"
          src={currentArtwork}
          alt={currentTrackName}
        />
      </div>

      <div className="m-10 text-left">
        <h1>
          <strong>{currentCollectionName}</strong>
        </h1>
        <h2>{`${currentCollectionName} — ${currentTrackName}`}</h2>
      </div>
      {isSelected ? (
        <figure>
          <img className="h-16 w-16" alt="music playing status" />
        </figure>
      ) : (
        ""
      )}
    </div>
  )
}

export default Track
