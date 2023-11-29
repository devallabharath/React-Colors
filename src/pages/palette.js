import { Component } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import ColorBox from '../components/colorbox'
import { generatePalette } from '../scripts/colorHerlpers';
import '../styles/palette.css'

class PalettePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      level: 500,
      format: 'hex'
    }
  }

  render () {
    const {params, Storage} = this.props
    const palette = Storage.getPaletteById(params.id)
    const { paletteName, colors, id } = generatePalette(palette)
    const { level, format } = this.state
    return (
      <div className="Palette">
        <Navbar
          Type='palette'
          Name={paletteName}
          Format={format}
          changeFormat={this.changeFormat}
          slider={true}
          Level={level}
          changeLevel={this.changeLevel}
          back={'/'}
          navigate={this.props.navigate}
        />
        <div className="palette-colors">
          {colors[level].map(c => <ColorBox key={c.hex} type='color' Id={id} {...c} format={format} />)}
        </div>
        {/* footer */}
      </div>
    )
  }

  changeLevel = (value) => { this.setState({ level: value }) }

  changeFormat = (e) => { this.setState({ format: e.target.value }) }
}

const Palette = (p) => <PalettePage {...p} navigate={useNavigate()} params={useParams()}/>

export default Palette
