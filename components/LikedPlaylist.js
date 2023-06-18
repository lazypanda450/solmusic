import { useContext} from "react"
import TableRow from "./TableRow"
import { SpotifyContext } from "../context/context"

const styles = {
    tableWrapper: `max-w-7xl m-auto p-3 mt-5 mb-40`,
    table: `w-full text-left`,
    tableHeader: `border-b border-gray-100/20 pb-5 opacity-50`
}
const LikedPlaylist = ({albums}) => {
  const {setListCount, likedSongs, setAlbumDuration} = useContext(SpotifyContext)
  var songArr = []
  var count = 0
  var minutes = 0
  var seconds = 0
  setListCount(0)
  setAlbumDuration(0)
  
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <tbody className={styles.tableHeader}>
            <tr>
                <th className="pb-3">#</th>
                <th className="pb-3">Başlık</th>
                <th className="pb-3">Oynatılan</th>
                <th className="pb-3">
                    <img src="assets/time.svg" alt="time" />
                </th>
            </tr>
        </tbody>
        <tbody className="mb-6 block"></tbody>
        {albums.map((album)=>{ 
          album.songs.map((song)=>{
                if(song.isLiked===true){
                    songArr.push(song)
                }
          })
                       
        })}
        {songArr.map(e=>{ 
            count++
            setListCount(count)
            minutes = minutes + parseInt(e.songLength.slice(0,1))
            seconds = (seconds + parseInt(e.songLength.slice(2,e.songLength.length)))
            setAlbumDuration(minutes+parseInt(seconds/60))
            return <TableRow key={e.id} song={e}/>
        })}
      </table>
    </div>
  )
}

export default LikedPlaylist
