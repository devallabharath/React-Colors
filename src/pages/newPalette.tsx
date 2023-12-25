import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { NewBar as Navbar } from '../components/navbar'
import { SlIcon } from '@shoelace-style/shoelace/dist/react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import { RenameDialog, YesNoDialog, PickerDialog } from '../components/dialog'
import chroma from 'chroma-js'
import { nanoid } from 'nanoid'
import { arrayMove, template } from '../utils/colors'
import { component, dialogRef, inputRef, rawColorWithId } from '../utils/types'
import '../styles/newPalette.css'

const NewPalette: component<any> = ({ Storage }) => {
  const [paletteName, setPaletteName] = useState<string | null>(null)
  const [Id, setId] = useState<string | undefined>(undefined)
  const [Colors, setColors] = useState<rawColorWithId[]>([])
  const [Current, setCurrent] = useState<string[]>([])
  const PaletteDlgRef: dialogRef = useRef()
  const ColorDlgRef: dialogRef = useRef()
  const LeaveDlgRef: dialogRef = useRef()
  const PickerDlgRef: dialogRef = useRef()
  const paletteNameRef: inputRef = useRef()
  const colorNameRef: inputRef = useRef()
  const navigate = useNavigate()
  const paletteNames: string[] = Storage.getPaletteNames()

  const render = () => {
    return (
      <div className='NewPalette'>
        <Navbar
          Name={paletteName}
          goHome={leavePage}
          addBox={addColor}
          random={addRandomColors}
          clearAll={clearColors}
          onDiscard={leavePage}
          onSave={savePalette}
          changeName={() => PaletteDlgRef.current?.show()}
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
      </div>
    )
  }

  const SortElement: any = SortableElement(({ c }: any) => makeBox(c))

  const SortContainer: any = SortableContainer(() => {
    return (
      <div className='newPalette-colors'>
        {Colors.map((c, i) => (
          <SortElement index={i} key={`${c.color}${i}`} c={c} />
        ))}
      </div>
    )
  })

  const makeBox: component<rawColorWithId> = ({ id, name, color }) => {
    const luminance: number = chroma(color).luminance()
    const [fg, bg] = luminance > 0.5 ? ['black', '#ffffff55'] : ['white', '#00000055']
    return (
      <div className='NewBox' style={{ background: color }}>
        <span className='delete-icon' style={{ color: fg }} onClick={() => deleteColor(id)}>
          <SlIcon name='trash-fill' />
        </span>
        <span
          className='picker-icon'
          onClick={() => {
            setCurrent([id, color])
            PickerDlgRef.current?.show()
          }}
          style={{ color: fg }}
        >
          <SlIcon name='eyedropper' />
        </span>
        <div
          className='details'
          style={{ color: fg, background: bg }}
          onClick={() => {
            setCurrent([id, name])
            ColorDlgRef.current?.show()
          }}
        >
          <span className='color-name'>{name}</span>
          <SlIcon className='edit-icon' name='pencil-fill' />
        </div>
      </div>
    )
  }

  const addColor = (): void =>
    setColors([{ id: nanoid(), name: 'New Color', color: '#555555' }, ...Colors])

  const addRandomColors = (): void => setColors([...template, ...Colors])

  const clearColors = (): void => setColors([])

  const validatePaletteName = (name: string): void => {
    const duplicate = paletteNames.includes(name)
    const msg = duplicate ? 'This name already taken, choose another' : ''
    paletteNameRef.current?.setCustomValidity(msg)
  }

  const renamePalette = (e: any): void => {
    e.preventDefault()
    const data = new FormData(e.target)
    const name = [...data.entries()][0][1].toString()
    setPaletteName(name)
    setId(name.toLowerCase().split(' ').join('_'))
    PaletteDlgRef.current?.hide()
  }

  const validateColorName = (name: string): void => {
    const colorNames: string[] = Colors.map(c => c.name)
    const duplicate: boolean = colorNames.includes(name)
    const msg: string = duplicate ? 'This name already taken, choose another' : ''
    colorNameRef.current?.setCustomValidity(msg)
  }

  const renameColor = (e: any): void => {
    e.preventDefault()
    const data = new FormData(e.target)
    const name = [...data.entries()][0][1].toString()
    const id = Current[0]
    setColors(
      Colors.map(c => {
        if (c.id !== id) return c
        return { ...c, name: name }
      })
    )
    setCurrent([])
    ColorDlgRef.current?.hide()
  }

  const changeColor = (e: any): void => {
    setColors(
      Colors.map(c => {
        if (c.id !== Current[0]) return c
        return { ...c, color: e.target.value }
      })
    )
    PickerDlgRef.current?.hide()
  }

  const deleteColor = (id: string): void => setColors(Colors.filter(c => c.id !== id))

  const sortColors = ({ oldIndex, newIndex }: any) => {
    setColors(arrayMove(Colors, oldIndex, newIndex))
  }

  const savePalette = (): void => {
    if (paletteName === null) {
      PaletteDlgRef.current?.show()
    } else {
      const palette = {
        paletteName: paletteName,
        id: Id,
        colors: Colors.map(c => ({ name: c.name, color: c.color })),
      }
      Storage.savePalette(palette)
      navigate('/')
    }
  }

  const leavePage = (): void => {
    if (Colors.length === 0 && paletteName === null) navigate('/')
    LeaveDlgRef.current?.show()
  }

  return render()
}

export default NewPalette
