import { useContext, useEffect, useState } from "react"
import { SpotifyContext } from "../context/context"
const styles= {
    th:`cursor-pointer p-4`,
    tb:`hover:opacity-50 cursor-pointer `,
}

const TableRow = ({song}) => {
    const [style, setStyle] = useState('')
    const { playOnSelect, duration,currentSong } = useContext(SpotifyContext)
    useEffect(() => {
      if(currentSong === song){
        setStyle('rounded bg-gradient-to-r from-green-300/30 to-green-700/30')
      }else{
        setStyle('')
      }
    }, [currentSong])
    
    return (
    <tbody className={styles.tb + style}>
        <tr onClick={()=>playOnSelect(song)}>
            <th className={styles.th +` rounded-l-md`}>{Number.isInteger(song.index)&&song.index+1}</th>
            <th className={styles.th}>
                <div>
                    <p className="font bold">{song.title}</p>
                    <p className="opacity-50">{song.artiste}</p>
                </div>
            </th>
            <th className={styles.th}>{song.plays&&Intl.NumberFormat().format(song.plays)}</th>
            <th className={styles.th +` rounded-r-md`}>{song.songLength}</th>
        </tr>
    </tbody>
  )
}

export default TableRow
