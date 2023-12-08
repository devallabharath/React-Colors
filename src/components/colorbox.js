import { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import { SlCopyButton, SlTooltip, SlIcon } from '@shoelace-style/shoelace/dist/react';
import chroma from 'chroma-js';
import '../styles/colorbox.css'

class ColorBox extends PureComponent {
  constructor (props) {
    super(props)
    this.dynamicColor = chroma(this.props.hex).luminance() > 0.4
      ? ['black', '#ffffff55']
      : ['white', '#00000055']
    this.fg = this.dynamicColor[0]
    this.bg = this.dynamicColor[1]
  }

  render () {
    const { type, Id, format, name, hex } = this.props
    return (
      <div style={{ background: hex }} className="ColorBox">
        <SlCopyButton style={{ color: this.fg }} className="copy-button" value={format} />
        {type === 'color'
          ? <Link to={`/palettes/${Id}/${name.slice(0, -4)}/${hex.replace('#', '')}`}>
            <SlTooltip content="See More">
              {this.details(name, true)}
            </SlTooltip>
          </Link>
          : this.details(name, false)
        }
      </div>
    )
  }

  details = (name, icon) => {
    return (
      <div className='details' style={{ color: this.fg, background: this.bg }}>
        <span className='color-name'>{name}</span>
        {icon && <SlIcon className='caret' name="caret-right-fill" />}
      </div>
    )
  }
}

export default ColorBox
