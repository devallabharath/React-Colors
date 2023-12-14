import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { SlDropdown, SlMenu, SlMenuItem, SlIcon } from '@shoelace-style/shoelace/dist/react'
import '../styles/miniPalette.css'

const MiniPalette = (props) => {
  const ref = useRef()

  const render = () => {
    const { paletteName, colors, id } = props.palette
    const { Type, Favs } = props
    return (
      <div className="MiniPalette">
        <Link className='goto' to={`/palettes/${id}`}></Link>
        {leftIcon(id)}
        {rightIcon(id)}
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
          {Type === 'home' && loveIcon(id, Favs)}
        </div>
      </div >
    )
  }

  const loveIcon = (id, Favs) => {
    const iconClass = Favs.includes(id) ? 'liked heart' : 'heart'
    return (
      <div className="Love" onClick={() => loveClick(id)}>
        <div ref={ref} className={iconClass}></div>
      </div>
    )
  }

  const loveClick = (id) => {
    props.Love(id)
    ref.current.classList.toggle('liked')
  }

  const leftIcon = (id) => {
    const { Type, leftIconClick } = props
    if (Type !== 'trash') return
    return (
      <div className="options leftIcon">
        <SlIcon
          name='arrow-90deg-left'
          onClick={() => leftIconClick(id)}
          style={{ fontSize: 'var(--sl-font-size-medium)' }}
        />
      </div>
    )
  }

  const rightIcon = (id) => {
    const { Type, rightIconClick } = props
    if (Type === 'home') return paletteMenu(id)
    let icon
    if (Type === 'trash') icon = 'trash'
    if (Type === 'hidden') icon = 'eye-fill'
    if (Type === 'favourite') icon = 'heart'
    return (
      <div className="options rightIcon">
        <SlIcon
          name={icon}
          onClick={() => rightIconClick(id)}
        />
      </div>
    )
  }

  const paletteMenu = (id) => {
    const { Type, Hide, Delete } = props
    if (Type !== 'home') return
    return <SlDropdown size='small'>
      <div className="options rightIcon" slot='trigger'>
        <SlIcon className='icon' name='three-dots' />
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

  return render()
}

export default MiniPalette
