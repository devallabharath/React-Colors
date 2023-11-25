import { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { SlDropdown, SlMenu, SlMenuItem, SlIcon } from '@shoelace-style/shoelace/dist/react'
import '../styles/miniPalette.css'

const defaultIds = ["material-ui-colors", "flat-ui-colors-v1", "flat-ui-colors-dutch", "flat-ui-colors-american", "flat-ui-colors-aussie", "flat-ui-colors-british", "flat-ui-colors-spanish", "flat-ui-colors-indian", "flat-ui-colors-french",]

class MiniPalette extends PureComponent {

  render () {
    const { paletteName, colors, id } = this.props.palette
    return (
      <div className="MiniPalette">
        <Link className='goto' to={`/palettes/${id}`}></Link>
        {this.paletteMenu(id)}
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

  paletteMenu = (id) => {
    if (defaultIds.includes(id)) {
      return <SlDropdown size='small'>
        <SlIcon className='options' slot='trigger' name='three-dots-vertical' />
        <SlMenu>
          <SlMenuItem className='menu-item'>Show/Hide
            <SlIcon style={{ fontSize: '10px' }} slot='prefix' name='eye-fill' />
          </SlMenuItem>
          <SlMenuItem className='menu-item'>Use Template
            <SlIcon style={{ fontSize: '10px' }} slot='prefix' name='trash-fill' />
          </SlMenuItem>
        </SlMenu>
      </SlDropdown>
    } else {
      return <SlDropdown size='small'>
        <SlIcon className='options' slot='trigger' name='three-dots-vertical' />
        <SlMenu>
          <Link to={`/palettes/${id}`}>
            <SlMenuItem className='menu-item'>Edit
              <SlIcon style={{ fontSize: '10px' }} slot='prefix' name='pencil-fill' />
            </SlMenuItem>
          </Link>
          <SlMenuItem className='menu-item'>Delete
            <SlIcon style={{ fontSize: '10px' }} slot='prefix' name='trash-fill' />
          </SlMenuItem>
          <SlMenuItem className='menu-item'>Use Template
            <SlIcon style={{ fontSize: '10px' }} slot='prefix' name='trash-fill' />
          </SlMenuItem>
        </SlMenu>
      </SlDropdown>
    }
  }
}

export default MiniPalette
