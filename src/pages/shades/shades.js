import { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import ColorBox from '../../components/colorbox/colorbox'

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
          Name={paletteName.toUpperCase() }
          Format={format}
          changeFormat={this.changeFormat}
          goBack={this.props.history.goBack}
          slider={false}
        />
        <div className="palette-colors">
          {colors.map(c => <ColorBox key={c.hex} type='shade' {...c} format={format} />)}
        </div>
        {/* footer */}
      </div>
    )
  }

  changeFormat = (e) => { this.setState({ format: e.target.value }) }
}

export default Shades
