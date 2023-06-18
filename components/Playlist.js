import { useContext } from "react"
import TableRow from "./TableRow"
import { SpotifyContext } from "../context/context"

const styles = {
    tableWrapper: `max-w-7xl m-auto p-3 mt-5 mb-40`,
    table: `w-full text-left`,
    tableHeader: `border-b border-gray-100/20 pb-5 opacity-50`
}
const Playlist = ({songs}) => {
  const {setListCount} = useContext(SpotifyContext)
  var count = 0
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <tbody className="mb-6 block"></tbody>

        {songs.map((song)=>{ 
          count++
          setListCount(count) 
          return <TableRow key={song.id} song={song.account}/>         
        })}
      </table>
    </div>
  )
}

export default Playlist
