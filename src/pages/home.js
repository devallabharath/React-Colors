import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import Drawer from '../components/drawer'
import MiniPalette from '../components/miniPalette'
import Dialog from '../components/dialog'
import '../styles/home.css'

const HomePage = ({ Storage }) => {
  const [state, refresh] = useState(false)
  const [Sidebar, setSidebar] = useState(false)
  const [DeleteDlg, setDeleteDlg] = useState(false)
  const [Current, setCurrent] = useState([])
  const navigate = useNavigate()

  function render () {
    return (<div className="Home">
      <Navbar Type='home' navigate={navigate} openSidebar={openSidebar} />
      <div className="home-palettes">
        <Drawer
          Display={Sidebar}
          Close={() => setSidebar(false)}
        />
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
        {Storage.palettes.map(c =>
          <MiniPalette
            key={c.id}
            Storage={Storage}
            palette={c}
            Hide={hidePalette}
            Delete={openDeleteDlg}
          />
        )}
      </div>
    </div>)
  }

  const openSidebar = () => { setSidebar(true) }

  const openDeleteDlg = (id) => { setCurrent([id]); setDeleteDlg(true) }

  const hidePalette = (id) => { Storage.hidePalette(id); refresh(!state) }

  const showPalette = (id) => { Storage.showPalette(id); refresh(!state) }

  const deletePalette = () => {
    const id = Current[0]
    Storage.deletePalette(id)
    setDeleteDlg(false)
    refresh(!state)
  }

  return render()
}

export default HomePage
