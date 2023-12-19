import { lazy, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {FTHBar as Navbar} from '../components/navbar'
import Dialog from '../components/dialog'
import '../styles/home.css'
const MiniPalette = lazy(() => import('../components/miniPalette'))
const Button = lazy(() => import('@shoelace-style/shoelace/dist/react/button'))

const TrashPage = (props) => {
  const [DeleteDlg, setDeleteDlg] = useState(false)
  const [DeleteAllDlg, setDeleteAllDlg] = useState(false)
  const [Current, setCurrent] = useState([])
  const navigate = useNavigate()
  const Storage = props.Storage

  function render () {
    const Trash = Storage.getDeletedPalettes()
    return (<div className="Home">
      <Navbar Type='Trash' onBtnClick={clearDlg} isDrawer={false} />
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
            rightIconClick={deleteDlg}
          />)}
        </div>
        : <div className="Empty">
          No palettes...
          <Button type='primary' onClick={() => navigate('/')}>
            Go Home
          </Button>
        </div>
      }
    </div>
    )
  }

  const deleteDlg = (id, ref) => {
    setCurrent([id, ref])
    setDeleteDlg(true)
  }

  const clearDlg = () => { setDeleteAllDlg(true) }

  const deletePalette = () => {
    Storage.deleteFromBin(Current[0])
    setDeleteDlg(false)
    Current[1].current.remove()
  }

  const clearTrash = () => {
    Storage.clearTrash()
    setDeleteAllDlg(false)
  }

  return render()
}

export default TrashPage
