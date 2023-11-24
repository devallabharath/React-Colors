import { Component } from 'react'
import Navbar from '../components/navbar'
import { SlColorPicker, SlIcon } from '@shoelace-style/shoelace/dist/react'
import Dialog from '../components/dialog'
import chroma from 'chroma-js'
import { nanoid } from 'nanoid';
import { template } from '../scripts/colors'
import '../styles/newPalette.css'

class NewPalette extends Component {
  constructor (props) {
    super(props)
    this.state = {
      openRenamePalette: false,
      openRenameColor: false,
      current: [],
      openConfirm: false,
      paletteName: null,
      id: null,
      colors: []
    }
  }

  render () {
    const { paletteName, current, colors, openRenamePalette, openRenameColor, openConfirm } = this.state
    return (
      <div className="NewPalette">
        <Navbar
          Type='new'
          Name={paletteName}
          goBack={() => this.setState({ openConfirm: true })}
          goHome={() => this.setState({ openConfirm: true })}
          addBox={this.addBox}
          random={this.random}
          clearAll={this.clearAll}
          onDiscard={() => this.openConfirm()}
          onSave={this.handlesave}
          changeName={this.openRenamePalette}
        />
        <div className="newPalette-colors">
          <Dialog
            Type='renamePalette'
            paletteNames={this.props.paletteNames}
            Input={paletteName}
            Display={openRenamePalette}
            Close={() => this.setState({ openRenamePalette: false })}
            Rename={this.changePaletteName}
          />
          <Dialog
            Type='renameColor'
            Id={current[0]}
            Input={current[1]}
            Display={openRenameColor}
            Close={() => this.setState({ openRenameColor: false })}
            Rename={this.changeColorName}
          />
          <Dialog
            Type='confirm'
            Display={openConfirm}
            Yes={() => this.setState({ openConfirm: false })}
            No={() => this.props.history.push('/')}
            Close={() => this.setState({ openConfirm: false })}
          />
          {colors.map((c) => this.makeBox(c.id, c.name, c.color))}
        </div>
      </div>
    )
  }

  addBox = () => {
    this.setState({
      colors: [{ id: nanoid(), name: 'New Color', color: '#555555' }, ...this.state.colors]
    })
  }

  random = () => { this.setState({ colors: [...this.state.colors, ...template] }) }

  clearAll = () => { this.setState({ colors: [] }) }

  changePaletteName = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const name = [...data.entries()][0][1]
    this.setState({
      paletteName: name,
      id: name.toLowerCase().split(' ').join('_'),
      openRenamePalette: false
    })
  }

  changeColorName = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const name = [...data.entries()][0][1]
    const id = this.state.current[0]
    const { colors } = this.state
    this.setState({
      colors: colors.map(c => {
        if (c.id !== id) return c
        return { ...c, name: name }
      }),
      current: [],
      openRenameColor: false
    })
  }

  changeColor = (id, color) => {
    const { colors } = this.state
    this.setState({
      colors: colors.map(c => {
        if (c.id !== id) return c
        return { ...c, color: color }
      })
    })
  }

  openRenamePalette = () => this.setState({ openRenamePalette: true })

  openRenameColor = (id, name) => this.setState({ openRenameColor: true, current: [id, name] })

  openConfirm = () => this.setState({ openConfirm: true })

  handlesave = () => {
    const { paletteName, id, colors } = this.state
    if (paletteName === null) {
      this.openRenamePalette()
    } else {
      const palette = {
        paletteName: paletteName,
        id: id,
        colors: colors.map(c => ({ name: c.name, color: c.color }))
      }
      this.savePalette(palette)
    }
  }

  savePalette = (palette) => {console.log(palette);}

  makeBox = (id, name, color) => {
    const luminance = chroma(color).luminance()
    const [fg, bg] = luminance > 0.5 ? ['black', '#ffffff55'] : ['white', '#00000055']
    return (
      <div key={id} className="NewBox">
        <SlColorPicker
          className='picker'
          size='small'
          noFormatToggle
          value={color}
          onSlChange={(e) => this.changeColor(id, e.target.value)}
        />
        <div className='details'
          style={{ color: fg, background: bg }}
          onClick={() => this.openRenameColor(id, name)}>
          <span className='color-name'>{name}</span>
          <SlIcon name='pencil-fill' />
        </div>
      </div>
    )
  }
}

export default NewPalette
