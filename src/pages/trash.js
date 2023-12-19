import { lazy, useRef, useState } from 'react'
import { useRefresh } from '../utils/hooks'
import { useNavigate } from 'react-router-dom'
import { FTHBar as Navbar } from '../components/navbar'
import { YesNoDialog } from '../components/dialog'
import '../styles/home.css'
const MiniPalette = lazy(() => import('../components/miniPalette'))
const Button = lazy(() => import('@shoelace-style/shoelace/dist/react/button'))

const TrashPage = (props) => {
  const DelRef = useRef()
  const DelAllRef = useRef()
  const [Current, setCurrent] = useState([])
  const Refresh = useRefresh()
  const navigate = useNavigate()
  const Storage = props.Storage

  function render () {
    const Trash = Storage.getDeletedPalettes()
    return (<div className="Home">
      <Navbar Type='Trash' onBtnClick={() => DelAllRef.current.show()} isDrawer={false} />
      <YesNoDialog
        ref={DelRef}
        Label='Are you sure?'
        Content='This action will delete the palette permanently...'
        YesName='Delete'
        YesVariant='danger'
        Yes={deletePalette}
      />
      <YesNoDialog
        ref={DelAllRef}
        Label='Are you sure?'
        Content='This action will clear the Trash...'
        YesName='Clear'
        YesVariant='danger'
        Yes={clearTrash}
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
    DelRef.current.show()
  }

  const deletePalette = () => {
    Storage.deleteFromBin(Current[0])
    Refresh()
  }

  const clearTrash = () => {
    Storage.clearTrash()
    Refresh()
  }

  return render()
}

export default TrashPage
