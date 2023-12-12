import { useState, useEffect, useContext } from 'react'
import { useRefresh } from '../scripts/hooks'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import Drawer from '../components/drawer'
import MiniPalette from '../components/miniPalette'
import Dialog from '../components/dialog'
import { PaletteContext } from '../scripts/storage'
import '../styles/home.css'

const HomePage = () => {
  const [Sidebar, setSidebar] = useState(window.innerWidth > 1280)
  const [DeleteDlg, setDeleteDlg] = useState(false)
  const [Current, setCurrent] = useState([])
  const [Always, setAlways] = useState(window.innerWidth > 1280)
  const Refresh = useRefresh()
  const navigate = useNavigate()
  const Storage = useContext(PaletteContext)

  useEffect(() => {
    function change () {
      const bool = window.innerWidth > 1280
      setAlways(bool)
      setSidebar(bool)
    }
    window.addEventListener('resize', change)
    return () => window.removeEventListener('resize', change)
  }, [])

  const render = () => {
    return (<div className="Home">
      <Navbar Type='home' navigate={navigate} openSidebar={openSidebar} />
      <div className="home-palettes">
        <Drawer
          Display={Sidebar}
          Contained={Always}
          Close={() => setSidebar(false)}
          navigate={navigate}
          Count= {Storage.getCount()}
        />
        <Dialog
          Type='YesNo'
          Label='Are you sure?'
          Content='This action will delete the palette...'
          Display={DeleteDlg}
          id={Current[0]}
          YesName='Delete'
          YesVariant='danger'
          Yes={deletePalette}
          NoName='Cancle'
          NoVariant='secondary'
          No={() => setDeleteDlg(false)}
        />
        {Storage.getPalettes().map(c =>
          <MiniPalette
            Type='home'
            key={c.id}
            palette={c}
            Favs={Storage.getFavouriteIds()}
            Hide={hidePalette}
            Delete={openDeleteDlg}
            Love={toggleFavourite}
          />
        )}
      </div>
    </div>)
  }

  const openSidebar = () => { setSidebar(true) }

  const openDeleteDlg = (id) => { setCurrent([id]); setDeleteDlg(true) }

  const hidePalette = (id) => { Storage.hidePalette(id); Refresh() }

  const toggleFavourite = (id) => { Storage.toggleFavourite(id); Refresh() }

  const deletePalette = () => {
    const id = Current[0]
    Storage.deletePalette(id)
    setDeleteDlg(false)
    Refresh()
  }

  return render()
}

export default HomePage
