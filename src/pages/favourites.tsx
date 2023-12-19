import { lazy, useState } from 'react'
import { FTHBar as Navbar } from '../components/navbar'
import Dialog from '../components/dialog'
import { useNavigate } from 'react-router-dom'
import { rawPaletteType } from '../utils/types'
import '../styles/home.css'
const MiniPalette = lazy(() => import('../components/miniPalette'))
const Button = lazy(() => import('@shoelace-style/shoelace/dist/react/button'))

interface propType { Storage: any }

const Favourites = ({Storage}: propType): JSX.Element => {
  const [ClearDlg, setClearDlg] = useState(false)
  const navigate = useNavigate()

  const render = (): JSX.Element => {
    const Palettes = Storage.getFavouritePalettes()
    return (<div className="Home">
      <Navbar Type={'favourites'} onBtnClick={()=> setClearDlg(true)} isDrawer={false} />
      <Dialog
        Type='YesNo'
        Label='Are you sure?'
        Content='This action will remove all your favourites...'
        Display={ClearDlg}
        YesName='Clear'
        YesVariant='danger'
        Yes={ClearFavs}
        NoName='Cancle'
        NoVariant='secondary'
        No={() => setClearDlg(false)}
      />
      {Palettes.length !== 0
        ? <div className="home-palettes">
          {Palettes.map((p: rawPaletteType) => <MiniPalette
            Type={'favourites'}
            key={p.id}
            palette={p}
            Storage={Storage}
          />)}
        </div>
        : <div className="Empty">
          No palettes...
          <Button onClick={() => navigate('/' )}>
            Go Home
          </Button>
        </div>
      }
    </div>)
  }

  const ClearFavs = () => {
    Storage.clearFavourites()
    setClearDlg(false)
  }

  return render()
}

export default Favourites
