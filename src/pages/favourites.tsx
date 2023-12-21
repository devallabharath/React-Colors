import { lazy, useRef } from 'react'
import { FTHBar as Navbar } from '../components/navbar'
import { YesNoDialog } from '../components/dialog'
import { useNavigate } from 'react-router-dom'
import { rawPaletteType } from '../utils/types'
import '../styles/home.css'
const MiniPalette = lazy(() => import('../components/miniPalette'))
const Button = lazy(() => import('@shoelace-style/shoelace/dist/react/button'))

interface propType { Storage: any }

const Favourites = ({ Storage }: propType): JSX.Element => {
  const DlgRef: React.MutableRefObject<any> = useRef()
  const PageRef: React.MutableRefObject<any> = useRef()
  const navigate = useNavigate()

  const render = (): JSX.Element => {
    const Palettes = Storage.getFavouritePalettes()
    return (<div className="Home">
      <Navbar Type={'favourites'} onBtnClick={openDlg} isDrawer={false} />
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
          {Palettes.map((p: rawPaletteType) => <MiniPalette
            Type='favourites'
            key={p.id}
            palette={p}
            Storage={Storage}
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

  const openDlg = () => { PageRef?.current?.children?.length > 0 && DlgRef.current.show() }

  const ClearFavs = () => {
    Storage.clearFavourites()
    window.location.reload()
  }

  return render()
}

export default Favourites
