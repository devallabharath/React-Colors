import { Component } from 'react'
import Navbar from '../navbar/navbar'
import ColorBox from '../colorbox/colorbox'

class Palette extends Component {
  constructor (props) {
    super(props)
    this.state = {
      range: 500
    }
  }

  render () {
    const { paletteName, colors } = this.props.palette
    const { range } = this.state
    return (
      <div className="Palette">
        <Navbar Name={paletteName} Range={range} handleRange={this.handleRange} />
        <div className="palette-colors">
          {colors[range].map(c => <ColorBox key={c.hex} {...c} />)}
        </div>
        {/* footer */}
      </div>
    )
  }

  handleRange = (e) => { this.setState({ range: e }) }
}

export default Palette
