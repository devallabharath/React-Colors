import { useState, useEffect } from 'react'
import Slider from 'rc-slider';
import Drawer from './drawer';
import { SlIcon, SlSelect, SlOption, SlTooltip } from '@shoelace-style/shoelace/dist/react';
import '../styles/navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  const [Sidebar, setSidebar] = useState(window.innerWidth > 1280)
  const [Always, setAlways] = useState(window.innerWidth > 1280)
  const navigate = useNavigate()

  useEffect(() => {
    function change () {
      const bool = window.innerWidth > 1280
      setAlways(bool)
      setSidebar(bool)
    }
    window.addEventListener('resize', change)
    return () => window.removeEventListener('resize', change)
  }, [])

  const render = () => {
    const { Type, isDrawer } = props;
    return (
      <>
        <nav>
          {Type === 'home' && homebar()}
          {Type === 'trash' && trashHiddenbar('Trash')}
          {Type === 'hidden' && trashHiddenbar('Hidden')}
          {Type === 'favourites' && trashHiddenbar('Favourites')}
          {Type === 'new' && newbar()}
          {Type === 'palette' && colorbar(true)}
          {Type === 'shades' && colorbar()}
          {Type === '405' && homebar(false)}
        </nav >
        {isDrawer &&
          <Drawer
            Type={props.Type}
            Display={Sidebar}
            Contained={Always}
            Close={() => setSidebar(false)}
          />
        }
      </>

    )
  }

  const homebar = (btn = true) => {
    const largeScr = window.innerWidth > 1280
    return (
      <div className="top">
        <div className='nav-part'>
          {!largeScr && <>
            <SlIcon className='ham-menu' name='list' onClick={() => setSidebar(true)} />
          </>}
        </div>
        <h2>Palettes</h2>
        {btn &&
          <button className='new-button'
            onClick={() => navigate('/palettes/new')}
          >
            + Add New
          </button>
        }
      </div>
    )
  }

  const trashHiddenbar = (type) => {
    const { onBtnClick } = props
    return (
      <div className="top">
        <div className='nav-part'>
          <SlIcon className='home-button' name='house-fill' onClick={() => navigate('/')} />
        </div>
        <h2>{type}</h2>
        <button className='new-button' onClick={onBtnClick}>
          Clear
        </button>
      </div>
    )
  }

  const newbar = () => {
    const { Name, goHome, onSave, onDiscard } = props
    return (
      <>
        <div className="top">
          <div className='nav-part'>
            <button className='home-button' onClick={goHome}>
              <SlIcon name='house-fill' />
            </button>
          </div>
          <div className="nav-part">
            <span className='Name' onClick={props.changeName}>
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
      </>
    )
  }

  const colorbar = (isSlider = false) => {
    const { Name, Format, changeFormat, Level, changeLevel, back } = props;
    return (
      <>
        <div className="top">
          <div className='nav-part'>
            <button className='back-button' onClick={() => navigate(back)}>
              <SlIcon name='arrow-left-circle-fill' />
            </button>
            <button className='home-button' onClick={() => navigate('/')}>
              <SlIcon name='house-fill' />
            </button>
          </div>
          <h2>{Name}</h2>
          <SlSelect className='color-format' value={Format}
            size='small' filled onSlChange={changeFormat}>
            <SlOption value="hex"> Hex </SlOption>
            <SlOption value="rgb"> RGB </SlOption>
            <SlOption value="rgba"> RGBA </SlOption>
          </SlSelect>
        </div>
        {isSlider && slider(Level, changeLevel)}
      </>
    )
  }

  const slider = (Level, changeLevel) => {
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

  return render()
}

export default Navbar
