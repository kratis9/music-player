import React, { useState, useEffect, useRef } from "react"
import AudioControls from "./AudioPlayerControls"

import "../../App.css"

const AudioPlayer = ({ track }) => {
  // State
  const [trackProgress, setTrackProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  // Destructure for conciseness
  const { previewUrl } = track

  // Refs
  const audioRef = useRef(new Audio(previewUrl))
  const intervalRef = useRef()
  const isReady = useRef(false)

  // Destructure for conciseness
  const { duration } = audioRef.current

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%"
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      if (!audioRef.current.ended) {
        setTrackProgress(audioRef.current.currentTime)
      }
    }, [1000])
  }

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current)
    audioRef.current.currentTime = value
    setTrackProgress(audioRef.current.currentTime)
  }

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true)
    }
    startTimer()
  }

  const toPrevTrack = () => {}

  const toNextTrack = () => {}

  useEffect(() => {
    const ref = audioRef.current
   
    if (isPlaying) {
      ref.play()
      startTimer()
    } else if (!ref.paused) {
      ref.pause()
    }
  }, [isPlaying])

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause()

    audioRef.current = new Audio(previewUrl)
    setTrackProgress(audioRef.current.currentTime)

    if (isReady.current) {
      audioRef.current.play()
      setIsPlaying(true)
      startTimer()
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true
    }
  }, [track])

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause()
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div className="audio-player">
      <div className="track-info">
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
      </div>
    </div>
  )
}

export default AudioPlayer
