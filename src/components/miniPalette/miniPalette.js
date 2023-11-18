import { PureComponent } from 'react'
import './miniPalette.css'

class MiniPalette extends PureComponent {

  render () {
    const {paletteName, colors} = this.props.palette
    return (
      <div className="MiniPalette" onClick={this.openPalette}>
        <div className="palette-colors">
          {colors.map(c=>
            <span
              style={{backgroundColor:c.color}}
              className='palette-color'
            />)}
        </div>
        <div className="palette-footer">
          <span className='palette-name'>{paletteName}</span>
        </div>
      </div>
    )
  }

  openPalette = () => {
    // history.push(`/palettes/${id}`)
  }
}

export default MiniPalette
