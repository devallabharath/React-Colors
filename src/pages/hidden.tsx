import { lazy, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import Dialog from '../components/dialog'
import { rawPaletteType } from '../utils/types'
import '../styles/home.css'
const MiniPalette = lazy(() => import('../components/miniPalette'))
const Button = lazy(() => import('@shoelace-style/shoelace/dist/react/button'))

const HiddenPage = ({ Storage }: any): JSX.Element => {
  const [Dlg, setDlg] = useState(false)
  const navigate = useNavigate()

  function render(): JSX.Element {
    const Hidden = Storage.getHiddenPalettes()
    return (<div className="Home">
      <Navbar Type='hidden' navigate={navigate} onBtnClick={showDlg} />
      <Dialog
        Type='YesNo'
        Label='Are you sure?'
        Content='This action will move all the palette to home...'
        Display={Dlg}
        YesName='Show All'
        YesVariant='primary'
        Yes={showAll}
        NoName='Cancle'
        NoVariant='secondary'
        No={() => setDlg(false)}
      />
      {Hidden.length !== 0
        ? <div className="home-palettes">
          {Hidden.map((p: rawPaletteType) => <MiniPalette
            Type="hidden"
            key={p.id}
            Storage={Storage}
            palette={p}
            rightIconClick={showPalette}
          />)}
        </div>
        : <div className="Empty">
          No palettes...
          <Button onClick={() => navigate('/')}>Go Home</Button>
        </div>
      }
    </div>)
  }

  const showPalette = (id: string, ref: React.MutableRefObject<any>): void => {
    Storage.showPalette(id)
    ref.current.remove()
  }

  const showDlg = (): void => {
    if (Storage.hidden.length === 0) return
    setDlg(true)
  }

  const showAll = (): void => {
    Storage.showAllPalettes()
    setDlg(false)
  }

  return render()
}

export default HiddenPage
