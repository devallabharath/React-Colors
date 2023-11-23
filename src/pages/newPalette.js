import { Component } from 'react'
import Navbar from '../components/navbar'
import { SlColorPicker, SlIcon } from '@shoelace-style/shoelace/dist/react'
import chroma from 'chroma-js'
import '../styles/newPalette.css'

const template = [
  { name: 'Brilliant Rose', color: '#F653A6' },
  { name: 'Cornell Red', color: '#B31B1B' },
  { name: 'Cream', color: '#FFFDD0' },
  { name: 'Lavender Blush', color: '#FFF0F5' },
  { name: 'Aerospace Orange', color: '#FF4F00' },
  { name: 'Bole', color: '#79443B' },
  { name: 'Dark Purple', color: '#301934' },
  { name: 'Gold', color: '#FFD700' },
  { name: 'Night Black', color: '#111111' },
  { name: 'Aquamarine', color: '#00FFBF' },
  { name: 'Melon', color: '#FDBCB4' },
  { name: 'Turquoise', color: '#40E0D0' },
  { name: 'Celtic Blue', color: '#246BCE' },
  { name: 'Blue Violet', color: '#8A2BE2' },
  { name: 'Baby Powder', color: '#FEFEFA' },
  { name: 'Gunmetal', color: '#2A3439' }
]

class NewPalette extends Component {
  constructor (props) {
    super(props)
    this.state = {
      paletteName: null,
      id: null,
      colors: []
    }
  }

  render () {
    const { colors } = this.state
    return (
      <div className="NewPalette">
        <Navbar
          Type='new'
          history={this.props.history}
          changeName={this.changeName}
          addBox={this.addBox}
          random={this.random}
          clearAll={this.clearAll}
          save={this.save}
        />
        <div className="newPalette-colors">
          {colors.map((c) => this.makeBox(c.name, c.color))}
        </div>
      </div>
    )
  }

  addBox = () => {
    this.setState({
      colors: [{ name: 'New Color', color: '#555555' }, ...this.state.colors]
    })
  }

  random = () => { this.setState({ colors: [...template, ...this.state.colors] }) }

  clearAll = () => { this.setState({ colors: [] }) }

  changeName = (e) => { this.setState({ paletteName: e.target.value }) }

  save = () => { alert('saved') }

  makeBox = (name, color) => {
    const luminance = chroma(color).luminance()
    const [fg, bg] = luminance > 0.5 ? ['black', '#ffffff55'] : ['white', '#00000055']
    return (
      <div key={`${name}${color}`} className="NewBox">
        <SlColorPicker style={{ color: fg }} className='picker' size='small' value={color} />
        <div className='details' style={{ color: fg, background: bg }}>
          <input style={{ color: fg}} className='color-name' value={name} />
          <SlIcon className='btn' name='pencil-fill' />
        </div>
      </div>
    )
  }
}

export default NewPalette
