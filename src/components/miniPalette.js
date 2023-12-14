import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { SlDropdown, SlMenu, SlMenuItem, SlIcon } from '@shoelace-style/shoelace/dist/react'
import '../styles/miniPalette.css'
import { PaletteContext } from '../scripts/storage'

const MiniPalette = (props) => {
  const ref = useRef()
  const Storage = useContext(PaletteContext)

  const render = () => {
    const { Type } = props
    const { paletteName, colors, id } = props.palette
    return (
      <div className="MiniPalette">
        <Link className='goto' to={`/palettes/${id}`}></Link>
        {Type === 'trash' && leftIcon(id)}
        {Type !== 'favourite' && rightIcon(id)}
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
          {(Type === 'home' || Type === 'favourite') && loveIcon(id)}
        </div>
      </div >
    )
  }

  const loveIcon = (id) => {
    const Favs = Storage.getFavouriteIds()
    return (
      <div className="Love" onClick={() => loveClick(id)}>
        <div ref={ref} className={Favs.includes(id) ? 'liked heart' : 'heart'}></div>
      </div>
    )
  }

  const loveClick = (id) => {
    Storage.toggleFavourite(id)
    ref.current.classList.toggle('liked')
  }

  const leftIcon = (id) => {
    const { leftIconClick } = props
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
    let icon = 'trash'
    if (Type === 'hidden') icon = 'eye-fill'
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
    const { Hide, Delete } = props
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
