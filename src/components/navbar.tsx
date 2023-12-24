import { lazy, useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  SlIcon,
  SlSelect,
  SlOption,
  SlTooltip,
} from '@shoelace-style/shoelace/dist/react'
import { dialogRef, newBar, colorBar, fthBar } from '../utils/types'
import '../styles/navbar.css'
const Drawer = lazy(() => import('./drawer'))
const Slider = lazy(() => import('rc-slider'))

const HomeBar: React.FC = () => {
  const DrawerRef: dialogRef = useRef()
  const [Always, setAlways] = useState(window.innerWidth > 1280)
  const largeScr: boolean = window.innerWidth > 1280
  const navigate = useNavigate()

  useEffect(() => {
    function change() {
      const bool = window.innerWidth > 1280
      setAlways(bool)
    }
    window.addEventListener('resize', change)
    return () => window.removeEventListener('resize', change)
  }, [])

  return (
    <>
      <Drawer ref={DrawerRef} Contained={Always} />
      <nav>
        <div className='top'>
          <div className='nav-part'>
            {!largeScr && (
              <SlIcon
                className='ham-menu'
                name='list'
                onClick={() => DrawerRef.current?.show()}
              />
            )}
          </div>
          <h2>Palettes</h2>
          <button className='new-button' onClick={() => navigate('/?mode=new')}>
            + Add New
          </button>
        </div>
      </nav>
    </>
  )
}

const NewBar: newBar = ({
  Name,
  goHome,
  changeName,
  onDiscard,
  onSave,
  addBox,
  random,
  clearAll,
}) => {
  return (
    <nav>
      <div className='top'>
        <div className='nav-part'>
          <button className='home-button' onClick={goHome}>
            <SlIcon name='house-fill' />
          </button>
        </div>
        <div className='nav-part'>
          <span className='Name' onClick={changeName}>
            {Name ?? 'New Palette'}
            <SlIcon name='pencil-fill' />
          </span>
        </div>
        <div className='nav-part'>
          <SlTooltip content='Discard' placement='bottom'>
            <button className='del-button' onClick={onDiscard}>
              <SlIcon name='x' />
            </button>
          </SlTooltip>
          <SlTooltip content='Save' placement='bottom'>
            <button className='save-button' onClick={onSave}>
              <SlIcon name='check-lg' />
            </button>
          </SlTooltip>
        </div>
      </div>
      <div className='bottom'>
        <button onClick={addBox}>Add New</button>
        <button onClick={random}>Random All</button>
        <button onClick={clearAll}>Clear All</button>
      </div>
    </nav>
  )
}

const FTHBar: fthBar = ({ Type, onBtnClick }) => {
  const navigate = useNavigate()
  return (
    <nav>
      <div className='top'>
        <div className='nav-part'>
          <SlIcon
            className='home-button'
            name='house-fill'
            onClick={() => navigate('/')}
          />
        </div>
        <h2>{Type}</h2>
        <button className='new-button' onClick={onBtnClick}>
          Clear
        </button>
      </div>
    </nav>
  )
}

const ColorBar: colorBar = props => {
  const { Name, Format, changeFormat, Level, changeLevel, back } = props
  const navigate = useNavigate()
  return (
    <nav>
      <div className='top'>
        <div className='nav-part'>
          <button
            className='back-button'
            onClick={() => back && navigate(back)}
          >
            <SlIcon name='arrow-left-circle-fill' />
          </button>
          <button className='home-button' onClick={() => navigate('/')}>
            <SlIcon name='house-fill' />
          </button>
        </div>
        <h2>{Name}</h2>
        <SlSelect
          className='color-format'
          value={Format}
          size='small'
          filled
          onSlChange={changeFormat}
        >
          <SlOption value='hex'> Hex </SlOption>
          <SlOption value='rgb'> RGB </SlOption>
          <SlOption value='rgba'> RGBA </SlOption>
        </SlSelect>
      </div>
      {props.isSlider && Level && slider(parseInt(Level), changeLevel)}
    </nav>
  )
}

const slider = (Level: number | undefined, changeLevel: any): JSX.Element => {
  return (
    <div className='bottom'>
      <Slider
        className='Slider'
        min={100}
        max={900}
        step={100}
        marks={{
          100: '100',
          200: '200',
          300: '300',
          400: '400',
          500: '500',
          600: '600',
          700: '700',
          800: '800',
          900: '900',
        }}
        included={false}
        defaultValue={Level}
        onChange={changeLevel}
      />
    </div>
  )
}

export { HomeBar, NewBar, FTHBar, ColorBar }
