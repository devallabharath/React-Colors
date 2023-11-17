import { PureComponent } from 'react'
import {SlCopyButton, SlTooltip, SlIcon} from '@shoelace-style/shoelace/dist/react';

class ColorBox extends PureComponent {
  render () {
    const { name, format, hex } = this.props
    const color = this.props[format]
    return (
      <div style={{ background: hex }} className="ColorBox">
        <SlCopyButton className="copy-button" value={color} />
        <SlTooltip content="See More">
          <div className='see-more'>
            <span className='color-name'>{name}</span>
            <SlIcon className='btn' name="caret-right-fill"/>
          </div>
        </SlTooltip>
      </div>
    )
  }
}

export default ColorBox
