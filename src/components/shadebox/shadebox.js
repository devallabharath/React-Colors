import { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import { SlCopyButton } from '@shoelace-style/shoelace/dist/react';

class ShadeBox extends PureComponent {
  render () {
    const { name, id, format, hex } = this.props
    const color = this.props[format]
    return (
      <div style={{ background: hex }} className="ColorBox">
        <SlCopyButton className="copy-button" value={color} />
        <Link to={`/shades/${this.props.Id}/${id}/${hex.replace('#', '')}`}>
          <div className='see-more'>
            <span className='color-name'>{name} {color}</span>
          </div>
        </Link>
      </div>
    )
  }
}

export default ShadeBox
