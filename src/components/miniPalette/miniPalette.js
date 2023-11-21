import { PureComponent } from 'react'
import { Link } from 'react-router-dom'
// import {useHistory} from 'react-router-dom'
import './miniPalette.css'

class MiniPalette extends PureComponent {

  render () {
    const { paletteName, colors, id } = this.props.palette
    return (
      <div className="MiniPalette" onClick={this.openPalette}>
        <Link to={`/palettes/${id}`}></Link>
        <div className="minipalette-colors">
          {colors.map(c =>
            <span
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

  openPalette = () => {
    // const history = useHistory()
    // history.push(`/palettes/${this.props.palette.id}`, {from:'/'})
  }
}

export default MiniPalette
