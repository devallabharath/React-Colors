import { lazy, useState } from 'react'
import {HomeBar as Navbar} from '../components/navbar'
import Dialog from '../components/dialog'
import { useNavigate } from 'react-router-dom'
import { rawPaletteType } from '../utils/types'
import '../styles/home.css'
const MiniPalette = lazy(() => import('../components/miniPalette'))
const Button = lazy(() => import('@shoelace-style/shoelace/dist/react/button'))

interface propType { Storage: any }

const HomePage = ({Storage}: propType): JSX.Element => {
  const [DeleteDlg, setDeleteDlg] = useState(false)
  const [Current, setCurrent] = useState([''])
  const navigate = useNavigate()

  const render = (): JSX.Element => {
    const Palettes = Storage.getPalettes()
    return (<div className="Home">
      <Navbar />
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
          {Palettes.map((p: rawPaletteType) => <MiniPalette
            Type={'home'}
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

  const openDeleteDlg = (id: string): void => { setCurrent([id]); setDeleteDlg(true) }

  const deletePalette = (): void => { Storage.deletePalette(Current[0]); setDeleteDlg(false) }

  return render()
}

export default HomePage
