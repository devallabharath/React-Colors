import { PureComponent, createRef } from 'react'
import { Link } from 'react-router-dom'
import { SlDropdown, SlMenu, SlMenuItem, SlIcon } from '@shoelace-style/shoelace/dist/react'
import '../styles/miniPalette.css'

class MiniPalette extends PureComponent {
  constructor (props) {
    super(props)
    this.current = createRef()
  }

  render () {
    const { paletteName, colors, id } = this.props.palette
    const { Type, Favs } = this.props
    return (
      <div className="MiniPalette">
        <Link className='goto' to={`/palettes/${id}`}></Link>
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
          {Type === 'home' && this.loveIcon(id, Favs)}
        </div>
      </div >
    )
  }

  loveIcon = (id, Favs) => {
    const iconId = `love${id}`
    const iconClass = Favs.includes(id) ? 'liked heart-like-button' : 'heart-like-button'
    return (
      <div className="Love" onClick={() => this.loveClick(iconId, id)}>
        <div id={iconId} className={iconClass}></div>
      </div>
    )
  }

  loveClick = (iconId, id) => {
    const button = document.querySelector(`#${iconId}`);
    this.props.Love(id)
    if (button.classList.contains("liked")) {
      button.classList.remove("liked");
    } else {
      button.classList.add("liked");
    }
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
    let icon
    if (Type === 'trash') icon = 'trash'
    if (Type === 'hidden') icon = 'eye-fill'
    if (Type === 'favourite') icon = 'heart'
    return (
      <SlIcon
        className='Icon rightIcon'
        name={icon}
        onClick={() => rightIconClick(id)}
      />
    )
  }

  paletteMenu = (id) => {
    const { Type, Hide, Delete } = this.props
    if (Type !== 'home') return
    return <SlDropdown size='small'>
      <div className="options" slot='trigger'>
        <SlIcon className='icon'  name='three-dots' />
      </div>
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
