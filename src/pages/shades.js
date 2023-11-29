import { Component } from 'react'
import Navbar from '../components/navbar'
import ColorBox from '../components/colorbox'
import { useNavigate, useParams } from 'react-router-dom'
import { generateShades } from '../scripts/colorHerlpers'
import '../styles/shades.css'

class ShadesPage extends Component {
  constructor (props) {
    super(props)
    this.state = { format: 'hex' }
  }

  render () {
    let {id, name, color} = this.props.params
    const { paletteName, colors } = generateShades(name, `#${color}`)
    const { format } = this.state
    return (
      <div className="Shades" >
        <Navbar
          Type='shades'
          Name={paletteName.toUpperCase()}
          Format={format}
          changeFormat={this.changeFormat}
          back={`/palettes/${id}`}
          navigate={this.props.navigate}
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

const Shades = (p) => <ShadesPage {...p} params={useParams()} navigate={useNavigate()}/>


export default Shades
