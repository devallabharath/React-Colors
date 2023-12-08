import { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { SlDropdown, SlMenu, SlMenuItem, SlIcon } from '@shoelace-style/shoelace/dist/react'
import '../styles/miniPalette.css'

class MiniPalette extends PureComponent {

  render () {
    const { paletteName, colors, id } = this.props.palette
    const { Type } = this.props
    return (
      <div className="MiniPalette">
        {Type === 'home' && <>
          <Link className='goto' to={`/palettes/${id}`}></Link>
        </>}
        {this.leftIcon(id)}
        {this.rightIcon(id)}
        <div className="minipalette-colors">
          {colors.map(c =>
            <span
              key={c.color}
              style={{ backgroundColor: c.color }}
              className='minipalette-color'
            />)}
        </div>
        <div className="minipalette-footer">
          <div className='minipalette-name'>{paletteName}</div>
        </div>
      </div >
    )
  }

  leftIcon = (id) => {
    const { Type, leftIconClick } = this.props
    if (Type !== 'trash') return
    return (
      <SlIcon
        className="Icon leftIcon"
        name='arrow-90deg-left'
        onClick={() => leftIconClick(id)}
        style={{ fontSize: 'var(--sl-font-size-medium)' }}
      />
    )
  }

  rightIcon = (id) => {
    const { Type, rightIconClick } = this.props
    if (Type === 'home') return this.paletteMenu(id)
    return (
      <SlIcon
        className='Icon rightIcon'
        name={Type === 'trash' ? 'trash' : 'eye-fill'}
        onClick={() => rightIconClick(id)}
      />
    )
  }

  paletteMenu = (id) => {
    const { Type, Delete, Hide } = this.props
    if (Type !== 'home') return
    return <SlDropdown size='small'>
      <SlIcon className='options' slot='trigger' name='three-dots' />
      <SlMenu>
        <SlMenuItem className='menu-item'>Edit
          <SlIcon style={{ fontSize: '10px' }} slot='prefix' name='pencil-fill' />
        </SlMenuItem>
        <SlMenuItem className='menu-item' onClick={() => Hide(id)}>Hide
          <SlIcon style={{ fontSize: '10px' }} slot='prefix' name='eye-slash-fill' />
        </SlMenuItem>
        <SlMenuItem className='menu-item' onClick={() => Delete(id)}>Delete
          <SlIcon style={{ fontSize: '10px' }} slot='prefix' name='trash-fill' />
        </SlMenuItem>
        <SlMenuItem className='menu-item'>Use Template
          <SlIcon style={{ fontSize: '10px' }} slot='prefix' name='box-fill' />
        </SlMenuItem>
      </SlMenu>
    </SlDropdown>
  }
}

export default MiniPalette
