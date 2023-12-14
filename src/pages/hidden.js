import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import Dialog from '../components/dialog'
import MiniPalette from '../components/miniPalette'
import { SlButton } from '@shoelace-style/shoelace/dist/react'
import { useRefresh } from '../utils/hooks'
import '../styles/home.css'

const HomePage = (props) => {
  const [Dlg, setDlg] = useState(false)
  const Refresh = useRefresh()
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
          {Hidden.map(c => <MiniPalette
            Type="hidden"
            key={c.id}
            Storage={Storage}
            palette={c}
            rightIconClick={showPalette}
          />
          )}
        </div>
        : <div className="Empty">
          No palettes...
          <SlButton type='primary' onClick={() => navigate('/')}>
            Go Home
          </SlButton>
        </div>
      }
    </div>)
  }

  const showPalette = (id) => {
    Storage.showPalette(id)
    Refresh()
  }

  const showDlg = () => {
    if (Storage.hidden.length === 0) return
    setDlg(true)
  }

  const showAll = () => {
    Storage.showAllPalettes()
    setDlg(false)
    Refresh()
  }

  return render()
}

export default HomePage
