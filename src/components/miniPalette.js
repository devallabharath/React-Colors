import { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import '../styles/miniPalette.css'

class MiniPalette extends PureComponent {

  render () {
    const { paletteName, colors, id } = this.props.palette
    return (
      <div className="MiniPalette">
        <Link to={`/palettes/${id}`}></Link>
        <div className="minipalette-colors">
          {colors.map(c =>
            <span
              key={c.color}
              style={{ backgroundColor: c.color }}
              className='minipalette-color'
            />)}
        </div>
        <div className="minipalette-footer">
          <span className='minipalette-name'>{paletteName}</span>
        </div>
      </div >
    )
  }
}

export default MiniPalette
