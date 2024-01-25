import { lazy, useRef, useContext } from 'react'
import { FTHBar as Navbar } from '../components/navbar'
import { storageContext } from '../utils/storage'
import { YesNoDialog } from '../components/dialog'
import { useNavigate } from 'react-router-dom'
import { component, dialogRef, rawPalette } from '../utils/types'
import '../styles/home.css'
const MiniPalette = lazy(() => import('../components/miniPalette'))
const Button = lazy(() => import('@shoelace-style/shoelace/dist/react/button'))

const Favourites: component<any> = () => {
  const DlgRef: dialogRef = useRef()
  const PageRef: any = useRef()
  const navigate = useNavigate()
  const Storage = useContext(storageContext)

  const render = () => {
    const Palettes = Storage.getFavouritePalettes()
    return (<div className="Home">
      <Navbar Type={'Favourites'} onBtnClick={openDlg} isDrawer={false} />
      <YesNoDialog
        ref={DlgRef}
        Label='Are you sure?'
        Content='This action will remove all your favourites...'
        YesName='Clear'
        YesVariant='danger'
        Yes={ClearFavs}
      />
      {Palettes.length !== 0
        ? <div ref={PageRef} className="home-palettes">
          {Palettes.map((p: rawPalette) => <MiniPalette
            Type='Favourites'
            key={p.id}
            palette={p}
          />)}
        </div>
        : <div className="Empty">
          No palettes...
          <Button onClick={() => navigate('/')}>
            Go Home
          </Button>
        </div>
      }
    </div>)
  }

  const openDlg = () => { PageRef?.current?.children?.length > 0 && DlgRef?.current?.show() }

  const ClearFavs = () => {
    Storage.clearFavourites()
    window.location.reload()
  }

  return render()
}

export default Favourites
