import { Component } from 'react'
import Navbar from '../components/navbar'
import ColorBox from '../components/colorbox'
import '../styles/shades.css'

class Shades extends Component {
  constructor (props) {
    super(props)
    this.state = { format: 'hex' }
  }

  render () {
    const { paletteName, colors } = this.props.palette
    const { format } = this.state
    return (
      <div className="Shades" >
        <Navbar
          Name={paletteName.toUpperCase()}
          Format={format}
          changeFormat={this.changeFormat}
          history={this.props.history}
          slider={false}
        />
        <div className="shades-colors">
          {colors.map(c => <ColorBox key={c.hex} type='shade' {...c} format={format} />)}
        </div>
        {/* footer */}
      </div>
    )
  }

  changeFormat = (e) => { this.setState({ format: e.target.value }) }
}

export default Shades
