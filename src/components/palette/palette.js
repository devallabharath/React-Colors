import { Component } from 'react'
import Navbar from '../paletteBar/paletteBar'
import ColorBox from '../colorbox/colorbox'

class Palette extends Component {
  constructor (props) {
    super(props)
    this.state = {
      level: 500,
      format: 'hex'
    }
  }

  render () {
    const { paletteName, colors, id } = this.props.palette
    const { level, format } = this.state
    return (
      <div className="Palette">
        <Navbar
          Name={paletteName}
          Level={level}
          Format={format}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
        />
        <div className="palette-colors">
          {colors[level].map(c => <ColorBox key={c.hex} Id={id} {...c} format={format} />)}
        </div>
        {/* footer */}
      </div>
    )
  }

  changeLevel = (value) => { this.setState({ level: value }) }

  changeFormat = (e) => { this.setState({ format: e.target.value }) }
}

export default Palette
