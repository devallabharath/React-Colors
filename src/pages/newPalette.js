import { useState, useRef } from 'react'
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
  const [LeaveDlg, setLeaveDlg] = useState(false)
  const [Picker, setPickerDlg] = useState(false)
  const [paletteName, setPaletteName] = useState(null)
  const [Id, setId] = useState(null)
  const [Colors, setColors] = useState([])
  const [Current, setCurrent] = useState([])
  const paletteNameInput = useRef(0)
  const colorNameInput = useRef(0)
  const navigate = useNavigate()

  const SortContainer = sortableContainer(({ children }) => <div className="newPalette-colors">{children}</div>)
  const SortElement = sortableElement(({c}) => makeBox(c.id, c.name, c.color))

  const render = () => {
    return (
      <div className="NewPalette">
        <Navbar
          Type='new'
          Name={paletteName}
          goBack={leavePage}
          goHome={leavePage}
          addBox={addColor}
          random={addRandomColors}
          clearAll={clearColors}
          onDiscard={leavePage}
          onSave={savePalette}
          changeName={() => setPaletteDlg(true)}
        />
        <Dialog
          Type='Rename'
          Label='Rename Palette'
          Display={PaletteDlg}
          IRef={paletteNameInput}
          IName='paletteName'
          IMin={3}
          IValue={paletteName}
          IHolder='Palette Name'
          IValidate={validatePaletteName}
          OnSubmit={renamePalette}
          Close={() => setPaletteDlg(false)}
        />
        <Dialog
          Type='Rename'
          Label='Rename Color'
          Display={ColorDlg}
          IRef={colorNameInput}
          IName='colorName'
          IMin={3}
          IValue={Current[1]}
          IHolder='Color Name'
          IValidate={validateColorName}
          OnSubmit={renameColor}
          Close={() => setColorDlg(false)}
        />
        <Dialog
          Type='YesNo'
          Label='Are you sure ?'
          Content='All the data will be erased...'
          Display={LeaveDlg}
          NoName='Stay'
          NoVariant='primary'
          No={() => setLeaveDlg(false)}
          YesName='Leave'
          YesVariant='danger'
          Yes={() => navigate('/')}
          Close={() => setLeaveDlg(false)}
        />
        <Dialog
          Type='Picker'
          Label='Pick a color'
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

  const validatePaletteName = (e) => {
    const paletteNames  = Storage.getPaletteNames()
    const duplicate = paletteNames.includes(e.target.value)
    const msg = duplicate ? 'This name already taken, choose another' : ''
    paletteNameInput.current.setCustomValidity(msg)
  }

  const renamePalette = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const name = [...data.entries()][0][1]
    setPaletteName(name)
    setId(name.toLowerCase().split(' ').join('_'))
    setPaletteDlg(false)
  }

  const validateColorName = (e) => {
    const colorNames  = Colors.map((c)=>c.name)
    const duplicate = colorNames.includes(e.target.value)
    const msg = duplicate ? 'This name already taken, choose another' : ''
    colorNameInput.current.setCustomValidity(msg)
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

  const leavePage = () => {
    if (Colors.length === 0 && paletteName === null) navigate('/')
    setLeaveDlg(true)
  }

  return render()
}

export default NewPalette
