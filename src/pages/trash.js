import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRefresh } from '../scripts/hooks'
import Navbar from '../components/navbar'
import MiniPalette from '../components/miniPalette'
import Dialog from '../components/dialog'
import { SlButton } from '@shoelace-style/shoelace/dist/react'
import { PaletteContext } from '../scripts/storage'
import '../styles/home.css'

const HomePage = () => {
  const [DeleteDlg, setDeleteDlg] = useState(false)
  const [DeleteAllDlg, setDeleteAllDlg] = useState(false)
  const [Current, setCurrent] = useState(null)
  const Refresh = useRefresh()
  const navigate = useNavigate()
  const Storage = useContext(PaletteContext)

  function render () {
    const Trash = Storage.getDeletedPalettes()
    return (<div className="Home">
      <Navbar Type='trash' navigate={navigate} onBtnClick={clearDlg} />
      <Dialog
        Type='YesNo'
        Label='Are you sure?'
        Content='This action will delete the palette permanently...'
        Display={DeleteDlg}
        id={Current}
        YesName='Delete'
        YesVariant='danger'
        Yes={deletePalette}
        NoName='Cancle'
        NoVariant='secondary'
        No={() => setDeleteDlg(false)}
      />
      <Dialog
        Type='YesNo'
        Label='Are you sure?'
        Content='This action will clear the Trash...'
        Display={DeleteAllDlg}
        id={null}
        YesName='Clear'
        YesVariant='danger'
        Yes={clearTrash}
        NoName='Cancle'
        NoVariant='secondary'
        No={() => setDeleteAllDlg(false)}
      />
      {Trash.length !== 0
        ? <div className="home-palettes">
          {Trash.map(c => <MiniPalette
            Type="trash"
            key={c.id}
            Storage={Storage}
            palette={c}
            leftIconClick={restorePalette}
            rightIconClick={deleteDlg}
          />)}
        </div>
        : <div className="Empty">
          No palettes...
          <SlButton type='primary' onClick={() => navigate('/')}>
            Go Home
          </SlButton>
        </div>
      }
    </div>
    )
  }

  const restorePalette = (id) => {
    Storage.restorePalette(id)
    Refresh()
  }

  const deleteDlg = (id) => { setCurrent(id); setDeleteDlg(true) }

  const clearDlg = (id) => { setDeleteAllDlg(true) }

  const deletePalette = () => {
    Storage.deleteFromBin(Current)
    setDeleteDlg(false)
    Refresh()
  }

  const clearTrash = () => {
    Storage.clearTrash()
    setDeleteAllDlg(false)
    Refresh()
  }

  return render()
}

export default HomePage
