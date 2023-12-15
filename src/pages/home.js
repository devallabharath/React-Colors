import { lazy, useState } from 'react'
import Navbar from '../components/navbar'
import Dialog from '../components/dialog'
import '../styles/home.css'
import { useNavigate } from 'react-router-dom'
const MiniPalette = lazy(() => import('../components/miniPalette'))
const Button = lazy(() => import('@shoelace-style/shoelace/dist/react/button'))

const HomePage = ({ Type, Storage }) => {
  const [DeleteDlg, setDeleteDlg] = useState(false)
  const [Current, setCurrent] = useState([])
  const navigate = useNavigate()
  const favs = Type === 'favourites'

  const render = () => {
    const Palettes = favs ? Storage.getFavouritePalettes() : Storage.getPalettes()
    return (<div className="Home">
      <Navbar Type={Type} isDrawer={!favs} />
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
            Type={Type}
            key={p.id}
            palette={p}
            Storage={Storage}
            Delete={openDeleteDlg}
          />)}
        </div>
        : <div className="Empty">
          No palettes...
          <Button type='primary' onClick={() => navigate(favs ? '/' : '/palettes/new')}>
            Go Home
          </Button>
        </div>
      }
    </div>)
  }

  const openDeleteDlg = (id) => { setCurrent([id]); setDeleteDlg(true) }

  const deletePalette = () => { Storage.deletePalette(Current[0]); setDeleteDlg(false) }

  return render()
}

export default HomePage
