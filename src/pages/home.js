import { useState, useContext } from 'react'
import { useRefresh } from '../scripts/hooks'
import Navbar from '../components/navbar'
import MiniPalette from '../components/miniPalette'
import Dialog from '../components/dialog'
import { PaletteContext } from '../scripts/storage'
import '../styles/home.css'

const HomePage = () => {
  const [DeleteDlg, setDeleteDlg] = useState(false)
  const [Current, setCurrent] = useState([])
  const Refresh = useRefresh()
  const Storage = useContext(PaletteContext)

  const render = () => {
    return (<div className="Home">
      <Navbar Type='home' isDrawer={true} />
      <div className="home-palettes">
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
        {Storage.getPalettes().map(p =>
          <MiniPalette
            Type='home'
            key={p.id}
            palette={p}
            Favs={Storage.getFavouriteIds()}
            Hide={hidePalette}
            Delete={openDeleteDlg}
            Love={toggleFavourite}
          />
        )}
      </div>
    </div>)
  }

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
