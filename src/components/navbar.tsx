import { useState, useEffect } from 'react'
import Slider from 'rc-slider';
import Drawer from './drawer';
import { SlIcon, SlSelect, SlOption, SlTooltip } from '@shoelace-style/shoelace/dist/react';
import '../styles/navbar.css'
import { useNavigate } from 'react-router-dom';

const HomeBar = (): JSX.Element => {
  const [Sidebar, setSidebar] = useState(window.innerWidth > 1280)
  const [Always, setAlways] = useState(window.innerWidth > 1280)
  const navigate = useNavigate()

  useEffect(() => {
    function change() {
      const bool = window.innerWidth > 1280
      setAlways(bool)
      setSidebar(bool)
    }
    window.addEventListener('resize', change)
    return () => window.removeEventListener('resize', change)
  }, [])

  const largeScr: boolean = window.innerWidth > 1280

  return (<>
    <nav>
      <div className="top">
        <div className='nav-part'>
          {!largeScr &&
            <SlIcon className='ham-menu' name='list' onClick={() => setSidebar(true)} />
          }
        </div>
        <h2>Palettes</h2>
        <button className='new-button' onClick={() => navigate('/palettes/new')}>
          + Add New
        </button>
      </div>
    </nav>
    <Drawer
      Type='home'
      Display={Sidebar}
      Contained={Always}
      Close={() => setSidebar(false)}
    />
  </>)
}

interface newPropsType {
  Name: string
  goHome: () => void
  addBox: () => void
  random: () => void
  clearAll: () => void
  onDiscard: () => void
  onSave: () => void
  changeName: () => void
}

const NewBar = (props: newPropsType): JSX.Element => {
  const { Name, goHome, changeName, onSave, onDiscard } = props
  return (<nav>
    <div className="top">
      <div className='nav-part'>
        <button className='home-button' onClick={goHome}>
          <SlIcon name='house-fill' />
        </button>
      </div>
      <div className="nav-part">
        <span className='Name' onClick={changeName}>
          {Name ?? 'New Palette'}
          <SlIcon name='pencil-fill' />
        </span>
      </div>
      <div className="nav-part">
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
    <div className="bottom">
      <button onClick={props.addBox}>Add New</button>
      <button onClick={props.random}>Random All</button>
      <button onClick={props.clearAll}>Clear All</button>
    </div>
  </nav>)
}

interface FTHPropsType {
  Type: string
  isDrawer: boolean
  onBtnClick?: () => void
}

const FTHBar = (props: FTHPropsType): JSX.Element => {
  const { Type, onBtnClick } = props
  const navigate = useNavigate()
  return (<nav>
    <div className="top">
      <div className='nav-part'>
        <SlIcon className='home-button' name='house-fill' onClick={() => navigate('/')} />
      </div>
      <h2>{Type}</h2>
      <button className='new-button' onClick={onBtnClick}>
        Clear
      </button>
    </div>
  </nav>
  )
}

interface colorPropType {
  Type: string
  Name: string
  Format: string
  changeFormat: () => void
  Level?: number
  changeLevel?: (v: number) => void
  back: number
  isSlider: boolean
}

const slider = (Level: number | undefined, changeLevel: any): JSX.Element => {
  return (
    <div className="bottom">
      <Slider className='Slider' min={100} max={900} step={100}
        marks={{
          100: '100', 200: '200', 300: '300', 400: '400',
          500: '500', 600: '600', 700: '700', 800: '800', 900: '900'
        }}
        included={false} defaultValue={Level} onChange={changeLevel} />
    </div>
  )
}

const ColorBar = (props: colorPropType): JSX.Element => {
  const { Name, Format, changeFormat, Level, changeLevel, back } = props
  const navigate = useNavigate()
  return (<nav>
    <div className="top">
      <div className='nav-part'>
        <button className='back-button' onClick={() => back && navigate(back)}>
          <SlIcon name='arrow-left-circle-fill' />
        </button>
        <button className='home-button' onClick={() => navigate('/')}>
          <SlIcon name='house-fill' />
        </button>
      </div>
      <h2>{Name}</h2>
      <SlSelect className='color-format' value={Format} size='small' filled onSlChange={changeFormat}>
        <SlOption value="hex"> Hex </SlOption>
        <SlOption value="rgb"> RGB </SlOption>
        <SlOption value="rgba"> RGBA </SlOption>
      </SlSelect>
    </div>
    {props.isSlider && slider(Level, changeLevel)}
  </nav>)
}

export { HomeBar, NewBar, FTHBar, ColorBar }
