import { lazy, useRef } from 'react'
import { useRefresh } from '../utils/hooks'
import { HomeBar as Navbar } from '../components/navbar'
import { YesNoDialog } from '../components/dialog'
import { useNavigate } from 'react-router-dom'
import { rawPaletteType } from '../utils/types'
import '../styles/home.css'
const MiniPalette = lazy(() => import('../components/miniPalette'))
const Button = lazy(() => import('@shoelace-style/shoelace/dist/react/button'))

interface propType { Storage: any }

const HomePage = ({ Storage }: propType): JSX.Element => {
  let CurrentId: string
  const DlgRef: any = useRef()
  const Refresh = useRefresh()
  const navigate = useNavigate()

  const render = (): JSX.Element => {
    const Palettes = Storage.getPalettes()
    return (<div className="Home">
      <Navbar />
      <YesNoDialog
        ref={DlgRef}
        Label='Are you sure?'
        Content='This action will delete the palette...'
        YesName='Delete'
        YesVariant='danger'
        Yes={deletePalette}
      />
      {Palettes.length !== 0
        ? <div className="home-palettes">
          {Palettes.map((p: rawPaletteType) => <MiniPalette
            Type='home'
            key={p.id}
            palette={p}
            Storage={Storage}
            Delete={openDeleteDlg}
          />)}
        </div>
        : <div className="Empty">
          No palettes...
          <Button onClick={() => navigate('/palettes/new')}>Go Home</Button>
        </div>
      }
    </div>)
  }

  const openDeleteDlg = (id: string): void => { CurrentId = id; DlgRef.current.show() }

  const deletePalette = (): void => { Storage.deletePalette(CurrentId); Refresh() }

  return render()
}

export default HomePage
