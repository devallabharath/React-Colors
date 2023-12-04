import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import MiniPalette from '../components/miniPalette'
import Dialog from '../components/dialog'
import '../styles/home.css'

const HomePage = ({ Storage }) => {
  const [, refresh] = useState(false)
  const [DeleteDlg, setDeleteDlg] = useState(false)
  const [Current, setCurrent] = useState([])
  const navigate = useNavigate()

  function render () {
    return (<div className="Home">
      <Navbar Type='home' navigate={navigate} />
      <div className="home-palettes">
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
          No={()=>setDeleteDlg(false)}
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

  const openDeleteDlg = (id) => {
    setCurrent([id])
    setDeleteDlg(true)
  }

  const hidePalette = (id) => {
    Storage.hidePalette(id)
    refresh((old) => !old)
  }

  const showPalette = (id) => {
    Storage.showPalette(id)
    refresh((old)=> !old)
  }

  const deletePalette = () => {
    const id = Current[0]
    Storage.deletePalette(id)
    setDeleteDlg(false)
    refresh((old) => !old)
  }

  return render()
}

export default HomePage
