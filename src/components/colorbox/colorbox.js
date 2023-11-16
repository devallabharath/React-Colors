import { PureComponent } from 'react'

class ColorBox extends PureComponent {

  render () {
    const { name, color } = this.props
    return (
      <div style={{background:color}} className="ColorBox">
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className='see-more'>More</span>
      </div>
    )
  }
}

export default ColorBox
