import { useState } from 'react'
import Navbar from '../components/navbar'
import { useNavigate } from 'react-router-dom'
import { SlColorPicker, SlIcon } from '@shoelace-style/shoelace/dist/react'
import Dialog from '../components/dialog'
import chroma from 'chroma-js'
import { nanoid } from 'nanoid';
import { template } from '../scripts/colors'
import '../styles/newPalette.css'
const newColor = { id: nanoid(), name: 'New Color', color: '#555555' }

const NewPalette = ({ Storage }) => {
  const [PaletteDlg, setPaletteDlg] = useState(false)
  const [ColorDlg, setColorDlg] = useState(false)
  const [ConfirmDlg, setConfirmDlg] = useState(false)
  const [paletteName, setPaletteName] = useState(null)
  const [Id, setId] = useState(null)
  const [Colors, setColors] = useState([])
  const [Current, setCurrent] = useState([])
  const navigate = useNavigate()

  const render = () => {return (
    <div className="NewPalette">
      <Navbar
        Type='new'
        Name={paletteName}
        goBack={() => setConfirmDlg(true)}
        goHome={() => setConfirmDlg(true)}
        addBox={addColor}
        random={addRandomColors}
        clearAll={clearColors}
        onDiscard={() => setConfirmDlg(true)}
        onSave={savePalette}
        changeName={() => setPaletteDlg(true)}
      />
      <div className="newPalette-colors">
        <Dialog
          Type='renamePalette'
          paletteNames={Storage.getPaletteNames()}
          Input={paletteName}
          Display={PaletteDlg}
          Close={() => setPaletteDlg(false)}
          Rename={renamePalette}
        />
        <Dialog
          Type='renameColor'
          Id={Current[0]}
          Input={Current[1]}
          Display={ColorDlg}
          Close={() => setColorDlg(false)}
          Rename={renameColor}
        />
        <Dialog
          Type='confirm'
          Display={ConfirmDlg}
          Yes={() => setConfirmDlg(false)}
          No={() => navigate('/')}
          Close={() => setConfirmDlg(false)}
        />
        {Colors.map((c) => makeBox(c.id, c.name, c.color))}
      </div>
    </div>)
  }

  const makeBox = (id, name, color) => {
    const luminance = chroma(color).luminance()
    const [fg, bg] = luminance > 0.5 ? ['black', '#ffffff55'] : ['white', '#00000055']
    return (
      <div key={id} className="NewBox">
        <span
          className='delete-icon'
          style={{ color: fg }}
          onClick={()=>deleteColor(id)}
        >
          <SlIcon name='trash-fill'/>
        </span>
        <SlColorPicker
          className='picker'
          size='small'
          noFormatToggle
          value={color}
          onSlChange={(e) => changeColor(id, e.target.value)}
        />
        <div className='details'
          style={{ color: fg, background: bg }}
          onClick={() => {setColorDlg(true);setCurrent([id, name])}}>
          <span className='color-name'>{name}</span>
          <SlIcon className='edit-icon' name='pencil-fill' />
        </div>
      </div>
    )
  }

  const addColor = () => setColors((c) => [newColor, ...c])

  const addRandomColors = () => setColors((c) => [...template, ...c])

  const clearColors = () => setColors([])

  const renamePalette = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const name = [...data.entries()][0][1]
    setPaletteName(name)
    setId(name.toLowerCase().split(' ').join('_'))
    setPaletteDlg(false)
  }

  const renameColor = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const name = [...data.entries()][0][1]
    const id = Current[0]
    setColors((c) => c.map(c => {
      if (c.id !== id) return c
      return { ...c, name: name }
    }))
    setCurrent([])
    setColorDlg(false)
  }

  const changeColor = (id, color) => {
    setColors((c) => c.map(c => {
      if (c.id !== id) return c
      return { ...c, color: color }
    }))
  }

  const deleteColor = (id) => setColors((c) => c.filter(c =>c.id!==id))

  const savePalette = () => {
    if (paletteName === null) {
      setPaletteDlg(true)
    } else {
      const palette = {
        paletteName: paletteName,
        id: Id,
        colors: Colors.map(c => ({ name: c.name, color: c.color }))
      }
      Storage.savePalette(palette)
      navigate('/')
    }
  }

  return render()
}

export default NewPalette
