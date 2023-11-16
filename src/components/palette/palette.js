import { Component } from 'react'
import ColorBox from '../colorbox/colorbox'

class Palette extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const { colors } = this.props
    return (
      <div className="Palette">
        {/* navbar */}
        <div className="palette-colors">
          {colors.map(c => <ColorBox key={c.color} {...c} />)}
        </div>
        {/* footer */}
      </div>
    )
  }
}

export default Palette
