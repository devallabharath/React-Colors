import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { SlDropdown, SlMenu, SlMenuItem, SlIcon } from '@shoelace-style/shoelace/dist/react'
import '../styles/miniPalette.css'

const MiniPalette = (props) => {
  const paletteRef = useRef()
  const heartRef = useRef()
  const Storage = props.Storage
  let dimensions
  if (props.palette.colors.length < 10) {
    dimensions = {width: 'calc(100% / 3)', height: 'calc(100% / 3)'}
  } else if (props.palette.colors.length < 13) {
    dimensions = {width: 'calc(100% / 4)', height: 'calc(100% / 3)'}
  } else if (props.palette.colors.length < 17) {
    dimensions = {width: 'calc(100% / 4)', height: 'calc(100% / 4)'}
  } else if (props.palette.colors.length < 21) {
    dimensions = {width: 'calc(100% / 5)', height: 'calc(100% / 4)'}
  } else if (props.palette.colors.length < 26) {
    dimensions = {width: 'calc(100% / 5)', height: 'calc(100% / 5)'}
  } else dimensions = {width: 'calc(100% / 6)', height: 'calc(100% / 5)'}

  const render = () => {
    const { Type } = props
    const { paletteName, colors, id } = props.palette
    return (
      <div ref={paletteRef} className="MiniPalette">
        <Link className='goto' to={`/palettes/${id}`}></Link>
        {Type === 'trash' && leftIcon(id)}
        {Type !== 'favourites' && rightIcon(id)}
        <div className="minipalette-colors">
          {colors.map(c =>
            <span
              key={c.color}
              style={{ backgroundColor: c.color, ...dimensions }}
              className='minipalette-color'
            />)}
        </div>
        <div className="minipalette-footer">
          <div className='minipalette-name'>{paletteName}</div>
          {(Type === 'home' || Type === 'favourites') && loveIcon(id)}
        </div>
      </div >
    )
  }

  const loveIcon = (id) => {
    const Favs = Storage.getFavouriteIds()
    return (
      <div className="Love" onClick={() => loveClick(id)}>
        <div ref={heartRef} className={Favs.includes(id) ? 'liked heart' : 'heart'}></div>
      </div>
    )
  }

  const loveClick = (id) => {
    heartRef.current.classList.toggle('liked')
    Storage.toggleFavourite(id)
    if (props.Type === 'favourites') paletteRef.current.remove()
  }

  const leftIcon = (id) => {
    return (
      <div className="options leftIcon">
        <SlIcon
          name='arrow-90deg-left'
          onClick={() => restorePalette(id, paletteRef)}
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
          onClick={() => rightIconClick(id, paletteRef)}
        />
      </div>
    )
  }

  const paletteMenu = (id) => {
    const { Delete } = props
    return <SlDropdown size='small'>
      <div className="options rightIcon" slot='trigger'>
        <SlIcon className='icon' name='three-dots' />
      </div>
      <SlMenu>
        <SlMenuItem className='menu-item'>Edit
          <SlIcon style={{ fontSize: '10px' }} slot='prefix' name='pencil-fill' />
        </SlMenuItem>
        <SlMenuItem className='menu-item' onClick={() => hidePalette(id)}>Hide
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

  const hidePalette = (id) => {
    Storage.hidePalette(id)
    paletteRef.current.remove()
  }

  const restorePalette = (id, ref) => {
    Storage.restorePalette(id)
    ref.current.remove()
  }

  return render()
}

export default MiniPalette
