import { useState } from 'react'
import Navbar from '../components/navbar'
import { useNavigate } from 'react-router-dom'
import { SlIcon } from '@shoelace-style/shoelace/dist/react'
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import { arrayMove } from 'react-sortable-hoc';
import Dialog from '../components/dialog'
import chroma from 'chroma-js'
import { nanoid } from 'nanoid';
import { template } from '../scripts/colors'
import '../styles/newPalette.css'
const newColor = { name: 'New Color', color: '#555555' }

const NewPalette = ({ Storage }) => {
  const [PaletteDlg, setPaletteDlg] = useState(false)
  const [ColorDlg, setColorDlg] = useState(false)
  const [ConfirmDlg, setConfirmDlg] = useState(false)
  const [Picker, setPickerDlg] = useState(false)
  const [paletteName, setPaletteName] = useState(null)
  const [Id, setId] = useState(null)
  const [Colors, setColors] = useState([])
  const [Current, setCurrent] = useState([])
  const navigate = useNavigate()

  const SortContainer = sortableContainer(({ children }) => <div className="newPalette-colors">{children}</div>)
  const SortElement = sortableElement(({c}) => makeBox(c.id, c.name, c.color))

  const render = () => {
    return (
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
        <Dialog
          Type='colorPicker'
          Display={Picker}
          id={Current[0]}
          color={Current[1]}
          changeColor={changeColor}
          Close={() => setPickerDlg(false)}
        />
        <SortContainer onSortEnd={sortColors} axis='xy' distance={10}>
          {Colors.map((c, i) =>
            <SortElement
              index={i}
              key={`${c.color}${i}`}
              c={c}
            />
          )}
        </SortContainer>
      </div>)
  }

  const makeBox = (id, name, color) => {
    const luminance = chroma(color).luminance()
    const [fg, bg] = luminance > 0.5 ? ['black', '#ffffff55'] : ['white', '#00000055']
    return (
      <div
        className="NewBox"
        style={{ background: color }}
      >
        <span
          className='delete-icon'
          style={{ color: fg }}
          onClick={() => deleteColor(id)}
        >
          <SlIcon name='trash-fill' />
        </span>
        <span
          className='picker-icon'
          onClick={() => { setCurrent([id, color]); setPickerDlg(true) }}
          style={{ color: fg }}>
          <SlIcon name='eyedropper' />
        </span>
        <div className='details'
          style={{ color: fg, background: bg }}
          onClick={() => { setCurrent([id, name]); setColorDlg(true) }}>
          <span className='color-name'>{name}</span>
          <SlIcon className='edit-icon' name='pencil-fill' />
        </div>
      </div>
    )
  }

  const addColor = () => setColors((c) => [{id:nanoid(), ...newColor}, ...c])

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
    setPickerDlg(false)
  }

  const deleteColor = (id) => setColors((c) => c.filter(c => c.id !== id))

  const sortColors = ({ oldIndex, newIndex }) => {
    setColors((colors) => arrayMove(colors, oldIndex, newIndex))
  };

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
