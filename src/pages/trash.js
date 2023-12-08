import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import MiniPalette from '../components/miniPalette'
import Dialog from '../components/dialog'
import '../styles/home.css'

const HomePage = ({ Storage }) => {
  const [state, refresh] = useState(false)
  const [DeleteDlg, setDeleteDlg] = useState(false)
  const [Current, setCurrent] = useState([])
  const navigate = useNavigate()

  function render () {
    return (<div className="Home">
      <Navbar Type='trash' navigate={navigate} empty={emptyTrash} />
      <div className="home-palettes">
        <Dialog
          Type='YesNo'
          Label='Are you sure?'
          Content='This action will delete the palette permanently...'
          Display={DeleteDlg}
          id={Current[0]}
          YesName='Delete'
          YesVariant='danger'
          Yes={deletePalette}
          NoName='Cancle'
          NoVariant='secondary'
          No={() => setDeleteDlg(false)}
        />
        {Storage.getDeletedPalettes().map(c =>
          <MiniPalette
            Type="trash"
            key={c.id}
            Storage={Storage}
            palette={c}
            leftIconClick={restorePalette}
            rightIconClick={openDeleteDlg}
          />
        )}
      </div>
    </div>)
  }

  const restorePalette = (id) => { Storage.restorePalette(id) }

  const openDeleteDlg = (id) => { setCurrent([id]); setDeleteDlg(true) }

  const deletePalette = () => {
    const id = Current[0]
    Storage.deletePalette(id)
    setDeleteDlg(false)
    refresh(!state)
  }

  const emptyTrash = () => {}

  return render()
}

export default HomePage
