import { Component } from 'react'
import Navbar from '../navbar/navbar'
import ColorBox from '../colorbox/colorbox'

class Palette extends Component {
  constructor (props) {
    super(props)
    this.state = {
      range: 500,
      format: 'hex'
    }
  }

  render () {
    const { paletteName, colors } = this.props.palette
    const { range, format } = this.state
    return (
      <div className="Palette">
        <Navbar
          Name={paletteName}
          Range={range}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
        />
        <div className="palette-colors">
          {colors[range].map(c => <ColorBox key={c.hex} {...c} format={format} />)}
        </div>
        {/* footer */}
      </div>
    )
  }

  changeLevel = (value) => { this.setState({ range: value }) }

  changeFormat = (e) => { this.setState({ format: e.target.value }) }
}

export default Palette
