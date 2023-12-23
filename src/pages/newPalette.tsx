import { useState, useRef } from 'react'
import { NewBar as Navbar } from '../components/navbar'
import { useNavigate } from 'react-router-dom'
import { SlIcon } from '@shoelace-style/shoelace/dist/react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { RenameDialog, YesNoDialog, PickerDialog } from '../components/dialog'
import chroma from 'chroma-js'
import { nanoid } from 'nanoid';
import { arrayMove, template } from '../utils/colors'
import '../styles/newPalette.css'
const newColor = { name: 'New Color', color: '#555555' }

type colorsType = { id: string, name: string, color: string }

const NewPalette: React.FC<any> = ({ Storage }) => {
  const [paletteName, setPaletteName] = useState<string | null>(null)
  const [Id, setId] = useState<string | undefined>(undefined)
  const [Colors, setColors] = useState<colorsType[]>([])
  const [Current, setCurrent] = useState<string[]>([])
  const PaletteDlgRef: React.Ref<any> = useRef()
  const ColorDlgRef: React.Ref<any> = useRef()
  const LeaveDlgRef: React.Ref<any> = useRef()
  const PickerDlgRef: React.Ref<any> = useRef()
  const paletteNameRef: React.Ref<any> = useRef()
  const colorNameRef: React.Ref<any> = useRef()
  const navigate = useNavigate()
  const paletteNames: string[] = Storage.getPaletteNames()

  const render = () => {
    return (
      <div className="NewPalette">
        <Navbar
          Name={paletteName}
          goHome={leavePage}
          addBox={addColor}
          random={addRandomColors}
          clearAll={clearColors}
          onDiscard={leavePage}
          onSave={savePalette}
          changeName={() => PaletteDlgRef.current.show()}
        />
        <RenameDialog
          ref={PaletteDlgRef}
          Label='Rename Palette'
          IRef={paletteNameRef}
          IName='paletteName'
          IValue={paletteName}
          IHolder='Palette Name'
          IValidate={validatePaletteName}
          OnSubmit={renamePalette}
        />
        <RenameDialog
          ref={ColorDlgRef}
          Label='Rename Color'
          IRef={colorNameRef}
          IName='colorName'
          IValue={Current[1]}
          IHolder='Color Name'
          IValidate={validateColorName}
          OnSubmit={renameColor}
        />
        <YesNoDialog
          ref={LeaveDlgRef}
          Label='Are you sure ?'
          Content='All the data will be erased...'
          YesName='Leave'
          YesVariant='danger'
          Yes={() => navigate('/')}
        />
        <PickerDialog
          ref={PickerDlgRef}
          Label='Pick a color'
          color={Current[1]}
          changeColor={changeColor}
        />
        <SortContainer onSortEnd={sortColors} axis='xy' distance={10} />
      </div>)
  }

  const SortElement: any = SortableElement(({ c }: any) => makeBox(c.id, c.name, c.color))

  const SortContainer: any = SortableContainer((props: any) => {
    return (<div className="newPalette-colors">
      {Colors.map((c, i) => <SortElement index={i} key={`${c.color}${i}`} c={c} />)}
    </div>)
  })

  const makeBox = (id: string, name: string, color: string) => {
    const luminance = chroma(color).luminance()
    const [fg, bg] = luminance > 0.5 ? ['black', '#ffffff55'] : ['white', '#00000055']
    return (
      <div className="NewBox" style={{ background: color }}>
        <span
          className='delete-icon'
          style={{ color: fg }}
          onClick={() => deleteColor(id)}
        >
          <SlIcon name='trash-fill' />
        </span>
        <span
          className='picker-icon'
          onClick={() => { setCurrent([id, color]); PickerDlgRef.current.show() }}
          style={{ color: fg }}>
          <SlIcon name='eyedropper' />
        </span>
        <div className='details'
          style={{ color: fg, background: bg }}
          onClick={() => { setCurrent([id, name]); ColorDlgRef.current.show() }}>
          <span className='color-name'>{name}</span>
          <SlIcon className='edit-icon' name='pencil-fill' />
        </div>
      </div>
    )
  }

  const addColor = (): void => setColors((c: any) => [{ id: nanoid(), ...newColor }, ...c])

  const addRandomColors = (): void => setColors((c: any) => [...template, ...c])

  const clearColors = (): void => setColors([])

  const validatePaletteName = (e: any): void => {
    const duplicate = paletteNames.includes(e.target.value)
    const msg = duplicate ? 'This name already taken, choose another' : ''
    paletteNameRef.current.setCustomValidity(msg)
  }

  const renamePalette = (e: any): void => {
    e.preventDefault()
    const data = new FormData(e.target)
    const name = [...data.entries()][0][1].toString()
    setPaletteName(name)
    setId(name.toLowerCase().split(' ').join('_'))
    PaletteDlgRef.current.hide()
  }

  const validateColorName = (e: any): void => {
    const colorNames = Colors.map((c) => c.name)
    const duplicate = colorNames.includes(e.target.value)
    const msg = duplicate ? 'This name already taken, choose another' : ''
    colorNameRef.current.setCustomValidity(msg)
  }

  const renameColor = (e: any): void => {
    e.preventDefault()
    const data = new FormData(e.target)
    const name = [...data.entries()][0][1].toString()
    const id = Current[0]
    setColors(Colors.map(c => {
      if (c.id !== id) return c
      return { ...c, name: name }
    }))
    setCurrent([])
    ColorDlgRef.current.hide()
  }

  const changeColor = (e: any): void => {
    // console.log(e)
    setColors(Colors.map(c => {
      if (c.id !== Current[0]) return c
      return { ...c, color: e.target.color }
    }))
    PickerDlgRef.current.hide()
  }

  const deleteColor = (id: string): void => setColors(Colors.filter(c => c.id !== id))

  const sortColors = ({ oldIndex, newIndex }: any) => {
    setColors(arrayMove(Colors, oldIndex, newIndex))
  };

  const savePalette = (): void => {
    if (paletteName === null) {
      PaletteDlgRef.current.show()
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

  const leavePage = (): void => {
    if (Colors.length === 0 && paletteName === null) navigate('/')
    LeaveDlgRef.current.show()
  }

  return render()
}

export default NewPalette