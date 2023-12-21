import { lazy, useRef } from 'react'
import { HomeBar as Navbar } from '../components/navbar'
import { YesNoDialog } from '../components/dialog'
import { useNavigate } from 'react-router-dom'
import { rawPaletteType } from '../utils/types'
import '../styles/home.css'
const MiniPalette = lazy(() => import('../components/miniPalette'))
const Button = lazy(() => import('@shoelace-style/shoelace/dist/react/button'))

interface propType { Storage: any }

const HomePage = ({ Storage }: propType): JSX.Element => {
  let Current: any[]
  const DlgRef: React.MutableRefObject<any> = useRef()
  const PageRef: React.MutableRefObject<any> = useRef()
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
        ? <div ref={PageRef} className="home-palettes">
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

  const openDeleteDlg = (id: string, ref: any): void => { Current = [id, ref]; DlgRef.current.show() }

  const deletePalette = (): void => {
    Storage.deletePalette(Current[0])
    Current[1].current.remove()
    DlgRef.current.hide()
  }

  return render()
}

export default HomePage
