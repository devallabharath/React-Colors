import { PureComponent } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

class ColorBox extends PureComponent {

  render () {
    const { name, color } = this.props
    return (
      <div style={{ background: color }} className="ColorBox">
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <CopyToClipboard text={color}>
            <button className="copy-button">Copy</button>
          </CopyToClipboard>
        </div>
        <span className='see-more'>More</span>
      </div>
    )
  }
}

export default ColorBox
