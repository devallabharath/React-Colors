import { lazy, useRef } from 'react'
import { useRefresh } from '../utils/hooks'
import { useNavigate } from 'react-router-dom'
import { FTHBar as Navbar } from '../components/navbar'
import { YesNoDialog } from '../components/dialog'
import { rawPaletteType } from '../utils/types'
import '../styles/home.css'
const MiniPalette = lazy(() => import('../components/miniPalette'))
const Button = lazy(() => import('@shoelace-style/shoelace/dist/react/button'))

const HiddenPage = ({ Storage }: any): JSX.Element => {
  const DlgRef: any = useRef()
  const Refresh = useRefresh()
  const navigate = useNavigate()

  function render(): JSX.Element {
    const Hidden = Storage.getHiddenPalettes()
    return (<div className="Home">
      <Navbar Type='Hidden' onBtnClick={showDlg} isDrawer={false} />
      <YesNoDialog
        ref={DlgRef}
        Label='Are you sure?'
        Content='This action will move all the palette to home...'
        YesName='Show All'
        YesVariant='primary'
        Yes={showAll}
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
    Refresh()
  }

  const showDlg = (): void => {
    if (Storage.hidden.length === 0) return
    DlgRef.current.show()
  }

  const showAll = (): void => {
    Storage.showAllPalettes()
    Refresh()
  }

  return render()
}

export default HiddenPage
