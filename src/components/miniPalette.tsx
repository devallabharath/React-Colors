import { lazy, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/miniPalette.css'
import { rawPalette } from '../utils/types'
const SlDropdown = lazy(() =>
  import('@shoelace-style/shoelace/dist/react/dropdown')
)
const SlMenu = lazy(() => import('@shoelace-style/shoelace/dist/react/menu'))
const SlMenuItem = lazy(() =>
  import('@shoelace-style/shoelace/dist/react/menu-item')
)
const SlIcon = lazy(() => import('@shoelace-style/shoelace/dist/react/icon'))

interface propType {
  Type: string
  Storage: any
  palette: rawPalette
  Delete?: (id: string, ref: any) => void
  leftIconClick?: (id: string, ref: any) => void
  rightIconClick?: (id: string, ref: any) => void
}

const MiniPalette = (props: propType): JSX.Element => {
  const paletteRef: any = useRef()
  const heartRef: any = useRef()
  const Storage = props.Storage
  let dimensions: { width: string; height: string }
  if (props.palette.colors.length < 10) {
    dimensions = { width: 'calc(100% / 3)', height: 'calc(100% / 3)' }
  } else if (props.palette.colors.length < 13) {
    dimensions = { width: 'calc(100% / 4)', height: 'calc(100% / 3)' }
  } else if (props.palette.colors.length < 17) {
    dimensions = { width: 'calc(100% / 4)', height: 'calc(100% / 4)' }
  } else if (props.palette.colors.length < 21) {
    dimensions = { width: 'calc(100% / 5)', height: 'calc(100% / 4)' }
  } else if (props.palette.colors.length < 26) {
    dimensions = { width: 'calc(100% / 5)', height: 'calc(100% / 5)' }
  } else dimensions = { width: 'calc(100% / 6)', height: 'calc(100% / 5)' }

  const render = () => {
    const { Type } = props
    const { paletteName, colors, id } = props.palette
    return (
      <div ref={paletteRef} className='MiniPalette'>
        <Link className='goto' to={`/?mode=palette&id=${id}`}></Link>
        {Type === 'trash' && leftIcon(id)}
        {Type !== 'favourites' && rightIcon(id)}
        <div className='minipalette-colors'>
          {colors.map(c => (
            <span
              key={c.color}
              style={{ backgroundColor: c.color, ...dimensions }}
              className='minipalette-color'
            />
          ))}
        </div>
        <div className='minipalette-footer'>
          <div className='minipalette-name'>{paletteName}</div>
          {(Type === 'home' || Type === 'favourites') && loveIcon(id)}
        </div>
      </div>
    )
  }

  const loveIcon = (id: string): JSX.Element => {
    const Favs = Storage.getFavouriteIds()
    return (
      <div className='Love' onClick={() => loveClick(id)}>
        <div
          ref={heartRef}
          className={Favs.includes(id) ? 'liked heart' : 'heart'}
        ></div>
      </div>
    )
  }

  const loveClick = (id: string) => {
    heartRef.current.classList.toggle('liked')
    Storage.toggleFavourite(id)
    if (props.Type === 'favourites') paletteRef.current.remove()
  }

  const leftIcon = (id: string): JSX.Element => {
    const { leftIconClick } = props
    return (
      <div className='options leftIcon'>
        <SlIcon
          name='arrow-90deg-left'
          onClick={() => leftIconClick && leftIconClick(id, paletteRef)}
          style={{ fontSize: 'var(--sl-font-size-medium)' }}
        />
      </div>
    )
  }

  const rightIcon = (id: string): JSX.Element => {
    const { Type, rightIconClick } = props
    if (Type === 'home') return paletteMenu(id)
    let icon = 'trash'
    if (Type === 'hidden') icon = 'eye-fill'
    return (
      <div className='options rightIcon'>
        <SlIcon
          name={icon}
          onClick={() => rightIconClick && rightIconClick(id, paletteRef)}
        />
      </div>
    )
  }

  const paletteMenu = (id: string): JSX.Element => {
    const { Delete } = props
    return (
      <SlDropdown>
        <div className='options rightIcon' slot='trigger'>
          <SlIcon className='icon' name='three-dots' />
        </div>
        <SlMenu>
          <SlMenuItem className='menu-item'>
            Edit
            <SlIcon
              style={{ fontSize: '10px' }}
              slot='prefix'
              name='pencil-fill'
            />
          </SlMenuItem>
          <SlMenuItem className='menu-item' onClick={() => hidePalette(id)}>
            Hide
            <SlIcon
              style={{ fontSize: '10px' }}
              slot='prefix'
              name='eye-slash-fill'
            />
          </SlMenuItem>
          <SlMenuItem
            className='menu-item'
            onClick={() => Delete && Delete(id, paletteRef)}
          >
            Delete
            <SlIcon
              style={{ fontSize: '10px' }}
              slot='prefix'
              name='trash-fill'
            />
          </SlMenuItem>
          <SlMenuItem className='menu-item'>
            Use Template
            <SlIcon
              style={{ fontSize: '10px' }}
              slot='prefix'
              name='box-fill'
            />
          </SlMenuItem>
        </SlMenu>
      </SlDropdown>
    )
  }

  const hidePalette = (id: string): void => {
    Storage.hidePalette(id)
    paletteRef.current.remove()
  }

  return render()
}

export default MiniPalette
