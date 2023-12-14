import { useState } from 'react'
import { useRefresh } from '../utils/hooks'
import Navbar from '../components/navbar'
import MiniPalette from '../components/miniPalette'
import Dialog from '../components/dialog'
import { SlButton } from '@shoelace-style/shoelace/dist/react'
import '../styles/home.css'
import { useNavigate } from 'react-router-dom'

const HomePage = (props) => {
  const [DeleteDlg, setDeleteDlg] = useState(false)
  const [Current, setCurrent] = useState([])
  const Refresh = useRefresh()
  const navigate = useNavigate()
  const Storage = props.Storage

  const render = () => {
    const Palettes = props.favs ? Storage.getFavouritePalettes() : Storage.getPalettes()
    return (<div className="Home">
      <Navbar Type={props.favs ? 'favourites' : 'home'} isDrawer={!props.favs} />
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
      {Palettes.length !== 0
        ? <div className="home-palettes">
          {Palettes.map(p => <MiniPalette
            Type='home'
            key={p.id}
            palette={p}
            Storage={Storage}
            Hide={hidePalette}
            Delete={openDeleteDlg}
            Love={toggleFavourite}
          />)}
        </div>
        : <div className="Empty">
          No palettes...
          <SlButton type='primary' onClick={() => navigate(props.favs ? '/' : '/palettes/new')}>
            Go Home
          </SlButton>
        </div>
      }
    </div>)
  }

  const openDeleteDlg = (id) => { setCurrent([id]); setDeleteDlg(true) }

  const hidePalette = (id) => { Storage.hidePalette(id); Refresh() }

  const toggleFavourite = (id) => { Storage.toggleFavourite(id) }

  const deletePalette = () => {
    const id = Current[0]
    Storage.deletePalette(id)
    setDeleteDlg(false)
    Refresh()
  }

  return render()
}

export default HomePage
