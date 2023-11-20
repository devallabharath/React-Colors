import { Component } from 'react'
import Navbar from '../navbar/navbar'
import ShadeBox from '../shadebox/shadebox'

class Shades extends Component {
  constructor (props) {
    super(props)
    this.state = { format: 'hex' }
  }

  render () {
    const { paletteName, colors } = this.props.palette
    const { format } = this.state
    return (
      <div className="Palette">
        <Navbar
          Name={paletteName}
          Format={format}
          changeFormat={this.changeFormat}
          back={`/palettes/${this.props.Id}`}
        />
        <div className="palette-colors">
          {colors.map(c => <ShadeBox key={c.hex} {...c} format={format} />)}
        </div>
        {/* footer */}
      </div>
    )
  }
}

export default Shades
