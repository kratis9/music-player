import axios from "axios"

export const getArtistSongs = async (artistName) => {
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
        `https://itunes.apple.com/search?term=${artistName}&country=us&entity=musicArtist&limit=1`
      )
    })
  return resData
}
