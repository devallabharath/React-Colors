import { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import { SlCopyButton, SlTooltip, SlIcon } from '@shoelace-style/shoelace/dist/react';

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
    return (
      <div className='details'>
        <span className='color-name'>{name}</span>
        {icon && <SlIcon className='btn' name="caret-right-fill" />}
      </div>
    )
  }
}

export default ColorBox
