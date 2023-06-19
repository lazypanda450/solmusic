import { useContext } from "react"
import { SpotifyContext } from "../context/context"
const styles = {
  navLink: `flex item-center mb-5 cursor-pointer hover:text-[#fff] text-[#b3b3b3]`,
  navLinkText: `ml-5`,
}

const NavLink = ({ title, icon }) => {
  const {setCurrentPage,setAlbumsShown} = useContext(SpotifyContext)
  const handleList = () =>{
    if(title==='Home'){
      setCurrentPage(0)
      setAlbumsShown(true)
    }else if (title==='Playing'){
      setCurrentPage(1)
      setAlbumsShown(false)
    }else if (title==='My Uploads'){
      setCurrentPage(2)
      setAlbumsShown(false)
    }else if(title==='Liked Songs'){
      setCurrentPage(3)
      setAlbumsShown(false)
    }
    
  }
  return (
    <div className={styles.navLink}
    onClick={handleList}>
      <img alt='' src={icon} width={20} height={20} />
      <p className={styles.navLinkText}>{title}</p>
    </div>
  )
}

export default NavLink
