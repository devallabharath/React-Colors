import { Component } from 'react'
import ColorBox from '../colorbox/colorbox'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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
        <nav>
          {paletteName}
          <Slider
            min={100}
            max={900}
            step={100}
            marks={{
              100: '100', 200: '200', 300: '300', 400: '400', 500: '500',
              600: '600', 700: '700', 800: '800', 900: '900',
            }}
            defaultValue={range}
            onChange={this.hadleRange}
          />
        </nav>
        <div className="palette-colors">
          {colors[range].map(c => <ColorBox key={c.hex} {...c} />)}
        </div>
        {/* footer */}
      </div>
    )
  }

  hadleRange = (e) => {
    this.setState({ range: e })
  }
}

export default Palette
