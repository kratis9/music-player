import axios from "axios"

export const getSongsByArtist = async (artistName) => {
  let resData
  resData = await axios
    .get(
      `https://cors.bridged.cc/https://itunes.apple.com/search?term=${artistName}&entity=musicTrack&kind=song&limit=10`
    )
    .then((data) => {
      resData = data
      return resData.data.results
    })
    .catch(() => {
      console.log("Artists name could not be retrieved.")
      console.log(
        `https://itunes.apple.com/search?term=${artistName}&country=us&entity=musicArtist&limit=10`
      )
      return resData
    })
  return resData
}

export const getSongsByAlbum = async (albumId) => {
  let resData
  resData = await axios
    .get(
      `https://cors.bridged.cc/https://itunes.apple.com/lookup?id=${albumId}&entity=song`
    )
    .then((data) => {
      resData = data
      return resData.data.results
    })
    .catch(() => {
      console.log("Artists name could not be retrieved.")
      console.log(
        `https://cors.bridged.cc/https://itunes.apple.com/search?id=${albumId}&entity=song&media=music`
      )
      return resData
    })
  return resData
}
