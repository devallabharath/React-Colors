import { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import { SlCopyButton, SlTooltip, SlIcon } from '@shoelace-style/shoelace/dist/react';
import chroma from 'chroma-js';
import '../styles/colorbox.css'

class ColorBox extends PureComponent {
  render () {
    const { type, name, Id, id, format, hex } = this.props
    const color = this.props[format]
    return (
      <div style={{ background: hex }} className="ColorBox">
        <SlCopyButton className="copy-button" value={color} />
        {type === 'color'
          ? <Link to={`/shades/${Id}/${id}/${hex.replace('#', '')}`}>
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
    const luminance = chroma(this.props.hex).luminance()
    const [fg, bg] = luminance > 0.4 ? ['black','#ffffff55'] : ['white','#00000055']
    return (
      <div className='details' style={{ color: fg, background: bg}}>
        <span className='color-name'>{name}</span>
        {icon && <SlIcon className='btn' name="caret-right-fill" />}
      </div>
    )
  }
}

export default ColorBox
