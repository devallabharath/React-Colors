import { lazy, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import Dialog from '../components/dialog'
import '../styles/home.css'
const MiniPalette = lazy(() => import('../components/miniPalette'))
const Button = lazy(() => import('@shoelace-style/shoelace/dist/react/button'))

const HomePage = (props) => {
  const [Dlg, setDlg] = useState(false)
  const navigate = useNavigate()
  const Storage = props.Storage

  function render () {
    const Hidden = Storage.getHiddenPalettes()
    return (<div className="Home">
      <Navbar Type='hidden' navigate={navigate} onBtnClick={showDlg} />
      <Dialog
        Type='YesNo'
        Label='Are you sure?'
        Content='This action will move all the palette to home...'
        Display={Dlg}
        id={null}
        YesName='Show All'
        YesVariant='primary'
        Yes={showAll}
        NoName='Cancle'
        NoVariant='secondary'
        No={() => setDlg(false)}
      />
      {Hidden.length !== 0
        ? <div className="home-palettes">
          {Hidden.map(p => <MiniPalette
            Type="hidden"
            key={p.id}
            Storage={Storage}
            palette={p}
            rightIconClick={showPalette}
          />
          )}
        </div>
        : <div className="Empty">
          No palettes...
          <Button type='primary' onClick={() => navigate('/')}>
            Go Home
          </Button>
        </div>
      }
    </div>)
  }

  const showPalette = (id, ref) => {
    Storage.showPalette(id)
    ref.current.remove()
  }

  const showDlg = () => {
    if (Storage.hidden.length === 0) return
    setDlg(true)
  }

  const showAll = () => {
    Storage.showAllPalettes()
    setDlg(false)
  }

  return render()
}

export default HomePage
