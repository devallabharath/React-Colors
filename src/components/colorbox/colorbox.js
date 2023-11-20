import { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import { SlCopyButton, SlTooltip, SlIcon } from '@shoelace-style/shoelace/dist/react';

class ColorBox extends PureComponent {
  render () {
    const { name, id, format, hex } = this.props
    const color = this.props[format]
    return (
      <div style={{ background: hex }} className="ColorBox">
        <SlCopyButton className="copy-button" value={color} />
        <Link to={`/shades/${this.props.Id}/${id}/${hex.replace('#', '')}`}>
          <SlTooltip content="See More">
            <div className='see-more'>
              <span className='color-name'>{name}</span>
              <SlIcon className='btn' name="caret-right-fill" />
            </div>
          </SlTooltip>
        </Link>
      </div>
    )
  }
}

export default ColorBox
