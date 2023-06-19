import { useContext } from 'react'
import NavLink from './navLink'
import NavRow from './NavRow'
import { SpotifyContext } from '../context/context'



const styles = {
  nav: `bg-black w-96 p-5 py-10 `,
  link: `hover:text-[#fff]`,
  playlistName: `text-[#b3b3b3] cursor-default text-sm hover:text-[#fff]`
}

const Nav = ({demo}) => {
  const{descSongs, currentSong,} = useContext(SpotifyContext)
  descSongs.sort((a,b)=>{
    return b.plays-a.plays
    })
  
  return (
    <div className={styles.nav}>
      <div className='mb-10'>
        <NavLink 
        icon='assets/home.svg' 
        title='Home' 
        className={styles.link}  />
        {!(JSON.stringify(currentSong)=='{}')&& <NavLink
          icon='assets/playlist.svg'
          title='Playing'
          className={styles.link}
        />}
        {!demo&&<NavLink
          icon='assets/playlist.svg'
          title='My Uploads'
          className={styles.link}
        />}
      </div>
      <div className='mb-5 border-b border-gray-100/10'>
        <NavLink
          icon='assets/heart.svg'
          title='Liked Songs'
          className={styles.link}
        />
      </div>
      <div className='mt-5 leading-8 flex flex-col gap-[10px]'>
        <p className='text-xl font-bold text-center'> 🔥🔥🔥 TOP 5 🔥🔥🔥 </p>
        {descSongs.slice(0,5).map((song) => {  
          return(<NavRow key={song.id} song={song}/>)
        })}
      </div>
    </div>
  )
}

export default Nav
