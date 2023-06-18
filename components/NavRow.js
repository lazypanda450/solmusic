import { useContext, useState,useEffect } from "react"
import { SpotifyContext } from "../context/context"

const styles= {
    th:`cursor-pointer p-4 flex flex-col items-start`,
    tb:`hover:opacity-50 cursor-pointer flex justify-between`,

}

const NavRow = ({song}) => {
    const [style, setStyle] = useState('')
    const { playOnSelect, duration,currentSong } = useContext(SpotifyContext)
    useEffect(() => {
      if(currentSong === song){
        setStyle(' rounded bg-gradient-to-r from-green-300/30 to-green-700/30')
      }else{
        setStyle('')
      }
    }, [currentSong])
    return (
    <tbody>
        <tr className={styles.tb + style} onClick={()=>playOnSelect(song)}>
            <th className={styles.th}>
                    <p className="font bold">{song.title}</p>
                    <p className="opacity-50">{song.artiste}</p>
            </th>
            <th className={styles.th}>{Intl.NumberFormat().format(song.plays)}</th>
        </tr>
    </tbody>
  )
}

export default NavRow
