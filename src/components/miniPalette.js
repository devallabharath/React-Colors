import { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { SlDropdown, SlMenu, SlMenuItem, SlIcon } from '@shoelace-style/shoelace/dist/react'
import '../styles/miniPalette.css'

class MiniPalette extends PureComponent {

  render () {
    const { paletteName, colors, id } = this.props.palette
    const {Type} = this.props
    return (
      <div className="MiniPalette">
        {Type === 'home' && <>
          <Link className='goto' to={`/palettes/${id}`}></Link>
          {this.paletteMenu(id)}
        </>}
        {Type === 'trash' && this.rightIcon('trash') && this.leftIcon()}
        {Type === 'hidden' && this.rightIcon('')}
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

  leftIcon = () => {
    const {leftIconClick} = this.props
    return (
      <div className="leftIcon" onClick={()=>leftIconClick(this.props.palette.id)}>
        <SlIcon name='arrow-left' />
      </div>
    )
  }

  rightIcon = (type) => {
    const icon = type === 'trash' ? 'trash-fill' : 'eye-fill'
    const {rightIconClick} = this.props
    return (
      <div className="Icon" onClick={()=>rightIconClick(this.props.palette.id)}>
        <SlIcon name={icon} />
      </div>
    )
  }

  paletteMenu = (id) => {
    const { Delete, Hide } = this.props
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
