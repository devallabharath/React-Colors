import { Component } from 'react'
import Navbar from '../components/navbar'
import ColorBox from '../components/colorbox'
import '../styles/palette.css'

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
          Format={format}
          changeFormat={this.changeFormat}
          slider={true}
          Level={level}
          changeLevel={this.changeLevel}
          history={this.props.history}
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

export default Palette